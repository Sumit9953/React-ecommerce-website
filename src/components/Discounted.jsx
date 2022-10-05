import React from 'react';
import { books } from "../data";
import Books from './ui/books';

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discount <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books
                            .filter((book) => book.salePrice > 0)
                            .slice(0,8)
                            .map((book) => (
                                <Books book={book} key={book.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;

