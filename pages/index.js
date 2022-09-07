import { getHomeData } from "../lib/content";
import Layout from "../components/Layout";
import { Home } from "../components/Pages/Home";

const HomePage = ({ data }) => {
    return (
        <Layout title={data.title} description={`${data.title} - ${data.subtitle}`}>
            <Home data={data}/>
        </Layout>
    );
};

export default HomePage;

export async function getStaticProps() {
    return {
        props: {
            data: await getHomeData(),
        },
        revalidate: 5,
    };
}
