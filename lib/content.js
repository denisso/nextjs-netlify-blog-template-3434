import fs from "fs";
import path from "path";
const filesDirectory = path.join(process.cwd());
export const getFilesList = () => {
    let list = [];
    try {
        list = fs.readdirSync(filesDirectory);
    } catch (e) {
        list.push(`error: ${e.message}`);
    }
    list.push(process.env.TEST)
    return list;
};
