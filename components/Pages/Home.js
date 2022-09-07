import Image from "next/image";
import moment from "moment";
import { Skills } from "../Elements/Skills";
import styled from "styled-components"

const Container = styled.div`

`
export const Home = ({data}) => {
    return (
        <>
            <div className="name">{data.name}</div>
            <div className="photo">
                <Image
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
            <Skills className="skills" skills={data.skills}/>

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
        </>
    );
};
