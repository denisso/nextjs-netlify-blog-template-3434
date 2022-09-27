import React from "react";
import Layout from "../../components/Layout";
import { getListPosts, getPostData } from "../../lib/content";
import Post from "../../components/Pages/Post";

const titleFotFound = "Страница не найдена";

const Page = (props) => {
    if (!props.data) {
        return (
            <Layout title={titleFotFound} description={titleFotFound}>
                <div>{titleFotFound}</div>
            </Layout>
        );
    }

    return (
        <Layout title={props.data.title} description={props.data.title}>
            <Post {...props} />
        </Layout>
    );
};

export default Page;

export async function getStaticPaths() {
    const posts = await getListPosts();
    const paths = [];
    if (posts instanceof Array) {
        for (const post of posts) {
            paths.push({ params: { slug: post.url } });
        }
    }

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const slug = context.params.slug;

    const props = {};
    // data for page
    props.data = await getPostData(slug);

    const posts = await getListPosts();

    props.pages = [];
    const post = posts.find((e) => e.url === slug);
    if (post) {
        props.pages[0] = {
            title: post.title,
            url: `/post/${encodeURIComponent(post.url)}`,
        };
    }
    props.pages[props.pages.length] = { title: "Страница автора сайта", url: "/" };

    for (const post of posts) {
        if (slug !== post.url) {
            post.url = `/post/${encodeURIComponent(post.url)}`;
            props.pages.push(post);
        }
    }

    return {
        props,
        revalidate: 5,
    };
}
