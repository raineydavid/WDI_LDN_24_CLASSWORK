const express = require('express');
const router  = express.Router();

let id =        2;
const books = [
  {
    id: 1,
    title: 'Harry Potter',
    author: 'J K Rowling',
    description: 'Kid gets scar. Finds magic. Stuff.'
  }
];

// A home route
router.get('/',               (req, res) => res.render('home'));

// RESTful routes for the Book resource
// All URLS should contain /books

// INDEX
router.get('/books',          (req, res) => res.render('books/index'));
// NEW
router.get('/books/new',      (req, res) => res.render('books/new'));
// SHOW
router.get('/books/:id',      (req, res) => res.render('books/show'));
// CREATE
router.post('/books',         (req, res) => res.send('CREATE'));
// EDIT
router.get('/books/:id/edit', (req, res) => res.send('books/edit'));
// UPDATE
router.put('/books/:id',      (req, res) => res.send('UPDATE'));
// DELETE
router.delete('/books/:id',   (req, res) => res.send('DELETE'));

module.exports = router;
