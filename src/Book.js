import React from 'react'
import PropTypes from 'prop-types'

function Book (props) {  
    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => {props.bookUpdate(props.book, event.target.value)}} value={props.book.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                {props.book.authors ? (props.book.authors.map((author) => 
                    <div key={author} className="book-authors">{author}</div>
                )) : (<div key='author' className="book-authors">no author</div>
                )}
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookUpdate: PropTypes.func.isRequired
}

export default Book