import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Throttle } from 'react-throttle'
import Book from './Book'

class SearchPage extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookUpdate: PropTypes.func.isRequired,
        searchBooks: PropTypes.func.isRequired,
        setShelf: PropTypes.func.isRequired,
        setBooks: PropTypes.func.isRequired
    }

    state = {
        input: ''
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
        this.props.searchBooks(event.target.value)
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link onClick={this.props.setBooks} to='/' className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <Throttle time="1000" handler="onChange">
                            <input onChange={this.handleChange} type="text" placeholder="Search by title or author"/>
                        </Throttle>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.map((book) => 
                            <Book 
                                key={book.id}
                                book={book}
                                bookUpdate={this.props.bookUpdate}
                                setShelf={this.props.setShelf}
                            />
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage