import React from 'react'
import '../css/AddStudent.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageURL, setImageURL] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/book/add', {name, author, imageURL})
        .then(res => {
            if(res.data.added){
                navigate('/books')
            }
            else{
                console.log(res)
            }
        })
        .catch(err => console.log(err))
    }


  return (
    <div className='student-form-container'>
        <form className='student-form' onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <div className='form-group'>
            <label htmlFor="book">Book Name: </label>
            <input type="text" id='book' name='book'
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-group'>
            <label htmlFor="author">Author: </label>
            <input type="text" id='author' name='author'
                onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-group'>
            <label htmlFor="image">Image URL: </label>
            <input type="text" id='image' name='image'
                onChange={(e) => setImageURL(e.target.value)}/>
            </div>
            <button type='submit'>Add Book</button>
        </form>
    </div>
  )
}

export default AddBook