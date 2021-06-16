const db = require('../models');

//define methods for the Express Controller
module.exports = {
  findAll: function (req, res) {
    db.Categories.find(req.query)
      .then((dbAllCategories) => res.json(dbAllCategories))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
};
