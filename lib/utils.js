import matter from "gray-matter";
import { convertMarkdownToHtml } from "./markdown";

/**
 *
 * @param {*} data
 * @param {*} key
 */
const sanitizeData = (data, key) => {
    switch (true) {
        case data[key] === undefined || data[key] === null:
            {
                data[key] = {};
            }
            break;
        case data[key] instanceof Date:
            {
                // Date object can't serialized
                data[key] = data[key].getTime();
            }
            break;
        case data[key] instanceof Object:
            {
                for (let keye in data[key]) {
                    sanitizeData(data[key], keye);
                }
            }
            break;
    }
};

/**
 *
 * @param {*} base64
 * @returns UTF8 string
 */
export const convBase64ToUTF8 = (base64) => {
    const buff = Buffer.from(base64, "base64");
    const str = buff.toString("utf-8");
    return str;
};

export const sanitize = (dataBase64) => {
    var data = matter(convBase64ToUTF8(dataBase64));
    var result = {};
    if (data instanceof Object) {
        for (var key in data) {
            if (key === "data") {
                sanitizeData(data, "data");
                result = { ...result, ...data.data };
            } else if (key === "content") {
                result.content = convertMarkdownToHtml(data["content"]);
            }
        }
    }

    return result;
};

/**
 * convert filename "lorem-ipsum-dolor.md" to title "lorem ipsum dolor"
 * @param {*} slug
 * @returns
 */
export const convFilenameToTitle = (filename) => {
    if (typeof filename === "string") {
        return filename.replace(/\.md/, "").replace(/-/g, " ");
    } else {
        return filename;
    }
};

export const convFilenameToSlug = (filename) => {
    if (typeof filename === "string") {
        return filename.replace(/\.md/, "");
    } else {
        return filename;
    }
};

export const convSlugtoTitle = (slug) => {
    if (typeof slug === "string") {
        return slug.replace(/-/g, " ");
    } else {
        return slug;
    }
};
