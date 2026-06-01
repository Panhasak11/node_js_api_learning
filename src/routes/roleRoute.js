const express = require('express');
const router = express.Router();
const { createRole, getAllRoles, getById } = require('../controller/roleController');

router.post('/create', createRole);
router.get('/all', getAllRoles);
router.get('/:id', getById);

module.exports = router;
