import styled from "styled-components";
import Image from "next/image";
import React from "react";
import { LinksProfiles } from "./LinksProfiles";
import { useTheme } from "@mui/material/styles";

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
            margin-bottom: 1rem;
        }
    }
    .photo {
        height: 10rem;
        width: 10rem;
        flex-shrink: 0;
        border-radius: 0.4rem;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
        }
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

const HeroBlock = ({ data }) => {
    const theme = useTheme();
    return (
        <Container>
            <div className="text">
                <h1 className="hello">{data.hello}</h1>
                <div className="short">
                    {typeof data.short === "string" &&
                        data.short
                            .split("\n")
                            .map((e, i) => <p key={i}>{e}</p>)}
                </div>
                <LinksProfiles
                    className="sendMe"
                    color={theme.palette.color1[800]}
                />
            </div>
            <div className="photo">
                <picture>
                    <img
                        src={data.photo}
                        alt="Фотография автора сайта"
                        width={500}
                        height={500}
                        className="image"
                    />
                </picture>
            </div>
        </Container>
    );
};

export default HeroBlock;
