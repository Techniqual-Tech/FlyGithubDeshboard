const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

const accesstoken = "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";

app.get('/repos/:username', async (req, res) => {
  const username = req.params.username;
  const page = req.query.page || 1;
  let perPage = req.query.per_page || 10;
  // Enforce a maximum of 100 repositories per page
  perPage = Math.min(perPage, 100);
  console.log("page:" + page + " perPage:" + perPage);

  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    });
    const repos = response.data;
    res.json(repos);
    //console.log("Response:"+repos[0].name);
  } catch (error) {
    res.status(404).json({ error: 'User not found or repositories not accessible.' });
  }
});
//for biodata
app.get('/biodata/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    });
    const bio = response.data;
    res.json(bio);
    //console.log("Response:"+bio.avatar_url);
  } catch (error) {
    res.status(404).json({ error: 'User not found or repositories not accessible.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
