import { getFilesList } from "../lib/content";
import { attributes, react as HomeContent } from "../content/home.md";

const Home = ({ content }) => {
    console.log(JSON.stringify(content));
    let { title } = attributes;
    return (
        <>
            <div>{title}</div>
            <article>
                {content instanceof Array &&
                    content.map((e) => <div key={e}>{e}</div>)}
            </article>
        </>
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
