const express=require('express');
const Router=express.Router();
const ProfsCtrls=require('../controllers/ProfsCtrls')





Router.post('createprofesseurs',ProfsCtrls.createProf);
Router.get('/getProfesseurs',ProfsCtrls.getAllProfs);
Router.get('getProfesseur/=:id',ProfsCtrls.getProf);
Router.delete('deleteAllProfs',ProfsCtrls.deleteAllProfs);
Router.delete('deleteProf/:id',ProfsCtrls.deleteProf);
Router.put('/updateProf/:id',ProfsCtrls.updateProf);

// Router.put('/updateProf/:id/seances',);
// Router.put('/updateProf/:id/sections',);
// Router.put('/updateProf/:id/departements',);
// Router.put('/updateProf/:id/elements',);


module.exports=Router;