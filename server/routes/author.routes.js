const express = require('express');

const { 
    handleCreateAuthor,
    handleGetAllAuthors,
    handleGetAuthorsById,
    handleDeleteAuthorsById,
    handleUpdateAuthorById
} = require('../controllers/author.controller')

const router = express.Router();

router.post('/', handleCreateAuthor)
router.get('/', handleGetAllAuthors)
router.get('/:id', handleGetAuthorsById)
router.delete('/:id', handleDeleteAuthorsById)
router.put('/:id', handleUpdateAuthorById)

module.exports = {authorRouter:router}