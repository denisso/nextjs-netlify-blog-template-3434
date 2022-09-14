import React from "react";
import { getHomeData, getListPosts } from "../lib/content";
import Layout from "../components/Layout";
import { Home } from "../components/Pages/Home";

const HomePage = (props) => {
    const { data } = props;
    return (
        <Layout
            title={data.title}
            description={`${data.title} - ${data.subtitle}`}
        >
            <Home {...props} />
        </Layout>
    );
};

export default HomePage;

export async function getStaticProps() {
    const props = {};
    props.data = await getHomeData();
    props.page = "Краткая справка";
    props.pages = [];
    const posts = await getListPosts();
    for (const post of posts) {
        post.url = `/post/${post.url}`;
        props.pages.push(post);
    }
    return {
        props,
        revalidate: 5,
    };
}
