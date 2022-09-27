import styled from "styled-components";
import { LinksProfiles } from "./Elements/LinksProfiles";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #e0e0e0;
    padding: 1rem;
    background-color: #091940;
    gap: 1rem;
    margin-top: 2rem;
    ${({ theme }) => theme.breakpoints.down("md")} {
        margin-top: 1rem;
    }
`;

export const Footer = () => {
    return (
        <Container>
            <LinksProfiles color={"#E0E0E0"} />
            <small>Автор сайта Денис aka mr_dramm</small>
        </Container>
    );
};
