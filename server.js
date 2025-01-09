const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let posts = [];

app.post('/api/posts', (req, res) => {
  const newPost = req.body.content;
  posts.push(newPost);
  res.status(201).json({ message: 'Post created!', posts });
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
