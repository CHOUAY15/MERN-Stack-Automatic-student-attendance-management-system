const express=require('express');
const Router=express.Router();
const sectionCtrls=require('../controllers/SectionsCtrls');




//CRUD V1
Router.post('/createSection',sectionCtrls.createSection);
Router.get('/getSections',sectionCtrls.getSections);
Router.get('/getSection/=:id',sectionCtrls.getSection);
Router.delete('/deleteAllSections',);
Router.delete('/deleteSection/=:id',);
Router.put('/updateSection/=:id',sectionCtrls.updateSection);
//CRUD V2
// Router.put('/updateSection/:id/profs',);
// Router.put('/updateSection/:id/filiere',);





module.exports=Router;