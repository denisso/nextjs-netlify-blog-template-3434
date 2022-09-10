import React from "react";
import { getHomeData } from "../lib/content";
import Layout from "../components/Layout";
import { Home } from "../components/Pages/Home";
import Link from "next/link";

const HomePage = ({ data, page }) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);

    return (
        <Layout
            title={data.title}
            description={`${data.title} - ${data.subtitle}`}
        >
            {/* <Home data={data}/> */}
            <h1>Home</h1>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                consequuntur consequatur fuga inventore dolores quidem molestiae
                eveniet omnis deleniti adipisci itaque, harum quae animi, modi
                nesciunt dolore. Alias, tenetur illum?
            </div>
            <div>
                <Link href="/page">Page</Link>
            </div>
        </Layout>
    );
};

export default HomePage;

export async function getStaticProps() {
    return {
        props: {
            data: await getHomeData(),
            page: "Home"
        },
        revalidate: 5,
    };
}
