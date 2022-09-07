import styled from "styled-components";

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
    background-color: ${({ theme }) => theme.palette.background};
    transition: background-color var(--transition);
    box-shadow: var(--boxShadowHorizontal) rgba(0, 0, 0, 0.5);
    padding: 1rem;
`;

export const Header = () => <Container>Я hider</Container>;
