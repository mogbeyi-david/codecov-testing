const {getGithubReposForUser} = require("./functions");

describe("Get Github Repository Information for User", () => {
    it('should return the number of repositories', async () => {
        expect(await getGithubReposForUser("mogbeyi-david")).toEqual(30);
    });
})
