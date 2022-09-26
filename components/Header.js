import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { Link as LinkMaterial } from "@mui/material";
import Link from "next/link";
import IconTelegram from "../assets/telegram.svg";

import { NavMenu } from "./Header/NavMenu";

const Container = styled("div")`
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
    outline: 2px solid ${({ theme }) => theme.palette.rootColor};
    transition: background-color var(--transition);
    box-shadow: var(--boxShadowHorizontal) rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;

    & > * + * {
        margin-left: 1rem;
    }

    color: ${({ theme }) => theme.palette.color1[500]};
    transition: color var(--transition);
    .logo {
        flex-shrink: 0;
        height: 2rem;
        width: 2rem;
        .icon {
            stroke: ${({ theme }) => theme.palette.color1[800]};
            stroke-width: 8;
        }
    }
    .nav {

    }
    .side {
        display: flex;
        align-items: center;
        margin-left: auto;
        flex-shrink: 0;
        .messageMe {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.palette.color1[500]};
            fill: ${({ theme }) => theme.palette.color1[500]};
            transition: color var(--transition), fill var(--transition);
            flex-shrink: 0;
            &:hover {
                color: ${({ theme }) => theme.palette.color1[800]};
                fill: ${({ theme }) => theme.palette.color1[800]};
            }
            .text {
                white-space: nowrap;
            }
            ${({ theme }) => theme.breakpoints.down("md")} {
                .text {
                    display: none;
                }
            }
            .icon {
                width: 1.5rem;
                height: 1.5rem;
                margin-left: 1rem;
                flex-shrink: 0;
            }
        }
    }
`;

export const Header = (props) => {

    return (
        <Container>
            <div className="logo">
                <Link href="/">
                    <a>
                        <Logo className="icon" />
                    </a>
                </Link>
            </div>
            <NavMenu className="nav" {...props} />
            <div className="side">
                <LinkMaterial
                    href="https://t.me/DenisReactWebCoder"
                    target="_blank"
                    className="messageMe"
                >
                    <span className="text">Связь по Telegram</span>{" "}
                    <IconTelegram className="icon" />
                </LinkMaterial>
            </div>
        </Container>
    );
};
