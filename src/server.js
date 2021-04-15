const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||
   `mongodb+srv://ohsfron_app:12345qwerty@cluster0.qhw2d.mongodb.net/myFirstDatabaseretryWrites=true&w=majority`);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});
app.use(bodyParser.json());
// Root URL
app.get('/:user', (req, res) =>{
  console.log(req.query);
  console.log(req.params);
  console.log(req.header);
  res.status(404).send("Not Found");
})

app.post('/signin', (req,res)=>{
  if(req.body.email == "ro"){
    console.log("Its rolo");
  }
  else {
    console.log("Nothi")
  }
  res.send("go ti");
})



app.post('/register',(req,res)=>{
  const {email, name, password} = req.body;

  console.log(email," ",name," ",password);

  res.json({email, name, password});

})

app.get('/profile', (req, res) =>{
  res.send("Getting Profile");
  console.log(req.header);
})

app.post('/profile', (req, res) =>{
  console.log(req.body);
  const user = {
      name: 'ROHIT',
      interests: 'MUSIC',
      inka: 'Banka'
    }
  res.send(user);
})


// IBM Assistant 
// 1. Import dependencies
const express = require("express");
const app = express();
require("dotenv").config();

// 1.1 Allow parsing on request bodies
app.use(express.json());

// 2. Import routes for api
const watsonRoutes = require("./routes/api/watson");
// // 2.1 Direct requests to /api/watson to Watson Routes
app.use("/api/watson", watsonRoutes);

// 3. Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening on port ", port);
});
