const express = require('express');
const router = express.Router();

//import database
const connection = require('../config/database');

/**
 * INDEX POSTS
*/
router.get('/', function(req, res) {
    //query
    connectio.query('SELECT * FROM posts ORDER BY id DESC', function(err, rows) {
	if(err){
