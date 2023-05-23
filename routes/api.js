const express = require('express');
const router = express.Router();

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

router.post('/add', (req, res) => {
    const {id, test} = req.body;
    console.log('Success!');

    connection.query(
        'INSERT INTO Test (id, test) VALUES (?, ?)', [id, test],
        function (err, result) {
            console.log(result);
        }
    )

    res.redirect('/success.html');
})

module.exports = router;