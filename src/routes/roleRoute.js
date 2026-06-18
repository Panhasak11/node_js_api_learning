const express = require('express');
const router = express.Router();
const { createRole, getAllRoles, getById, setRolePermission} = require('../controller/roleController');

router.post('/create', createRole);
router.get('/all', getAllRoles);
router.get('/:id', getById);
router.post('/set-permissions', setRolePermission);

module.exports = router;
