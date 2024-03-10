const express=require('express');
require('dotenv').config();
const app=express();
const mongoose=require('mongoose');
const seanceRouter=require('./routes/SeancesRts');
const studentRouter=require('./routes/StudentsRts');
const sectionRouter=require('./routes/SectionsRts');
const profsRouter=require('./routes/ProfesseursRts');



app.use(express.json());




mongoose.connect(process.env.DBURI)
.then(()=>{console.log('connexion reussi !!!!')})
.catch((error)=>{console.log(error)});

app.use('/api1/v1',seanceRouter);
app.use('/api3/v1',studentRouter);
app.use('/api4/v1',sectionRouter);
app.use('/api5/v1',profsRouter);







module.exports=app;