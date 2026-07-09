const express = require('express');
const router = express.Router();
const {getAllUsers, createUser, getById, updateUser, deleteUser} = require('../controller/userController');


router.get('/all-user', getAllUsers);
router.get('/:id', getById);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;