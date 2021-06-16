const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const entitySchema = new Schema({
  individual: {
    type: String,
  },
  llc: {
    type: String,
  },
  coporation: {
      type: String,
  },
  retirementAccount: {
      type: String
  }
});

const Entity = mongoose.model("Entity", entitySchema);

module.exports = Entity;