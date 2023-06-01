const express = require('express');
const router = express.Router();
const multer = require("multer");
const http = require("http");
const path = require("path");
const fs = require("fs");
const mysql = require('mysql2');
const async = require('async');
const upload = multer({
    dest: "./public/uploads/"
});

async function deleteTeacher(teacherId) {
    async.parallel([
        function (callback) {
            connection.query(
                'DELETE FROM `Papers` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result1) {
                    callback(err, result1);
                }
            )
        },
        function (callback) {
            connection.query(
                'DELETE FROM `Education` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result2) {
                    callback(err, result2);
                }
            )
        },
        function (callback) {
            connection.query(
                'DELETE FROM `Expertise` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result3) {
                    if (err) throw err;
                    callback(err, result3)
                }
            )
        },
        function (callback) {
            connection.query(
                'DELETE FROM `Experiences` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result4) {
                    if (err) throw err;
                    callback(err, result4)
                }
            )
        },
        function (callback) {
            connection.query(
                'DELETE FROM `Projects` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result5) {
                    if (err) throw err;
                    callback(err, result5)
                }
            )
        },
        function (callback) {
            connection.query(
                'DELETE FROM `Professors` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result6) {
                    if (err) throw err;
                    callback(err, result6)
                }
            )
        }
    ], function (error, results) {
        if (error) throw error;
        console.log(results);
    });
}

const connection = mysql.createConnection({
    host: '140.134.208.81',
    port: '8762',
    user: 'D1031405',
    password: 'LyImD9z8V_m]am5J',
    database: 'D1050961'
});

router.post('/delete', (req, res) => {
    req.body = JSON.parse(JSON.stringify(req.body));
    var teacherId = 0;

    console.log(req.body);
    console.log(Array.isArray(req.body["teacherId"]));
    if (!Array.isArray(req.body["teacherId"])) {
        teacherId = req.body['teacherId'];
        deleteTeacher(teacherId).then(() => {
            res.status(200).redirect('/admin');
        });
    } else {
        for (var i in req.body['teacherId']) {
            console.log(req.body['teacherId']);
            teacherId = req.body['teacherId'][i];

            deleteTeacher(teacherId);
        }
        res.status(200);
        res.redirect('/admin');
    }
});

router.post('/edit', upload.single("file"), (req, res) => {
    const { teacherId, teacherName, teacherTitle, teacherEmail, teacherPhone } = req.body;
    console.log('Success!');

    if (req.file != undefined) {
        fs.renameSync(req.file.path, "./public/uploads/" + teacherId, (err) => {
            if (err) throw err;
        });
    }

    async.parallel([
        function (callback) {
            connection.query(
                'DELETE FROM `Papers` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result1) {
                    callback(err, result1);
                }
            )
        },
        function (callback) {
            connection.query(
                'DELETE FROM `Education` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result2) {
                    callback(err, result2);
                }
            )
        },
        function (callback) {
            connection.query(
                'DELETE FROM `Expertise` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result3) {
                    if (err) throw err;
                    callback(err, result3)
                }
            )
        },
        function (callback) {
            connection.query(
                'DELETE FROM `Experiences` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result4) {
                    if (err) throw err;
                    callback(err, result4)
                }
            )
        },
        function (callback) {
            connection.query(
                'DELETE FROM `Projects` WHERE `Professor_ID`= ?', [teacherId],
                function (err, result5) {
                    if (err) throw err;
                    callback(err, result5)
                }
            )
        },
        function (callback) {
            connection.query(
                'UPDATE `Professors` SET `Name`=?,`Email`=?,`Phone`=?,`Position`=? WHERE Professor_ID = ?', [teacherName, teacherEmail, teacherPhone, teacherTitle, teacherId],
                function (err, result6) {
                    if (err) throw err;
                    callback(err, result6)
                }
            )
        }
    ], function (error, results) {
        if (error) throw error;
        console.log(results);

        req.body = JSON.parse(JSON.stringify(req.body));
        for (var key in req.body) {
            console.log(key + ": " + req.body[key]);

            if (key.includes("educationTableEntry")) {
                connection.query(
                    'INSERT INTO `Education`(`Professor_ID`, `Content`) VALUES (?,?)', [teacherId, req.body[key]],
                    function (err, result) {
                        if (err) throw err;
                        console.log(result);
                    }
                )
            }

            if (key.includes("expertiseTableEntry")) {
                connection.query(
                    'INSERT INTO `Expertise`(`Professor_ID`, `Content`) VALUES (?,?)', [teacherId, req.body[key]],
                    function (err, result) {
                        if (err) throw err;
                        console.log(result);
                    }
                )
            }

            if (key.includes("experienceType")) {
                connection.query(
                    'INSERT INTO `Experiences`(`Professor_ID`, `Type`, `Content`) VALUES (?,?,?)', [teacherId, req.body[key], req.body[key.replace("Type", "Entry")]],
                    function (err, result) {
                        if (err) throw err;
                        console.log(result);
                    }
                )
            }
            if (key.includes("projectName")) {
                connection.query(
                    'INSERT INTO `Projects`(`Professor_ID`, `Name`,  `Time`, `Serial_Code`, `Identity`) VALUES (?,?,?,?,?)', [teacherId, req.body[key], req.body[key.replace("Name", "Time")], req.body[key.replace("Name", "Serial")], req.body[key.replace("Name", "Identity")]],
                    function (err, result) {
                        if (err) throw err;
                        console.log(result);
                    }
                )
            }
            if (key.includes("paperAuthor")) {
                connection.query(
                    'INSERT INTO `Papers`(`Professor_ID`, `Author`, `Title`, `Location`, `Time`) VALUES (?,?,?,?,?)', [teacherId, req.body[key], req.body[key.replace("Author", "Title")], req.body[key.replace("Author", "Location")], req.body[key.replace("Author", "Time")]],
                    function (err, result) {
                        if (err) throw err;
                        console.log(result);
                    }
                )
            }
        }
        
    });
    console.log('Success!');
    res.redirect('/admin');
    return res.status(200);

})

