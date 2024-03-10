const mongoose=require('mongoose');

const SeanceShema=mongoose.Schema({


    nomSeance:{type:String,required:true},
    day:{type:String,required:true},
    heureDebut:{type:String,required:true},
    heureFin:{type:String,required:true},
    // other schemas
    professeur:{type:mongoose.Schema.Types.ObjectId,ref:'Professeurs'},
    element:{type:mongoose.Schema.Types.ObjectId,ref:'Elements'},
    salles:{type:mongoose.Schema.Types.ObjectId,ref:'Salles'}
    
})
module.exports=mongoose.model('Seances',SeanceShema);