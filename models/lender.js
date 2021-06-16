const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lenderSchema = new Schema({
  contact: {
    type: Mixed,
  },
  Disclaimer: {
    type: mongoose.SchemaType.ObjectId,
    ref: 'Loan'
  },
  entities: [{
    type: Schema.Types.ObjectId,
    ref: "Entity"
  }]
});

const Lender = mongoose.model("Lender", lenderSchema);

module.exports = Lender;