import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    roll : {type: String, unique: true},
    username: {type: String, unique: true},
    grade: {type: String},
    password: {type: String}
})

const studentModel = mongoose.model('Student', studentSchema)

export {studentModel as Student};