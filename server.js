const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
let posts = [];

// Connect to MongoDB
mongoose.connect('your_mongo_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Post Schema
const postSchema = new mongoose.Schema({
    content: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  const Post = mongoose.model('Post', postSchema);

// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like HTML, CSS, and JS
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// API Endpoint to Save Posts
app.post('/api/posts', async (req, res) => {
    try {
      const newPost = new Post({ content: req.body.content });
      await newPost.save();
      const posts = await Post.find();
      res.status(201).json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


// Route to get all posts
app.get('/api/posts', async (req, res) => {
    const posts = await Post.find();
  res.json(posts);
});

// Route to create a new post
app.post('/api/posts', (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  const newPost = { id: Date.now(), content };
  posts.push(newPost);
  res.status(201).json(posts);
});

// Route to delete a post
app.delete('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  posts = posts.filter((post) => post.id !== postId);
  res.json(posts);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

