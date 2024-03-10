
const Students = require('../models/Students');
const Sections = require('../models/Sections');


exports.createStudent = (req, res) => {
    Sections.findOne({ nomSection: req.body.nomSection })
        .then((section) => {
            if (!section) {
                res.status(404).json({ message: " section NOT found" })
            }
            const student = new Students({
                ...req.body,
                section: section._id
            });
            student.save()
                .then(() => {
                    section.students.push(student._id)
                    section.save()
                        .then(() => {
                            res.status(201).json({ message: "etudiant cree" })
                        })
                        .catch(error => { res.status(400).json({ error }) });
                })
                .catch(error => { res.status(400).json({ error }) });



        })
        .catch(error => { res.status(404).json({ error }) });
}
exports.getAllStudents = (req, res) => {

    Students.find()
        .populate({ path: 'section', select: 'nomSection filiere', populate: { path: 'filiere', select: 'nomFiliere' } })
        .then(students => {
            res.status(200).json(students);
        })
        .catch(error => { res.status(400).json({ error }) })


}
exports.getStudent = (req, res) => {
    Students.findOne({ _id: req.params.id })
        .populate({ path: 'section', select: 'nomSection filiere', populate: { path: 'filiere', select: 'nomFiliere' } })
        .then((student) => {
            res.status(200).json({ student })
        })
        .catch(error => { res.status(404).json({ error }) });



}

exports.updateStudent = (req, res) => {
    Students.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => {
            res.status(200).json({ message: "student update" })
        })
        .catch(error => {
            res.status(400).json({ error })
        })


}
exports.deleteStudent = (req, res) => {


}
exports.deleteAllStudents = (req, res) => {



}



