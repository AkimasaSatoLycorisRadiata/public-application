var router = require('express').Router();

router.get('/', (req, res) => { //getでルートにアクセスしてきたときの処理
  res.render("index.ejs");
});

module.exports = router;
