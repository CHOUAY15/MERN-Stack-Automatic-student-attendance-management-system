const express=require('express');
const SenacesCtrls=require('../controllers/SeancesCtrls')
const Router=express.Router();


Router.post('/createSeance',SenacesCtrls.createSeance);
Router.get('/getSeances',SenacesCtrls.getAllSeances);
Router.get('/getSeance/=:id',SenacesCtrls.getSeance);
Router.delete('/deleteSeance/=:id',SenacesCtrls.deleteSeance);
Router.delete('/deleteAllSeances',SenacesCtrls.deleteAllSeances);
Router.put('/updateSeance/=:id',SenacesCtrls.updateSeance);

// Router.put('/updateProf/:id/Salle',);
// Router.put('/updateSeance/:id/professeur',);



module.exports=Router;