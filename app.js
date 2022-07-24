const express = require('express');
const app = express();
const connectDb = require('./DB/conection')
const router=require('./routes/employeeRoute')
const port = process.env.PORT || '3000';

// URL
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';

// Connection with Database
connectDb(DATABASE_URL);


// API JSON
app.use(express.json());
// Load Routes
app.use("/employee",router);

//  Creating Server
app.listen(port, () => {
    console.log(`Server responding at https://localhost:${port}`)
})