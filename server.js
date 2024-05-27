const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5003

app.get('/', (req, res) => res.send('Hello World!'))



// Middleware to parse JSON in requests
app.use(express.json());
app.use(express.static('public'));


// Import and use the route handler
const apiRouter = require('./config/crud');
app.use('/v1', apiRouter);

// connection with mySQL

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'demobatch26'
})

connection.connect((error)=>{
    if(error){
        console.log('error in database connection', error.message);
    }
    console.log('database connected successfully')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})



