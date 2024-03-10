const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const FiliereSchema=mongoose.Schema({

    nomFiliere:{type:String,required:true,unique:true},
    descriptionFiliere: { type: String },
    professeurs:[{type:mongoose.Schema.Types.ObjectId,ref:'Professeurs'}],
    departements:{type:mongoose.Schema.Types.ObjectId,ref:'Departements'},
    modules:[{type:mongoose.Schema.Types.ObjectId,ref:'Modules'}],
    sections:[{type:mongoose.Schema.Types.ObjectId,ref:'Sections'}],
    coordinateur:{type:mongoose.Schema.Types.ObjectId,ref:'Professeurs'}

})
FiliereSchema.plugin(uniqueValidator);
module.exports=mongoose.model('Filieres',FiliereSchema);