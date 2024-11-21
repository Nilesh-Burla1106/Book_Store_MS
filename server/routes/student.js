import express from 'express'
import {Student} from '../models/Student.js';
import bcrypt from 'bcrypt'
const router = express.Router();
import { verifyAdmin } from './auth.js';

router.post('/register',verifyAdmin, async(req, res) => {
    try{
        const {roll, username, grade, password} = req.body;
        const student = await Student.findOne({username})
        if(student){
            return res.json({message: "Student is registered"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newStudent = new Student({
            username,
            password: hashPassword,
            roll: roll,
            grade
        })
        await newStudent.save();
        return res.json({registerd: true})
    }
    catch(err){
        return res.json({message : "Error in registering student"})
    }
})

export {router as studentRouter}