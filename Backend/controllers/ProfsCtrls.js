const Professeurs = require('../models/Professeurs');

exports.createProf = (req, res) => {

    const professeur = new Professeurs({
        ...req.body
    })
    professeur.save()
        .then(() => {
            res.status(201).json({ message: "professure cree" });
        })
        .catch(error => { res.status(400).json({ error }) });
}
exports.getAllProfs = (req, res) => {

    Professeurs.find()
        .populate({ path: 'sections' }, { path: 'departements' })
        .then(profs => {
            res.status(200).json(profs);
        })
        .catch(error => { res.status(400).json({ error }) })


}
exports.getProf = (req, res) => {
    Professeurs.findOne({ _id: req.params.id })
        .populate({ path: 'sections' }, { path: 'seances' }, { path: 'elements' }, { path: 'departements' })
        .then((prof) => {
            res.status(200).json({ prof })
        })
        .catch(error => { res.status(404).json({ error }) });

}
exports.updateProf = (req, res) => {


    Professeurs.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => {
            res.status(200).json({ message: "Prof update" })
        })
        .catch(error => {
            res.status(400).json({ error })
        })


}

exports.deleteProf = (req, res) => {
}
exports.deleteAllProfs = (req, res) => {
}

