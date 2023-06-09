const express = require("express");
const { getAllStudents, createStudent, getStudent, updateStudent, deleteStudent } = require("../controllers/students");
const router = express.Router()

router.route('/').get(getAllStudents)
router.route('/add').post(createStudent)
router.route('/:id').get(getStudent).patch(updateStudent).delete(deleteStudent)

module.exports = router