import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Book.css'

const BookCard = ({book}) => {
    const {name, author, imageURL} = book;
    console.log("----------"+ book)
  return (
    <div className='book-card'>
        <img src={imageURL} alt={name} className='book-image' />
        <div className="book-details">
            <h3>{name}</h3>
            <p>{author}</p>
        </div>
        <div className="book-actions">
            <button ><Link to={`/book/${book._id}`} className='btn-link'>edit</Link></button>
            <button ><Link to={`/delete/${book._id}`} className='btn-link'>delete</Link></button>
        </div>
    </div>
  )
}

export default BookCard