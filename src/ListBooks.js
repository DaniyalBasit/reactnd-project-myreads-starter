import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import AddBookButton from './AddBookButton'
import BookShelf from './BookShelf'

function ListBooks (props) {
    return (
        <div className="list-books">
            <Header />
            <div className="list-books-content">
                <div>
                    {props.shelves.map((name) => 
                        <BookShelf 
                            key={name}
                            shelfValue={name}
                            shelfName={props.setShelfName(name)}
                            books={props.setShelfBooks(name)}
                            bookUpdate={props.bookUpdate}
                            setShelf={props.setShelf}
                        />
                    )}
                </div>
            </div>
            <AddBookButton />
        </div>
    )
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    bookUpdate: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired,
    setShelfBooks: PropTypes.func.isRequired,
    setShelfName: PropTypes.func.isRequired,
    setShelf: PropTypes.func.isRequired
}

export default ListBooks