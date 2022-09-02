import { Octokit } from "octokit";
import { sanitize } from "./utils"

const octokit = new Octokit({
    auth: process.env.OAUTHREPOSITORY,
});

const credo = {
    owner: process.env.OWNER,
    repo: process.env.REPO,
};

const github = {};

github.getHomeData = async () => {
    let result = {};
    try {
        const data = await octokit.request(
            "GET /repos/{owner}/{repo}/contents/{path}",
            {
                ...credo,
                path: "content/home.md",
            }
        );
        result = sanitize(data.data.content)
        // console.log("result", result)
    } catch (e) {
        result = { error: e.message };
    }
    result.credo = credo
    return result;
};

export default github;
