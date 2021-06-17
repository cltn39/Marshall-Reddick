const router = require('express').Router();
const controller = require ('../../controllers')

// Matches with 'api/loantransaction'
router.route('/loantransaction')
.get(controller.loanTransaction)

module.exports = router;
