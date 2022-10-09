import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

const Book = ({ book }) => {
    function imageLoaded(){
        console.log('imageLoaded');
    }
    return (
        <div className="book">
        
            {/* <Link to={`/books/${book.id}`}>
                <figure className='book__img--wrapper'>
                    <img src={book.url} alt="" onLoad={imageLoaded} />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link">
                    {book.title}
                </Link>
            </div>
            <Rating rating={book.rating} />
            <Price salePrice = {book.salePrice} originalPrice = {book.originalPrice} /> */}
        </div>
    );
}

export default Book;
