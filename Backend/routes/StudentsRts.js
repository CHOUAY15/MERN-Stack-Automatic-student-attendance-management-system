const express=require('express');
const Router=express.Router();
const StudentCtrls=require('../controllers/StudentsCtrls')




Router.post('/createstudent',StudentCtrls.createStudent);
Router.get('/getStudents',StudentCtrls.getAllStudents);
Router.get('/getStudent/=:id',StudentCtrls.getStudent);
Router.delete('/deleteAllStudents');
Router.delete('/deleteStudent/=:id',);
Router.put('/updateStudent/=:id',StudentCtrls.updateStudent);





module.exports=Router;

