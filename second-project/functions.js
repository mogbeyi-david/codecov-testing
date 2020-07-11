const fetch = require("node-fetch");

const getGithubReposForUser = async (username) => {
    const endpoint = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(endpoint);
    const result = await response.json();
    return result.length;
};

module.exports = {getGithubReposForUser};
