const asyncWrapper = require("../middlewares/async");
const Student = require("../models/Student");

let getAllStudents = asyncWrapper(async (req, res) => {
    if (Object.keys(req.query).length !== 0){
        let filteredStudents = await Student.find(req.query) 
        res.status(200).json({ filteredStudents }) 
    } else{
        let allStudents = await Student.find({})   
        res.status(200).json({ allStudents })
    }
    
})

let createStudent = asyncWrapper(async (req, res) => {
    let student = await Student.create(req.body)
    res.status(200).json({ student }) 
})

let getStudent = asyncWrapper(async (req, res) => {
    let { id: studentID } = req.params

    let student = await Student.findOne({ _id: studentID })

    if (!student) {
        return res.status(404).json({ msg: `No Student Found With id => ${studentID}` })
    }

    res.status(200).json({ student })
})

let updateStudent = asyncWrapper(async (req, res) => {
    let { id: studentID } = req.params

    let student = await Student.findOneAndUpdate({ _id: studentID }, req.body, {
        new: true,
        runValidators: true
    })

    if (!student) {
        return res.status(404).json({ msg: `No Student Found With id => ${studentID}` })
    }

    res.status(200).json({ student })
})

let deleteStudent = asyncWrapper(async (req, res) => {
    let { id: studentID } = req.params
    let student = await Student.findOneAndDelete({ _id: studentID })

    if (!student) {
        return res.status(404).json({ msg: `No Task Found With id => ${studentID}` })
    }

    res.status(200).json({ student })
})


module.exports = {
    getAllStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
}