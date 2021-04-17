
// IBM Assistant 
// 1. Import dependencies
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();

// 1.1 Allow parsing on request bodies
app.use(express.json());



// 1.2 Connect to DB
mongoose.connect('mongodb+srv://ohsfron_app:12345qwerty@cluster0.qhw2d.mongodb.net/ohs');

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"));


// 2. Import routes for api
const watsonRoutes = require("./routes/api/watson");

// // 2.1 Direct requests to /api/watson to Watson Routes
app.use("/api/watson", watsonRoutes);


//3.1. Import routes for doctors api
const doctorRoutes = require("./routes/api/doctors");

app.use("/api/doctors", doctorRoutes);


//3.2 Import routes for users api
const userRoutes = require("./routes/api/users");

app.use("/api/users", userRoutes);


// 3. Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening on port ", port);
});







