const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "logins_page"
})

app.post('/creds', (req, res) => {

    const user = req.body.user;
    const password = req.body.password;

    db.query("INSERT INTO creds (user, password) VALUES (?,?)",
        [user, password],
        (err, result) => {
            console.log(err)
        }
    )
})

app.get("/", (re, res)=>{
    return res.json("hi hello");
})

app.listen(3001, () => {
    console.log("running server");
});
