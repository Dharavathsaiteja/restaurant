const express = require('express');
const router = express.Router();

// Example user data (you would use a database in a real application)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
  // Add more user data as needed
];

// GET route to display a user profile
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.render('user/profile', { user });
});

// GET route to display a user login form
router.get('/login', (req, res) => {
  res.render('user/login');
});

// POST route to handle user login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Implement user authentication logic here
  // For example, you might check the credentials against the user data

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).send('Invalid credentials');
  }

  // Redirect or set up user session upon successful login
  // Example: req.session.user = user;
  res.redirect('/user/' + user.id);
});

// Add more user-related routes (e.g., registration, logout) as needed

module.exports = router;
