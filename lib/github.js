import { Octokit } from "octokit";
import { sanitize } from "./utils";
import { convFilenameToTitle, convFilenameToSlug } from "./utils";
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
 * get content for home page
 * https://docs.github.com/en/rest/repos/contents#get-repository-content
 * @returns
 */
github.getHomeData = () =>
    fetchWrapper("content/home.md", (response) => {
        return sanitize(response.data.content);
    });

github.getPostData = (slug) =>
    fetchWrapper(`content/posts/${slug}.md`, (response) => {
        return sanitize(response.data.content);
    });
export default github;
