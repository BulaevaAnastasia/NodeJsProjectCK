const express = require('express');
const router = express.Router();

const {
    getAllExpenses,
    createNewExpense,
    changeExpenseInfo,
    deleteExpense
} = require('../controllers/expense.controller');

// Expenses routes
router.get('/allExpenses', getAllExpenses);
router.post('/saveExpense', createNewExpense);
router.put('/changeExpense', changeExpenseInfo);
router.delete('/removeExpense', deleteExpense);

module.exports = router;