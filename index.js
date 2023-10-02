const express = require('express')
const morgan = require('morgan-body');
const cors = require('cors')

const { getPosts, createPost } = require('./queries.js')

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

app.get('/posts', async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  const insertPost = await createPost(titulo, url, descripcion)
  res.json(insertPost);
})



