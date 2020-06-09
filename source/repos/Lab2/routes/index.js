'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/', function (method, x, y) {

    var method = req.query('method');
    var x = req.query('x');
    var y = req.query('y');
    var add = (x + y);
    var subtract = (x - y);
    var multiply = (x * y);
    var divide = (x / y);

    if (method = "add") {
        console.log(add)
    }
    else if (method = "subtract") {
        console.log(subtract)
    }
    else if (method = "multiply") {
        console.log(multiply)
    }
    else if (method = "divide") {
        console.log(divide)
    }
    else {
        console.log("Try again with putting right method and values.")
    };
});

module.exports = router;
