const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const { response } = require("express");
const app = express();
const port = 3306;
var cors = require('cors');
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'pmas',
 
});

app.use(bodyParser.json());

app.post('/Signup', async(req, res) => {
  const { name, password, email, cnic, aridno, address } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Hash and salt the password before storing it in the database
  // Insert the user into the database
  db.query('INSERT INTO user (name, email, password, aridno,address,cnic) VALUES (?, ?, ?, ?, ?, ?)', [name, email,hashedPassword,aridno,address,cnic], (err,result) => {
    if (err) {
      console.error(err);
      res.json({ success: false, message: 'Error during signup' });
    } else {
      res.json({ success: true, message: 'User registered successfully' });
    }
  });
});


app.get("/api/get", (req, res) => {
  let email = req.query.email ?? '';
  let phone = req.query.password ?? '';

const sqlGet = "SELECT * FROM pmas.user WHERE email = ? OR password = ?";
db.query(sqlGet, [email, password], (error, result) => {
  res.send(result);
});
});

// app.get('/login', async(req, res) => {
//   const {  email, password } = req.body;
//   // Validate login credentials
//   db.query('SELECT * FROM user WHERE  email = ?', [email], async (err, results) => {
//     if (err) {
//       console.error(err);
//       res.json({ success: false, message: 'Error during login' });
//     } else if (results.length > 0) {
//       const match = await bcrypt.compare(password, results[0].password);

//       if (match) {
//         res.json({ success: true, message: 'Login successful' });
//       } else {
//         res.json({ success: false, message: 'Invalid credentials' });
//       }
//     } else {
//       res.json({ success: false, message: 'User not found' });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
