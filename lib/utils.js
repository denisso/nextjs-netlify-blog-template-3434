import matter from "gray-matter";

/**
 * prepare For Serialization
 * @param {*} data
 * @param {*} key
 */
export const prepareForSerialization = (data, level = 0) => {
    const res = Array.isArray(data) ? [] : {};
    for (const key in data) {
        switch (true) {
            case data[key] instanceof Date:
                res[key] = data[key].getTime();
                break;
            case typeof data[key] === "object":
                res[key] = prepareForSerialization(data[key], level + 1);
                break;
            default: {
                res[key] = data[key];
            }
        }
    }
    return res;
};

/**
 * Parse string base64 to UTF8
 * @param {*} base64
 * @returns UTF8 string
 */
export const convBase64ToUTF8 = (base64) => {
    const buff = Buffer.from(base64, "base64");
    const str = buff.toString("utf-8");
    return str;
};

/**
 * Parse YML string to Object
 * @param {*} yml
 * @returns
 */
export const parseYML = (yml) => {
    return matter(yml);
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
