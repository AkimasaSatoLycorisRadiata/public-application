var router = require('express').Router();

router.get('/', (req, res) => {
  res.render("calculator.ejs");
});

module.exports = router;
