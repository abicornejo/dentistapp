const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

//Coneccion mysql

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebasapi',
});

app.post('/add', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        connection.query(
            "INSERT INTO usuarios (username, password) VALUES (?,?)",
            [username, hash],
            (err, result) => {
                console.log(err);
            }
        );
    });
});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else {
        res.send({loggedIn: false});
    }
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query(
        "SELECT * FROM usuarios WHERE username = ? ",
        username,
        (err, result) => {
            if (err) {
                res.send({err: err});
            }

            if (result.length) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else {

                        res.send({message: "Usuario o contrase??a invalida"});

                    }
                });
            } else {

                res.send({message: "El usuario no existe"});
            }
            console.log(result);
        }
    );
});

//         "SELECT * FROM usuarios WHERE username = ? AND password = ?",
//         [username, password],
//         (error, result) => {
//             if(error){
//                 res.send({error : error});
//             }
//             if (result.length){
//                 res.send(result);
//             }else{
//                 res.send({message : "Contrase??a o usuario incorrecto"});
//             }
//         }
//     );
// })


app.post('/add-patient', (req, res)=>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const birthday = req.body.birthday;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const email = req.body.email;
    const adress = req.body.adress;
    const notes = req.body.notes;

    connection.query(
        "INSERT INTO patient_details (first_name, last_name, birthday, gender, phone, email, adress, notes) VALUES (?,?,?,?,?,?,?,?)",
        [first_name, last_name, birthday, gender, phone, email, adress, notes],
        (err, result) => {
            console.log(err);
        }
    );

});

app.listen(3001, () => {
    console.log("Runing server");
});
