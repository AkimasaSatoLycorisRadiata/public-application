var express = require('express');
var app = express();

app.set("view engine", "ejs" );//テンプレートエンジンの読み込み

app.use('/public', express.static(__dirname + '/public'));//静的ファイルの読み込み

app.use('/', require('./routes/index.js'));//ルートにアクセスしてきたときのルートファイル

app.listen(3000);