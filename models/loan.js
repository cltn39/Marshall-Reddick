const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loanSchema = new Schema({
  amount: {
    type: Number,
  },
  interestRate: {
    type: decimal128,
  },
  status: {
    type: String,
    enum: ['Draft', 'Available', 'Funded', 'Complete']
  },
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: "Transaction"
  }]
});

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
