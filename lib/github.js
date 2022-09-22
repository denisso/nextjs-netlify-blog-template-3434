import { Octokit } from "octokit";
import {
    parseYML,
    convBase64ToUTF8,
    prepareForSerialization,
    convFilenameToTitle,
    convFilenameToSlug,
} from "./utils";

import { convertMarkdownToHtml } from "./markdown";
/**
 * OAUTH REPOSITORY KEY
 * stored in netlify dashboard
 */
const octokit = new Octokit({
    auth: process.env.OAUTHREPOSITORY,
});

/**
 * Fuction wrapper for fetch content from repository
 * @param {*} path relative path to content in current repository
 * @returns
 */
const fetchGithub = async (path) =>
    await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
        owner: process.env.OWNER,
        repo: process.env.REPO,
        path,
    });

const github = {};

/**
 * Function wrapper for handle errors and unify interface
 * @param {*} path
 * @param {*} callback
 * @returns
 */
const fetchWrapper = async (path, callback) => {
    let data = {};
    try {
        const response = await fetchGithub(path);
        data = callback(response);
    } catch (e) {
        return { error: e.message };
    }

    return data;
};

/**
 * get content "posts" directory
 * https://docs.github.com/en/rest/repos/contents#if-the-content-is-a-directory
 * response.data is array
 * @returns
 */
github.getListPosts = () =>
    fetchWrapper("content/posts", (response) => {
        const data = response ? response.data : [];
        const result = [];
        if (data instanceof Array) {
            for (let i = 0; i < data.length; i++)
                result.push({
                    // convert lorem-ipsum-dolor.md to lorem ipsum dolor
                    title: convFilenameToTitle(data[i].name),
                    path: data[i].path,
                    // convert lorem-ipsum-dolor.md to lorem-ipsum-dolor
                    url: convFilenameToSlug(data[i].name),
                });
        }
        return result;
    });

/**
 * get content for Home page
 * https://docs.github.com/en/rest/repos/contents#get-repository-content
 * @returns
 */
github.getHomeData = () =>
    fetchWrapper("content/home.md", (response) => {
        var data = parseYML(convBase64ToUTF8(response.data.content));
        const result = {
            ...prepareForSerialization(data["data"]),
            body: convertMarkdownToHtml(data["content"]),
        };
        return result;
    });

/**
 * get content for Post page
 * https://docs.github.com/en/rest/repos/contents#get-repository-content
 * @returns
 */
github.getPostData = (slug) =>
    fetchWrapper(`content/posts/${slug}.md`, (response) => {
        var data = parseYML(convBase64ToUTF8(response.data.content));

        const result = {
            ...prepareForSerialization(data["data"]),
            body: convertMarkdownToHtml(data["content"]),
        };
        if(Array.isArray(result.notes)){
            for(const note of result.notes){
                note.short = convertMarkdownToHtml(note.short)
                note.body = convertMarkdownToHtml(note.body)
            }
        }
        return result;
    });
    
export default github;
