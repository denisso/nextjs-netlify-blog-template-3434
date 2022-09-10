import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Page = ({page}) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);
    return (
        <Layout
            title={"Тестовая"}
            description={`Ничего интересного`}
        >
            <h1>Page</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt non culpa, sit aut cupiditate. Illum possimus animi mollitia nam cum laboriosam pariatur corporis. Quo unde esse sed maiores quas.
            </div>
            <div>
                <Link href="/">Home</Link>
            </div>
        </Layout>
    );
};

export default Page;

export async function getStaticProps() {
    return {
        props: {
            page: "Page"
        },
        revalidate: 5,
    };
}