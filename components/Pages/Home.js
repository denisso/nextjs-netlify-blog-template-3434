import React from "react";
import { Skills } from "../Elements/Skills";
import styled from "styled-components";
import { Jobs } from "../Elements/Jobs";
import { Markdown } from "../Elements/Markdown";
import moment from "moment";
import HeroBlock from "../Elements/HeroBlock";
const Container = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    ${({ theme }) => theme.breakpoints.down("md")} {
        gap: 2.2rem;
    }
    ${({ theme }) => theme.breakpoints.down("sm")} {
        gap: 1.7rem;
    }
    ${({ theme }) => theme.breakpoints.down("xs3")} {
        gap: 1.3rem;
    }
    ${({ theme }) => theme.breakpoints.down("xs2")} {
        gap: 1rem;
    }
`;

export const Home = ({ data }) => {
    const [client, setClient] = React.useState(false);
    React.useEffect(() => {
        setClient(true);
    }, []);

    return (
        <Container>
            <HeroBlock data={data}/>
            <Skills className="skills" skills={data.skills} />
            <section className="blockDescribe">
                <h2>Обо мне</h2>
                <Markdown content={data.body} />
            </section>
            <Jobs jobs={data.jobs} />
        </Container>
    );
};
