const express = require('express');
const { deleteDocById } = require('../controllers/employeeControler');

const router = express.Router();
const EmployeeController = require('../controllers/employeeControler');

router.get('/', EmployeeController.getAllDoc);
router.post('/', EmployeeController.createDoc);

router.get("/:id", EmployeeController.getSingleDocById);
router.put("/:id", EmployeeController.updateDocById);
router.delete('/:id', deleteDocById);

module.exports = router;
