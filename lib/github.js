import { Octokit } from "octokit";
import { sanitize } from "./utils";

const octokit = new Octokit({
    auth: process.env.OAUTHREPOSITORY,
});

const fetchGithub = async (path) =>
    await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
        owner: process.env.OWNER,
        repo: process.env.REPO,
        path,
    });

const github = {};

const getListPosts = async () => {
    let list = [];
    try {
        const response = await fetchGithub("content/posts")

        if (response.data instanceof Array) {
            list = response.data.reduce(
                (p, { name, path }) => (p.push({ name, path }), p),
                []
            );
        }
        console.log(list);
    } catch (e) {
        // result = { error: e.message };
    }

    return list;
};

github.getHomeData = async () => {
    let result = {};
    try {
        const data =  await fetchGithub("content/home.md")
        result = sanitize(data.data.content);
        const listPosts = await getListPosts();
    } catch (e) {
        result = { error: e.message };
    }

    return result;
};

export default github;
