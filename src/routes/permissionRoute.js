const express = require('express');
const router = express.Router();
const { createPermission, getAllPermissions } = require('../controller/permissionController');

router.post('/create', createPermission);
router.get('/all', getAllPermissions);

module.exports = router;