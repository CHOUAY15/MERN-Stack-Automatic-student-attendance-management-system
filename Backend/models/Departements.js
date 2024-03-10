const mongoose=require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const DepartementSchema=mongoose.Schema({

    nomDepartement:{type:String,required:true,unique:true},
    description: { type: String },
    chef:{type:mongoose.Schema.Types.ObjectId,ref:'Professeurs'},
    professeurs:[{type:mongoose.Schema.Types.ObjectId,ref:'Professeurs'}],
    filieres:[{type:mongoose.Schema.Types.ObjectId,ref:'Filieres'}]
})
DepartementSchema.plugin(uniqueValidator);
module.exports=mongoose.model('Departements',DepartementSchema);