'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/', function (req, res) {
    res.render('Aashish', { title: 'Aashish' });
});

router.get('/', function (req, res) {
    res.render('Attley', { title: 'Attley' });
});

router.get('/', function (req, res) {
        res.render('Kapro', { title: 'Kapro' });
 });

router.get('/', function (req, res) {
            res.render('Neelam', { title: 'Neelam' });

 });
module.exports = router;
