import React from "react";
import Image from "next/image";
import { Skills } from "../Elements/Skills";
import styled from "styled-components";
import { Jobs } from "../Elements/Jobs";
import { Markdown } from "../Elements/Markdown";
import moment from "moment";
const Container = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    section.blockName {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 2rem;
        .text {
            .hello {
                font-size: 2.5rem;
            }
            .short {
                font-size: 2rem;
            }
            .sendMe {
                display: flex;
                margin-top: 1rem;
                gap: 1rem;
                .icon {
                    width: 2rem;
                    height: 2rem;
                    background-color: orange;
                }
            }
        }
        .photo {
            height: 10rem;
            width: 10rem;
            flex-shrink: 0;
            border-radius: 0.4rem;
            overflow: hidden;
            border: 5px solid ${({ theme }) => theme.palette.color1[600]};
            .image {
            }
        }
    }
    section.blockDescribe {
    }
    section.blockJobs {
    }
`;
export const Home = ({ data }) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);

    return (
        <Container>
            <section className="blockName">
                <div className="text">
                    <h1 className="hello">{data.hello}</h1>
                    <div className="short">
                        {typeof data.short === "string" &&
                            data.short
                                .split("\n")
                                .map((e, i) => <p key={i}>{e}</p>)}
                    </div>
                    <div className="sendMe">
                        <div className="icon"></div>
                        <div className="icon"></div>
                        <div className="icon"></div>
                    </div>
                </div>
                <div className="photo">
                    <Image
                        src={data.photo}
                        alt="Фотография автора сайта"
                        width={500}
                        height={500}
                        className="image"
                    />
                </div>
            </section>
            <section className="skills">
                <h2>Навыки</h2>
                <Skills className="skills" skills={data.skills} />
            </section>
            <section className="blockDescribe">
                <h2>Обо мне</h2>
                <Markdown content={data.body} />
            </section>
            <section className="blockJobs">
                <h2>Компании</h2>
                <Jobs jobs={data.jobs} />
            </section>
            <section>
                Обновлено:{" "}
                {data.date && moment(data.date).format("YYYY/MM/DD hh:mm")}
            </section>
        </Container>
    );
};
