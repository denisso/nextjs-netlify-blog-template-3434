import React from "react";
import Layout from "../../components/Layout";
import { getListPosts, getPostData } from "../../lib/content";
import { convSlugtoTitle } from "../../lib/utils";
import Post from "../../components/Pages/Post";

const title = "Страница не найдена"

const Page = ({ page, data }) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);
    if (!data) {
        return (
            <Layout title={title} description={title}>
                <div>{title}</div>
            </Layout>
        );
    }
    return (
        <Layout title={data.title} description={data.title}>
            <Post post={page} data={data} />
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

    // for header nav
    props.page = convSlugtoTitle(slug);
    props.pages = [{ title: "Краткая справка", path: "/", url: "/" }];

    const posts = await getListPosts();
    for (const post of posts) {
        if (slug !== post.url) {
            post.url = `/post/${post.url}`;
            props.pages.push(post);
        }
    }

    return {
        props,
        revalidate: 5,
    };
}
