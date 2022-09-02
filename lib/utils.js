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
                data[key] = data[key].getTime()
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
export const base64toUTF8 = (base64) => {
    const buff = Buffer.from(base64, "base64");
    const str = buff.toString("utf-8");
    return str;
};

export const sanitize = (dataBase64) => {
    var data = matter(base64toUTF8(dataBase64));
    var result = {}
    if (data instanceof Object) {
        for (var key in data) {
            if (key === "data") {
                sanitizeData(data, "data");
                result = {...result, ...data.data}
            } else if (key === "content") {
                result.content = convertMarkdownToHtml(data["content"]);
            }
        }
    }

    return result;
};
