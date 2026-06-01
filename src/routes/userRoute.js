const express = require('express');
const router = express.Router();
const {getAllUsers, createUser, getById} = require('../controller/userController');


router.get('/all-user', getAllUsers);
router.get('/:id', getById);
router.post('/create', createUser);

module.exports = router;