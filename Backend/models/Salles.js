const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const SalleShema=mongoose.Schema({
  numero: { type: Number, required: true ,unique:true},
  capacity: { type: Number},
  bloc: { type: String , required:true},
  seances:[{type:mongoose.Schema.Types.ObjectId,ref:'Seances'}],
});
SalleShema.plugin(uniqueValidator);
module.exports=mongoose.model('Salles',SalleShema);
