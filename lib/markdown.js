import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

export const convertMarkdownToHtml = (markdownString) => {
    try {
        return unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeStringify)
            .processSync(markdownString).value;
    } catch (e) {
        return e.message;
    }
};
