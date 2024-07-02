// app.js
const express = require('express');
const crypto = require('crypto');

const app = express();
const port = 3000;

// Simulated database
let users = [];

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the test application!' });
});

// Create a new user (vulnerable to NoSQL injection)
app.post('/users', (req, res) => {
  const { username, password } = req.body;
  
  // Vulnerability: NoSQL injection possible here
  const user = users.find(u => u.username === username);
  
  if (user) {
    res.status(400).json({ error: 'Username already exists' });
  } else {
    const newUser = { 
      id: crypto.randomUUID(),
      username, 
      password // Vulnerability: Storing password in plain text
    };
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', userId: newUser.id });
  }
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; // Export for testing