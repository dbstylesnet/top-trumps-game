import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/graphql', async (req, res) => {
  try {
    let query;

    // If Apollo Client sends a DocumentNode, convert it to string
    if (typeof req.body.query === 'object' && req.body.query.loc) {
      query = req.body.query.loc.source.body;
    } else if (typeof req.body.query === 'string') {
      query = req.body.query;
    } else {
      return res.status(400).json({ error: 'Missing query' });
    }

    const body = {
      query,
      variables: req.body.variables || {},
    };

    const response = await fetch(
      'https://swapi-graphql.netlify.app/.netlify/functions/index',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => console.log('Proxy server running on http://localhost:4000'));
