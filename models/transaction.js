const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  origination: {
    type: Date,
    default: Date.now
  },
  sales: {
    type: Number,
  },
  loan: {
    type: Schema.Types.ObjectId,
    ref: "Loan"
  },
  lenders: [{
    type: Schema.Types.ObjectId,
    ref: "Lender"
  }]
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;