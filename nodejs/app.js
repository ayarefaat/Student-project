const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const mongoose = require('mongoose');
const fs = require('fs');
const bodyParser = require('body-parser');
const students = require('./models/students');
app.use(bodyParser.json());
// var cors = require('cors');
// app.use(cors())
const student=require("./routes/students")

app.use('/students',student)

mongoose.connect("mongodb://127.0.0.1:27017/studentsDb",{useUnifiedTopology: true,useNewUrlParser: true});
let files_arr=fs.readdirSync(__dirname+"/models");
files_arr.forEach((file)=>{
    require(__dirname+"/models/"+file)
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})