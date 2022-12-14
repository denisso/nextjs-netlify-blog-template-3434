import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkHighlightjs from "remark-highlight.js";

/**
 * Every element has type one of them:  element, text
 * Type "element" can has property childen
 * @param {*} children
 */
const parse = (node) => {
    try {
        switch (true) {
            case Array.isArray(node):
                for (const child of node) parse(child);
                break;
            case node instanceof Object:
                if (node.type !== "element") return;

                if (node.tagName === "a") {
                    node.properties.target = "_blank";
                    return;
                }

                if (node.tagName === "img") {
                    node.properties.width = "640";
                    node.properties.height = "480";
                    return;
                }
                if (node.children) parse(node.children);
                break;
            default:
        }
    } catch (err) {}
};

const parseElements = () => {
    return (props) => {
        const { children } = props;
        if (!Array.isArray(children)) return;
        for (const child of children) parse(child);
    };
};
export const convertMarkdownToHtml = (markdownString) => {
    try {
        return unified()
            .use(remarkParse)
            .use(remarkHighlightjs)
            .use(remarkRehype)
            .use(rehypeStringify)
            .use(parseElements)
            .processSync(markdownString).value;
    } catch (e) {
        return e.message;
    }
};
