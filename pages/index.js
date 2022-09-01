import { getFilesList } from "../lib/content";

const Home = ({ content }) => {
    console.log(JSON.stringify(content));
    return (
        <article>
            {content instanceof Array &&
                content.map((e) => <div key={e}>{e}</div>)}
        </article>
    );
};

export default Home;

export async function getStaticProps() {
    console.log("getStaticProps", getFilesList());

    return {
        props: {
            content: getFilesList(),
        },
        revalidate: 5,
    };
}
