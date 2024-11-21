import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name : {type: String, unique: true},
    author: {type: String, unique: true},
    imageURL: {type: String},
})

const bookModel = mongoose.model('Book', bookSchema)

export {bookModel as Book};