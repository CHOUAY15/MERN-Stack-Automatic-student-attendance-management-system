const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const ElementSchema = mongoose.Schema({

    libelleElement: { type: String, unique: true, required: true },
    description: { type: String },
    //other Schemas
    seances: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seances' }],
    professeurs: { type: mongoose.Schema.Types.ObjectId, ref: 'Professeurs' },
    filieres: { type: mongoose.Schema.Types.ObjectId, ref: 'Filieres',required: true },
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'Modules', required: true }
})
ElementSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Elements', ElementSchema);