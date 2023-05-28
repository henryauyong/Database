const express = require('express');
const router = express.Router();
const multer = require("multer");
const http = require("http");
const path = require("path");
const fs = require("fs");
const upload = multer({
    dest: "./public/uploads/"
});

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: '140.134.208.81',
    port: '8762',
    user: 'D1031405',
    password: 'LyImD9z8V_m]am5J',
    database: 'D1050961'
});

/*
connection.query(
    'CREATE TABLE Test (ID INT PRIMARY KEY, Test VARCHAR(255));',
    function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields);
    }
)
*/

router.post('/edit', upload.single("file"), (req, res) => {
    const { teacherId, teacherName, teacherTitle, teacherEmail, teacherPhone } = req.body;
    console.log('Success!');
    console.log(req.file.filename);

    fs.renameSync(req.file.path, "./public/uploads/" + teacherId + ".png", (err) => {
        if (err) throw err;    
    });

    connection.query(
        'UPDATE `Professors` SET `Name`=?,`Email`=?,`Phone`=?,`Position`=? WHERE `Professor_ID`=?', [teacherName, teacherTitle, teacherEmail, teacherPhone, teacherId],
        function (err, result) {
            console.log(result);
        }
    )

    res.status(200);
    res.redirect('/success');    
})

router.post('/add', (req, res) => {
    const { name, title, email, phone, photo, education, expertise } = req.body;
    console.log(name, title, email, phone, photo, education, expertise);
    console.log('Success!');

    connection.query(
        'INSERT INTO `Professors`(`Name`, `Email`, `Phone`, `Position`) VALUES (?,?,?,?)', [name, email, phone, title],
        function (err, result) {
            if(err) throw err;
            console.log(result);
        }
    )

    res.redirect('/success');
    return res.status(200);
})

router.get('/get', (req, res) => {
    const id = req.query.id;
    console.log('Success!');

    connection.query(
        'SELECT * FROM Professors WHERE Professor_ID = ?', [id],
        function (err, result) {
            if(err) throw err;
            console.log(result);
            res.json(result);
        }
    )
})

module.exports = router;