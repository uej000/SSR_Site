var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();

router.post('/write', function (req, res, next) { // 이름 학번 내용을 DB에 입력
    var name = req.body.name;
    var id = req.body.id;
    var content = req.body.content;
    var datas = [name, id, content];
    conn.query('insert into board(name,id,content) values(?,?,?)', datas, function (err, rows) {
        if (err) console.error('err : ' + err);
		res.redirect('/');
    });
});

module.exports = router;




