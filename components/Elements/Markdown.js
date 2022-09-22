import styled from "styled-components";

const Content = styled("div")`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-indent: 2rem;

    ul {
        list-style-position: inside;
    }

    & a {
        text-decoration: underline;
    }
    pre{
        text-indent: 0;
        margin-left: 2rem;
        code{
            font-family: ${({ theme }) => theme.typography.fontSourceCode};
        }
    }
    
    img {
        display: block;
        margin: 0 auto;
    }
`;

export const Markdown = ({ content, className }) => {
    if (typeof content !== "string") return <></>;
    return <Content className={className} dangerouslySetInnerHTML={{ __html: content }}></Content>;
};
