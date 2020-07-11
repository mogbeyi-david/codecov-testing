const fetch = require("node-fetch");

const getGithubReposForUser = async (username) => {
    const endpoint = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(endpoint);
    const result = await response.json();
    return result.length;
};

const getJsonResponse = async (link) => {
    const response = await fetch(link);
    const result = await response.json();
    const {id} = result;
    return id
};

module.exports = {getGithubReposForUser, getJsonResponse};
