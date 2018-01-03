import React from  'react'
import PropTypes from 'prop-types'
import BookShelfHeading from './BookShelfHeading'
import Book from './Book'

function BookShelf (props) {
    return(
        <div className="bookshelf">
            <BookShelfHeading title={props.shelfName}/>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => 
                        <Book 
                            key={book.id}
                            book={book}
                            bookUpdate={props.bookUpdate}
                            setShelf={props.setShelf}
                        />
                    )}
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    shelfName: PropTypes.string.isRequired,
    shelfValue: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    bookUpdate: PropTypes.func.isRequired,
    setShelf: PropTypes.func.isRequired
}

export default BookShelf