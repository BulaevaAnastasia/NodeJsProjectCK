const Expense = require('../../db/models/expense/index');

module.exports.getAllExpenses = (req, res, next) => {
    Expense.find().then(result => {
        res.send({data: result});
    });
};

module.exports.createNewExpense = (req, res, next) => {
    const expense = new Expense(req.body);
    expense.save().then(result => {
        Expense.find().then(result => {
            res.send({data: result});
        });
    }).catch(err => console.log(err));
};

module.exports.changeExpenseInfo = (req, res, next) => {
    Expense.updateOne({ _id: req.body._id }, req.body).then(result => {
        Expense.find({}).then(result => {
            res.send({data: result});
        });
    }).catch(err => console.log(err));
};


module.exports.deleteExpense = (req, res, next) => {
    Expense.deleteOne({ _id: req.query.id }).then(result => {
        Expense.find({}).then(result => {
            res.send({data: result});
        });
    }).catch(err => console.log(err));
}