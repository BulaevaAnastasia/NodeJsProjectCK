const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseScheme = new Schema ({
    store: String,
    date: Date,
    sum: Number
});

const Expense = mongoose.model('expense', expenseScheme);
module.exports = Expense;