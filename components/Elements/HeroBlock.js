import styled from "styled-components";
import Image from "next/image";
import React from "react";
import Github from "../../assets/github.svg";
import Cyberforum from "../../assets/cyberforum.svg";
import Envelope from "../../assets/envelope.svg";
import { Tooltip, Link } from "@mui/material";

const Container = styled("div")`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.6rem;
    padding-top: 2rem;

    .text {
        .hello {
            font-size: 2.2rem;
        }
        .short {
            font-size: 1.6rem;
        }
        .sendMe {
            display: flex;
            margin-top: 1rem;
            gap: 1rem;
            .icon {
                /* width: 2rem; */
                height: 2rem;
                display: flex;
                & .image {
                    align-items: center;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    .photo {
        height: 10rem;
        width: 10rem;
        flex-shrink: 0;
        border-radius: 0.4rem;
        overflow: hidden;
    }
    ${({ theme }) => theme.breakpoints.down("md")} {
        gap: 1rem;
        flex-direction: column-reverse;
        .text {
            .hello {
                font-size: 1.8rem;
                margin-bottom: 0;
            }
            .short {
                font-size: 1.4rem;
            }
        }
    }
`;
const HeroBlock = ({ data }) => (
    <Container>
        <div className="text">
            <h1 className="hello">{data.hello}</h1>
            <div className="short">
                {typeof data.short === "string" &&
                    data.short.split("\n").map((e, i) => <p key={i}>{e}</p>)}
            </div>
            <div className="sendMe">
                <Tooltip title="Перейти в профиль на сайте Github">
                    <Link
                        href="https://github.com/denisso"
                        className="anchor"
                        target="_blank"
                        title="Перейти в профиль на сайте Github"
                    >
                        <div className="icon">
                            <Github className="image" />
                        </div>
                    </Link>
                </Tooltip>
                <Tooltip title="Перейти в профиль на сайте Cyberforum">
                    <Link
                        href="https://www.cyberforum.ru/members/1837464.html"
                        className="anchor"
                        title="Перейти в профиль на сайте Cyberforum"
                        target="_blank"
                    >
                        <div className="icon">
                            <Cyberforum className="image" />
                        </div>
                    </Link>
                </Tooltip>
                <Tooltip title="Отправить письмо по электронной почте на адрес mr_dramm@mail.ru">
                    <Link
                        href="mailto:mr_dramm@mail.ru"
                        className="anchor"
                        title="Отправить письмо по электронной почте на адрес mr_dramm@mail.ru"
                        target="_blank"
                    >
                        <div className="icon">
                            <Envelope className="image" />
                        </div>
                    </Link>
                </Tooltip>
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
    </Container>
);

export default HeroBlock;
