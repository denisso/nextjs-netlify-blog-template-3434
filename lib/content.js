import fetch from "./github";

export const getHomeData = async () => await fetch.getHomeData();

export const getPostData = async (slug) => await fetch.getPostData(slug);

export const getListPosts = async () => await fetch.getListPosts();
