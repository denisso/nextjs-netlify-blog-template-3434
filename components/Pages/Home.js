import React from "react";
import Image from "next/image";
import moment from "moment";
import { Skills } from "../Elements/Skills";
import styled from "styled-components";

const Container = styled.div`
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
            background-color: orange;
            .image {
            }
        }
    }
    section.blockDescribe {
        article {
            text-indent: 2rem;
        }
        ul {
            list-style-position: inside;
        }
        a {
            text-decoration: underline;
        }
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
                    {/* <Image
                    src={data.photo}
                    alt="Фотография автора сайта"
                    width={500}
                    height={500}
                    className="image"
                /> */}
                </div>
            </section>
            <section className="skills">
                <h2>Навыки</h2>
                <Skills className="skills" skills={data.skills} />
            </section>
            <section className="blockDescribe">
                <h2>Обо мне</h2>
                <article
                    className=""
                    dangerouslySetInnerHTML={{ __html: data.content }}
                ></article>
            </section>
            <section className="blockJobs"></section>

            <div className="photo"></div>
            {/* <div className="dateupdate">
                {data.date && moment(data.date).format("YYYY/MM/DD hh:mm")}
            </div>
            <div className="birthday">
                {data.birthday && moment(data.birthday).format("YYYY/MM/DD")}
            </div> */}
        </Container>
    );
};
