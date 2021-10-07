const express  = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//Coneccion mysql

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pruebasapi',
});

app.post('/add', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    connection.query(
        "INSERT INTO usuarios (username, password) VALUES (?,?)",
        [username, password],
        (error, result) => {
            console.log(error)
        }
    );
});

app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    connection.query(
        "SELECT * FROM usuarios WHERE username = ? AND password = ?",
        [username, password],
        (error, result) => {
            if(error){
                res.send({error : error});
            }
            if (result.length){
                res.send(result);
            }else{
                res.send({message : "Contraseña o usuario incorrecto"});
            }
        }
    );
})

app.listen(3001, () => {
    console.log("Runing server");
});
