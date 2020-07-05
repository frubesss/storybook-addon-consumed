const { Octokit } = require("@octokit/rest");
const express = require("express");
const app = express();
const port = 3000;

app.get("/githubsearch", async (req, res) => {
  try {
    const octokit = new Octokit({ auth: process.env.GITHUB_SEARCH_API_TOKEN });
    const encodedComponentImportPath = encodeURI(req.query.componentImportPath);
    octokit
      .paginate(
        `GET /search/code?q=${encodedComponentImportPath}+org%3Amediaingenuity`,
        {
          per_page: 100,
        }
      )
      .then((responseJson) => {
        const uniqueRepositories = filterUniqueRepositories(responseJson);
        const formatResponse = uniqueRepositories.map((item) => {
          return {
            repositoryName: item.repository.name,
            repositoryUrl: item.repository.html_url,
            itemSha: item.sha,
          };
        });
        res.json(formatResponse);
      })
      .catch((error) => {
        res.status(500).json({ error: error.toString() });
      });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const filterUniqueRepositories = (responseJson) => {
  return [
    ...new Map(responseJson.map((item) => [item.repository.id, item])).values(),
  ];
};

module.exports = expressMiddleWare;
