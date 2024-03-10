const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const StudentSchema = mongoose.Schema({

    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    cne: { type: String, required: true, unique: true },
    cin:{ type: String, required: true, unique: true },
    issueDe:{ type: String, enum:['2AP','Externe','Bac'],required:true},
    telephone: { type: Number,  unique: true },
    redoublant:{type:Boolean,default:false},
    dateDeNaissance:{ type: String},
    lieuDeNaissance:{ type: String},
    adresse:{ type: String},
    section:{type: mongoose.Schema.Types.ObjectId, ref:'Sections',required:true}
})
StudentSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Students', StudentSchema);