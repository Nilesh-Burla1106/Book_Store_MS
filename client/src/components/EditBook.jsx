import React, { useEffect } from 'react'
import '../css/AddStudent.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageURL, setImageURL] = useState('')
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/book/book/`+id)
        .then(res => {
            setName(res.data.name)
            setAuthor(res.data.author)
            setImageURL(res.data.imageURL)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/book/book/'+id, {name, author, imageURL})
        .then(res => {
            if(res.data.updated){
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
            <h2>Edit Book</h2>
            <div className='form-group'>
            <label htmlFor="book">Book Name: </label>
            <input type="text" id='book' name='book' value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-group'>
            <label htmlFor="author">Author: </label>
            <input type="text" id='author' name='author' value={author}
                onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-group'>
            <label htmlFor="image">Image URL: </label>
            <input type="text" id='image' name='image'value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}/>
            </div>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default EditBook