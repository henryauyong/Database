const express = require('express');
const router = express.Router();
const multer = require("multer");
const http = require("http");
const path = require("path");
const fs = require("fs");
const mysql = require('mysql2');
const upload = multer({
    dest: "./public/uploads/"
});

// create the connection to database
const connection = mysql.createConnection({
    host: '140.134.208.81',
    port: '8762',
    user: 'D1031405',
    password: 'LyImD9z8V_m]am5J',
    database: 'D1050961'
});

router.post('/edit', upload.single("file"), (req, res) => {
    const { teacherId, teacherName, teacherTitle, teacherEmail, teacherPhone } = req.body;
    console.log('Success!');

    if (req.file != undefined) {
        fs.renameSync(req.file.path, "./public/uploads/" + teacherId, (err) => {
            if (err) throw err;
        });
    }

    connection.query(
        'UPDATE `Professors` SET `Name`=?,`Email`=?,`Phone`=?,`Position`=? WHERE `Professor_ID`=?', [teacherName, teacherTitle, teacherEmail, teacherPhone, teacherId],
        function (err, result) {
            console.log(result);
        }
    )

    res.status(200);
    res.redirect('/success');
})

router.post('/add', upload.single("file"), (req, res) => {
    let newTeacherId = 0;
    const { teacherName, teacherTitle, teacherEmail, teacherPhone } = req.body;
    console.log('Success!');

    console.log(req.body);

    // return res.status(200);

    connection.query(
        'INSERT INTO `Professors`(`Name`, `Email`, `Phone`, `Position`) VALUES (?,?,?,?)', [teacherName, teacherEmail, teacherPhone, teacherTitle],
        function (err, result) {
            if (err) throw err;
            // console.log(result);

            connection.query(
                'SELECT MAX(Professor_ID) FROM Professors', [],
                function (err, result) {
                    if (err) throw err;
                    // console.log(result);
                    newTeacherId = result[0]['MAX(Professor_ID)'];

                    if (req.file != undefined) {
                        fs.renameSync(req.file.path, "./public/uploads/" + newTeacherId, (err) => {
                            if (err) throw err;
                        });
                    }

                    req.body = JSON.parse(JSON.stringify(req.body));
                    for (var key in req.body) {
                        console.log(key + ": " + req.body[key]);

                        if (key.includes("educationTableEntry")) {
                            connection.query(
                                'INSERT INTO `Education`(`Professor_ID`, `Content`) VALUES (?,?)', [newTeacherId, req.body[key]],
                                function (err, result) {
                                    if (err) throw err;
                                    // console.log(result);
                                }
                            )
                        }

                        if (key.includes("expertiseTableEntry")) {
                            connection.query(
                                'INSERT INTO `Expertise`(`Professor_ID`, `Content`) VALUES (?,?)', [newTeacherId, req.body[key]],
                                function (err, result) {
                                    if (err) throw err;
                                    // console.log(result);
                                }
                            )
                        }

                        if (key.includes("experienceType")) {
                            connection.query(
                                'INSERT INTO `Experiences`(`Professor_ID`, `Experience_Type`, `Content`) VALUES (?,?,?)', [newTeacherId, req.body[key], req.body[key.replace("Type", "Entry")]],
                                function (err, result) {
                                    if (err) throw err;
                                    // console.log(result);
                                }
                            )
                        }
                    }
                }
            )
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
            if (err) throw err;
            console.log(result);
            res.json(result);
        }
    )
})

module.exports = router;