router.post('/add', upload.single("file"), (req, res) => {
    let newTeacherId = 0;
    const { teacherName, teacherTitle, teacherEmail, teacherPhone } = req.body;


    // console.log(req.body);

    // return res.status(200);

    connection.query(
        'INSERT INTO `Professors`(`Name`, `Email`, `Phone`, `Position`) VALUES (?,?,?,?)', [teacherName, teacherEmail, teacherPhone, teacherTitle],
        function (err, result) {
            if (err) throw err;
            // console.log(result);
            console.log(teacherName);

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
                                    console.log(result);
                                }
                            )
                        }

                        if (key.includes("expertiseTableEntry")) {
                            connection.query(
                                'INSERT INTO `Expertise`(`Professor_ID`, `Content`) VALUES (?,?)', [newTeacherId, req.body[key]],
                                function (err, result) {
                                    if (err) throw err;
                                    console.log(result);
                                }
                            )
                        }

                        if (key.includes("experienceType")) {
                            connection.query(
                                'INSERT INTO `Experiences`(`Professor_ID`, `Type`, `Content`) VALUES (?,?,?)', [newTeacherId, req.body[key], req.body[key.replace("Type", "Entry")]],
                                function (err, result) {
                                    if (err) throw err;
                                    console.log(result);
                                }
                            )
                        }
                        if (key.includes("projectName")) {
                            connection.query(
                                'INSERT INTO `Projects`(`Professor_ID`, `Name`,  `Time`, `Serial_Code`, `Identity`) VALUES (?,?,?,?,?)', [newTeacherId, req.body[key], req.body[key.replace("Name", "Time")], req.body[key.replace("Name", "Serial")], req.body[key.replace("Name", "Identity")]],
                                function (err, result) {
                                    if (err) throw err;
                                    console.log(result);
                                }
                            )
                        }
                        if (key.includes("paperAuthor")) {
                            connection.query(
                                'INSERT INTO `Papers`(`Professor_ID`, `Author`, `Title`, `Location`, `Time`) VALUES (?,?,?,?,?)', [newTeacherId, req.body[key], req.body[key.replace("Author", "Title")], req.body[key.replace("Author", "Location")], req.body[key.replace("Author", "Time")]],
                                function (err, result) {
                                    if (err) throw err;
                                    console.log(result);
                                }
                            )
                        }
                    }
                }
            )
        }
    )

    console.log('Success!');
    res.redirect('/admin');
    return res.status(200);
})

router.get('/getAll', (req, res) => {
    const id = req.query.id;

    async.parallel([
        function (callback) {
            connection.query(
                'SELECT * FROM Professors WHERE Professor_ID = ?', [id],
                function (err, result1) {
                    if (err) throw err;
                    callback(err, result1)
                }
            )
        },
        function (callback) {
            connection.query(
                'SELECT * FROM Education WHERE Professor_ID = ?', [id],
                function (err, result2) {
                    if (err) throw err;
                    callback(err, result2)
                }
            )
        },
        function (callback) {
            connection.query(
                'SELECT * FROM Expertise WHERE Professor_ID = ?', [id],
                function (err, result3) {
                    if (err) throw err;
                    callback(err, result3)
                }
            )
        },
        function (callback) {
            connection.query(
                'SELECT * FROM Experiences WHERE Professor_ID = ?', [id],
                function (err, result4) {
                    if (err) throw err;
                    callback(err, result4)
                }
            )
        },
        function (callback) {
            connection.query(
                'SELECT * FROM Projects WHERE Professor_ID = ?', [id],
                function (err, result5) {
                    if (err) throw err;
                    callback(err, result5)
                }
            )
        },
        function (callback) {
            connection.query(
                'SELECT * FROM Papers WHERE Professor_ID = ?', [id],
                function (err, result6) {
                    if (err) throw err;
                    callback(err, result6)
                }
            )
        }
    ], function (error, results) {
        if (error) throw error;
        console.log(results);
        res.status(200).json(results);
    })
})

router.get('/getMain', (req, res) => {
    connection.query(
        'SELECT `Professor_ID`, `Name`, `Position` FROM `Professors` WHERE 1', [],
        function (err, result) {
            if (err) throw err;
            console.log(result);
            res.status(200).json(result);
        }
    )
});

module.exports = router;