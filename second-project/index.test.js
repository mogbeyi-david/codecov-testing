const {getGithubReposForUser, getJsonResponse} = require("./functions");

describe("Get Github Repository Information for User", () => {
    it('should return the number of repositories', async () => {
        expect(await getGithubReposForUser("mogbeyi-david")).toEqual(30);
    });
});

describe("Get Some Random JSON Response", () => {
    it('should an id of 1', async () => {
        expect(await getJsonResponse("https://jsonplaceholder.typicode.com/todos/1")).toEqual(1);
    });
});
