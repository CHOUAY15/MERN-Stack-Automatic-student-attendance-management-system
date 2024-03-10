const Elements = require('../models/ElementsModule');
const Seances = require('../models/Seances');


exports.createSeance = (req, res) => {
    Elements.findOne({ libelleElement: req.body.libelleElement })
        .then((element) => {
            if (!element) {
                res.status(404).json({ message: "element not found" });
            }
            const seance = new Seances({
                ...req.body, element: element._id
            });
            seance.save()
                .then(() => {
                    element.seances.push(seance._id);
                    element.save()
                        .then(() => {
                            res.status(201).json({ message: "seance est cree" })
                        })
                        .catch(error => { res.status(400).json({ error }) });
                }
                )
                .catch(error => { res.status(400).json({ error }) });
        })
        .catch(error => { res.status(404).json({ error }) });
}
exports.getAllSeances = (req, res) => {

    Seances.find()
        .populate([{ path: 'professeur' }, { path: 'element' }, { path: ' salles' }])
        .then(seances => {
            res.status(200).json(seances);
        })
        .catch(error => { res.status(400).json({ error }) })

}
exports.getSeance = (req, res) => {
    Seances.findOne({ _id: req.params.id })
        .populate([{ path: 'professeur' }, { path: 'element' }, { path: ' salles' }])
        .then(seances => {
            res.status(200).json(seances);
        })
        .catch(error => { res.status(404).json({ error }) })
}

exports.updateSeance = (req, res) => {


    Seances.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => {
            res.status(200).json({ message: "seance update" })
        })
        .catch(error => {
            res.status(400).json({ error })
        })


}
exports.deleteSeance = (req, res) => {


}
exports.deleteAllSeances = (req, res) => {



}

