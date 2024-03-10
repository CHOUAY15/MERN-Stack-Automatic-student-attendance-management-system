const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const ProfesseurSchema=mongoose.Schema({

    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    cin:{type:String,required:true, unique:true},
    telephone:{type:String,required:true,unique:true},
    dateDeNaissance:{ type: Date,},
    lieuDeNaissance:{ type: String},
    adresse:{ type: String},
    //other schemas
    seances:[{type:mongoose.Schema.Types.ObjectId,ref:'Seances'}],
    sections:[{type:mongoose.Schema.Types.ObjectId,ref:'Sections'}],
    departements:[{type:mongoose.Schema.Types.ObjectId,ref:'Departements'}],
    elements:[{type:mongoose.Schema.Types.ObjectId,ref:'Elements'}]
});

ProfesseurSchema.plugin(uniqueValidator);
module.exports=mongoose.model('Professeurs',ProfesseurSchema);