const loanTransaction = require ('../../controllers')

const router = require('express').Router();

router.get('/loantransaction', (req, res ) => {res.send(loanTransaction)})


module.exports = router;
