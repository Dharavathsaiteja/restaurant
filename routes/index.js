const express = require('express');
const router = express.Router();

// Define routes for the main pages
router.get('/', (req, res) => {
  // Render the homepage (index.jade or index.pug)
  res.render('index');
});

router.get('/menu', (req, res) => {
  // Render the menu page (menu.jade or menu.pug)
  res.render('menu');
});

router.get('/order', (req, res) => {
  // Render the order page (order.jade or order.pug)
  res.render('order');
});

// Add logic for handling orders and checkout here

module.exports = router;
