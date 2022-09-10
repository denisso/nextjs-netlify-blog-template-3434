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

const fetchWrapper = async (path, callback) => {
    let data = {};
    try {
        const response = await fetchGithub(path);
        data = callback(response);
    } catch (e) {
        return { error: e.message };
    }

    return { data };
};

github.getListPosts = () => fetchWrapper("content/posts", (data) => {
    const result = [];
    if (data instanceof Array) {
        for (let i = 0; i < response.data.length; i++)
            data.push(response.data[i]);
    }
    return result;
});

github.getHomeData = () => fetchWrapper("content/home.md", (data)=>{
    return sanitize(data.data.content);
})

export default github;
