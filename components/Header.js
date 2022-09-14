import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { Link as LinkMaterial } from "@mui/material";
import Link from "next/link";
import IconTelegram from "../assets/telegram.svg";
import ArrowDropDown from "../assets/arrovDown.svg";

const Container = styled.div`
    ${({ theme }) => theme.breakpoints.up("sm")} {
        border-top-left-radius: var(--borderRadiusBlock);
        border-top-right-radius: var(--borderRadiusBlock);
    }
    display: flex;
    align-items: center;

    position: sticky;
    z-index: var(--zIndexSteakyHeader);
    top: 0px;
    background-color: ${({ theme }) => theme.palette.rootColor};
    transition: background-color var(--transition);
    box-shadow: var(--boxShadowHorizontal) rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;

    & > * + * {
        margin-left: 1rem;
    }

    color: ${({ theme }) => theme.palette.color1[500]};
    transition: color var(--transition);
    .logo {
        height: 2rem;
        width: 2rem;
        .logoImg {
            stroke: ${({ theme }) => theme.palette.color1[800]};
            stroke-width: 8;
        }
    }
    .nav {
        position: relative;
        background-color: ${({ theme }) => theme.palette.rootColor};
        overflow: hidden;
        .itemHover {
            display: flex;
            align-items: center;
            transition: color var(--transition);
            .icon {
                width: 1rem;
                height: 1rem;
                fill: ${({ theme }) => theme.palette.color1[500]};
                transition: fill var(--transition), transform var(--transition);
            }
        }
        &:hover {
            overflow: visible;
            color: ${({ theme }) => theme.palette.color1[800]};

            .icon {
                fill: ${({ theme }) => theme.palette.color1[800]};
                transform: rotate(90deg);
            }
        }
        &:hover .navItems {
            opacity: 1;
        }
        .navItems {
            display: flex;
            flex-direction: column;
            opacity: 0;
            transition: opacity var(--transition);
            position: absolute;
            top: 100%;
            border: solid;
            background-color: ${({ theme }) => theme.palette.rootColor};
            .navItem {
                padding: 0.5rem;
                white-space: nowrap;
            }
        }
    }
    .side {
        display: flex;
        align-items: center;
        margin-left: auto;
        .messageMe {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.palette.color1[500]};
            fill: ${({ theme }) => theme.palette.color1[500]};
            transition: color var(--transition), fill var(--transition);
            &:hover {
                color: ${({ theme }) => theme.palette.color1[800]};
                fill: ${({ theme }) => theme.palette.color1[800]};
            }
            .iconWrapper {
                width: 1.5rem;
                height: 1.5rem;
                margin-left: 1rem;
                .icon {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
`;

export const Header = ({ page, pages }) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);
    return (
        <Container>
            <div className="logo">
                <Logo className="logoImg" />
            </div>
            <div className="nav">
                <div className="itemHover">
                    <ArrowDropDown className="icon" />
                    <spann className="text">{page}</spann>
                </div>
                <div className="navItems">
                    {pages instanceof Array &&
                        pages.map((e) => (
                            <Link key={e.path} href={e.url}>
                                <a className="navItem">{e.title}</a>
                            </Link>
                        ))}
                </div>
            </div>
            <div className="side">
                <LinkMaterial
                    href="https://t.me/DenisReactWebCoder"
                    target="_blank"
                    className="messageMe"
                >
                    <span>Мой телеграм для связи </span>{" "}
                    <div className="iconWrapper">
                        <IconTelegram className="icon" />
                    </div>
                </LinkMaterial>
            </div>
        </Container>
    );
};
