const mongoose=require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

const SectionSchema=mongoose.Schema({
    nomSection:{type: String,required:true,unique:true},
    semestre:[{type:mongoose.Schema.Types.ObjectId,ref:'Semestres'}],
    filiere:{type:mongoose.Schema.Types.ObjectId,ref:'Filieres',required:true},
    students:[{type:mongoose.Schema.Types.ObjectId,ref:'Students'}],
    professeurs:[{type:mongoose.Schema.Types.ObjectId,ref:'Professeurs'}],
})

SectionSchema.plugin(uniqueValidator);
module.exports=mongoose.model('Sections',SectionSchema);