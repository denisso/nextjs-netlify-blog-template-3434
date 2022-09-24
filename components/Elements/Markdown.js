import styled from "styled-components";

const Content = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-indent: 2rem;
    ${({ theme }) => theme.breakpoints.down("md")} {
        text-indent: 1.2rem;
    }
    ${({ theme }) => theme.breakpoints.down("sm")} {
        text-indent: 0.5rem;
    }
    ul {
        list-style-position: inside;
    }

    & a {
        text-decoration: underline !important;
    }
    pre {
        text-indent: 0;
        margin-left: 2rem;
        ${({ theme }) => theme.breakpoints.down("md")} {
            margin-left: 1.2rem;
        }
        ${({ theme }) => theme.breakpoints.down("sm")} {
            margin-left: 0.5rem;
        }
        code {
            font-family: ${({ theme }) => theme.typography.fontSourceCode};
        }
        overflow-x: auto;
    }

    img {
        display: block;
        margin: 0 auto;
        object-fit: contain;
        max-width: 100%;
        width: auto;
        height: 400px;
        transition: height var(--transition);
        ${({ theme }) => theme.breakpoints.down("md")} {
            height: 300px;
        }
        @media (max-width: 750px) {
            height: 250px;
        }
        ${({ theme }) => theme.breakpoints.down("sm")} {
            height: 200px;
        }
        @media (max-width: 500px) {
            height: 150px;
        }
        @media (max-width: 400px) {
            height: 120px;
        }
    }
`;

export const Markdown = ({ content, className }) => {
    if (typeof content !== "string") return <></>;
    return (
        <Content
            className={className}
            dangerouslySetInnerHTML={{ __html: content }}
        ></Content>
    );
};
