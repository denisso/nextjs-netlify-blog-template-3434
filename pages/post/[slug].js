import React from "react";
import Layout from "../../components/Layout";
import { getListPosts, getPostData } from "../../lib/content";
import Post from "../../components/Pages/Post";

const titleFotFound = "Нет данных для отображения";

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
    let posts = []
    try {
        posts = await getListPosts();
    } catch (err) {}

    const paths = [];
    if (posts instanceof Array) {
        for (const post of posts) {
            paths.push({ params: { slug: post.url } });
        }
    }

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const slug = context.params.slug;

    let props = {};
    try {
        props.data = await getPostData(slug);
    } catch (err) {}

    let posts = {};
    props.pages = [];
    try {
        posts = await getListPosts();
        const indx = posts.findIndex((e) => e.url === slug);
        if (indx === -1) {
            props.pages[0] = {
                title: posts[indx].title,
                url: `/post/${encodeURIComponent(posts[indx].url)}`,
            };
            posts.splice(indx, 1);
        }
    } catch (err) {}

    props.pages[props.pages.length] = {
        title: "Страница автора сайта",
        url: "/",
    };

    for (const post of posts) {
        post.url = `/post/${encodeURIComponent(post.url)}`;
        props.pages.push(post);
    }

    return {
        props,
        revalidate: 5,
    };
}
