const db = require("../models");

//define methods for the Express Controller
module.exports = {
  loanTransaction: (req, res) => {
    db.lender
      .aggregate([
        {
          $match: { status: "Available" || "Funded" }
        },
        {
          $match: { transaction: {
            type: "Origination" || "Sales"
          }}
        }
      ])
      .sort({ amount: 1 })
      .limit(5)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        res.json(err);
      });
  }
};
