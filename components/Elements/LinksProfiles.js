import React from "react";
import { Tooltip, Link } from "@mui/material";
import styled from "styled-components";
import Github from "../../assets/github.svg";
import Cyberforum from "../../assets/cyberforum.svg";
import Envelope from "../../assets/envelope.svg";

const links = {
    github: {
        icon: Github,
        title: "Перейти в профиль на сайте Github",
        href: "https://github.com/denisso",
    },
    cyberforun: {
        icon: Cyberforum,
        title: "Перейти в профиль на сайте Cyberforum",
        href: "https://www.cyberforum.ru/members/1837464.html",
    },
    mail: {
        icon: Envelope,
        title: "Отправить письмо по электронной почте на адрес mr_dramm@mail.ru",
        href: "mailto:mr_dramm@mail.ru",
    },
};

const CustomLink = ({ link }) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);
    const Icon = links[link].icon;

    return client ? (
        <Tooltip title={links[link].title}>
            <Link href={links[link].href} className="anchor" target="_blank">
                <div className="icon">
                    <Icon className="image" />
                </div>
            </Link>
        </Tooltip>
    ) : (
        <Link
            href={links[link].href}
            className="anchor"
            target="_blank"
            {...(!client && {
                title: links[link].title,
            })}
        >
            <div className="icon">
                <Icon className="image" />
            </div>
        </Link>
    );
};
CustomLink.displayName = "Customlink";

const Container = styled("div")`
    display: flex;
    margin-top: 1rem;
    gap: 1rem;
    .icon {
        /* width: 2rem; */
        height: 2rem;
        display: flex;
        & .image {
            fill: ${({color})=>color};
            color: ${({color})=>color};
            align-items: center;
            width: 100%;
            height: auto;
        }
    }
`;

export const LinksProfiles = ({ className, color }) => {
    return (
        <Container className={className} color={color}>
            {Object.keys(links).map((link) => (
                <CustomLink key={link} link={link} />
            ))}
        </Container>
    );
};
