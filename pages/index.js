import { getHomeData } from "../lib/content";
import Image from "next/image";
import moment from "moment";
import Layout from "../components/Layout";

const Home = ({ data }) => {
    return (
        <Layout title={data.title} description={`${data.title} - ${data.subtitle}`}>
            <div className="name">{data.name}</div>
            <div className="photo">
                <Image
                    //   loader={}
                    src={data.photo}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>
            <div className="dateupdate">
                {data.date && moment(data.date).format("YYYY/MM/DD hh:mm")}
            </div>
            <div className="birthday">
                {data.birthday && moment(data.birthday).format("YYYY/MM/DD")}
            </div>
            <div className="skills">
                {typeof data.skills === "string" &&
                    data.skills
                        .split(",")
                        .map((e, i) => <div key={i}>{e}</div>)}
            </div>
            <div className="jobs">
                {data.jobs instanceof Array &&
                    data.jobs.map((job, i) => (
                        <div key={i} className="job">
                            <div className="company">{job.company}</div>
                            <div className="dateFrom">
                                {job.dateFrom &&
                                    moment(job.dateFrom).format("YYYY/MM/DD")}
                            </div>
                            <div className="dateTo">
                                {job.dateTo &&
                                    moment(job.dateTo).format("YYYY/MM/DD")}
                            </div>
                            <div className="responsibilities">
                                {job.responsibilities}
                            </div>
                            <div className="description">{job.description}</div>
                        </div>
                    ))}
            </div>
            <article
                dangerouslySetInnerHTML={{ __html: data.content }}
            ></article>
        </Layout>
    );
};

export default Home;

export async function getStaticProps() {
    return {
        props: {
            data: await getHomeData(),
        },
        revalidate: 5,
    };
}
