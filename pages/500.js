import Layout from "../components/Layout";
import Link from "next/link";
import styled from "styled-components";

const Container = styled("div")`
    display: grid;
    place-items: center;
`;

const title = "Внутренняя ошибка сервера";

const Page = () => {
    return (
        <Layout title={title} description={title}>
            <Container>
                <div>{title}</div>
                <div>
                    <Link href="/">Перейти на главную страницу</Link>
                </div>
            </Container>
        </Layout>
    );
};

export default Page;

export async function getStaticProps(context) {
    let props = {};

    let posts = [];
    props.pages = [];

    props.pages[props.pages.length] = {
        title: title,
        url: "/500",
    };

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
