import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { getListPosts, getPostData } from "../../lib/content";
import { convSlugtoTitle } from "../../lib/utils";

const Page = ({ page, data }) => {
    if (!data) {
        return (
            <Layout title="Страница не найдена" description={""}>
                <div>Not found</div>
            </Layout>
        );
    }
    return (
        <Layout title={data.title} description={data.title}>
            <h1>{page}</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                deserunt non culpa, sit aut cupiditate. Illum possimus animi
                mollitia nam cum laboriosam pariatur corporis. Quo unde esse sed
                maiores quas.
            </div>
            <div>
                <Link href="/">Home</Link>
            </div>
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
    // for header nav
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
