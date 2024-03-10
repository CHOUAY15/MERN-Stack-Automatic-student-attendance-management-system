const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



const QrCodeShema=mongoose.Schema({
    code: { type: String, required: true, unique: true },
    Senaces:{type:mongoose.Schema.Types.ObjectId,ref:'Seances'},
    Professurs:{type:mongoose.Schema.Types.ObjectId,ref:'Professeurs'},
    Etudiants:{type:mongoose.Schema.Types.ObjectId,ref:'Etudiants'},
    creationDate: { type: Date, default: Date.now },
    expirationDate: { type: Date }
});

QrCodeShema.plugin(uniqueValidator);

module.exports=mongoose.model('QrCodes',QrCodeShema);
