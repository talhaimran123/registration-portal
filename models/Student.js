const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  registration_number: {
    type: Number,
    trim: true,
    // required: [true, "registration-number can't be blank"],
    unique: true,
  },
  name: {
    type: String,
    trim: true,
    // required: [true, "name can't be blank"],
  },
  father_name: {
    type: String,
    trim: true,
    // required: [true, "father-name can't be blank"],
  },
  age: {
    type: Number,
    trim: true,
    // required: [true, "age can't be blank"],
  },
  contact_number: {
    type: String,
    trim: true,
    // required: [true, "contact-number can't be blank"],
  },
  whatsapp_number: {
    type: String,
    trim: true,
    // required: [true, "whatsapp-number can't be blank"],
  },
  cnic_number: {
    type: String,
    trim: true,
    // required: [true, "cnic-number can't be blank"],
  },
  permanent_address: {
    type: String,
  },
  // required: [true, "permanent-address can't be blank"],
  any_hafiz: {
    type: String,
    trim: true,
    // required: [true, "any-hafiz can't be blank"],
  },
  deeni_education: {
    type: String,
    trim: true,
    // required: [true, "deeni-education can't be blank"],
  },
  old_madarsa: {
    type: String,
    trim: true,
    // required: [true, "old-madarsa can't be blank"],
  },
  class: {
    type: Number,
    trim: true,
    // required: [true, "class can't be blank"],
  },
  grade: {
    type: String,
    trim: true,
    // required: [true, "grade can't be blank"],
  },
  school_name: {
    type: String,
    trim: true,
    // required: [true, "school-name can't be blank"],
  },
  admission_nature: {
    type: String,
    trim: true,
    // required: [true, "admission-nature can't be blank"],
  },
  admission_test_marks: {
    type: Number,
    trim: true,
    // required: [true, "admission-test-marks can't be blank"],
  },
  percentage: {
    type: String,
    trim: true,
    // required: [true, "percentage can't be blank"],
  },
  examiner_opinion: {
    type: String,
    trim: true,
    // required: [true, "examiner-opinion can't be blank"],
  },
  related_teacher_name: {
    type: String,
    trim: true,
    // required: [true, "related-teacher-name can't be blank"],
  },
  department: {
    type: String,
    trim: true,
    // required: [true, "department can't be blank"],
  },
  //!
  q1_num_hifz:{
    type: Number,
    trim: true,
  },
  q1_text_hifz:{
    type: String,
    trim: true,
  },
  q2_num_hifz:{
    type: Number,
    trim: true,
  },
  q2_text_hifz:{
    type: String,
    trim: true,
  },
  q3_num_hifz:{
    type: Number,
    trim: true,
  },
  q3_text_hifz:{
    type: String,
    trim: true,
  },
  q4_num_hifz:{
    type: Number,
    trim: true,
  },
  q4_text_hifz:{
    type: String,
    trim: true,
  },
  q5_num_hifz:{
    type: Number,
    trim: true,
  },
  q5_text_hifz:{
    type: String,
    trim: true,
  },

  //!
  q1_num_nazra:{
    type: Number,
    trim: true,
  },
  q1_text_nazra:{
    type: String,
    trim: true,
  },
  q2_num_nazra:{
    type: Number,
    trim: true,
  },
  q2_text_nazra:{
    type: String,
    trim: true,
  },
  q3_num_nazra:{
    type: Number,
    trim: true,
  },
  q3_text_nazra:{
    type: String,
    trim: true,
  },
  q4_num_nazra:{
    type: Number,
    trim: true,
  },
  q4_text_nazra:{
    type: String,
    trim: true,
  },
  q5_num_nazra:{
    type: Number,
    trim: true,
  },
  q5_text_nazra:{
    type: String,
    trim: true,
  },

  //!
  q1_num_qaida:{
    type: Number,
    trim: true,
  },
  q1_text_qaida:{
    type: String,
    trim: true,
  },
  q2_num_qaida:{
    type: Number,
    trim: true,
  },
  q2_text_qaida:{
    type: String,
    trim: true,
  },
  q3_num_qaida:{
    type: Number,
    trim: true,
  },
  q3_text_qaida:{
    type: String,
    trim: true,
  },
  q4_num_qaida:{
    type: Number,
    trim: true,
  },
  q4_text_qaida:{
    type: String,
    trim: true,
  },
  q5_num_qaida:{
    type: Number,
    trim: true,
  },
  q5_text_qaida:{
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Students", StudentSchema);
