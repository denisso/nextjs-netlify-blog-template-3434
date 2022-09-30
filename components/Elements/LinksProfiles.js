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
        width: 3.5,
    },
    mail: {
        icon: Envelope,
        title: "Отправить письмо по электронной почте на адрес mr_dramm@mail.ru",
        href: "mailto:mr_dramm@mail.ru",
    },
};

const IconContainer = styled("div")`
    display: flex;
    height: 2rem;
    width: ${({ width }) => (width ? `${2 * width}rem` : "2rem")};
    & .image {
        fill: ${({ color }) => color};
        color: ${({ color }) => color};
        align-items: center;
        width: 100%;
        height: auto;
    }
`;

const CustomLink = ({ link, color }) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);
    const Icon = links[link].icon;
  
    return client ? (
        <Tooltip title={links[link].title}>
            <Link href={links[link].href} className="anchor" target="_blank">
                <IconContainer
                    width={links[link].width}
                    height={links[link].height}
                    color={color}
                >
                    <Icon className="image" />
                </IconContainer>
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
    gap: 1rem;
`;

export const LinksProfiles = ({ className, color }) => {
    return (
        <Container className={className} >
            {Object.keys(links).map((link) => (
                <CustomLink key={link} link={link} color={color}/>
            ))}
        </Container>
    );
};
