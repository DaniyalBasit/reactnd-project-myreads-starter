import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchPage extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookUpdate: PropTypes.func.isRequired,
        searchBooks: PropTypes.func.isRequired
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
                    <Link to='/' className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={this.handleChange} type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.map((book) => 
                            <Book 
                                key={book.id}
                                book={book}
                                bookUpdate={this.props.bookUpdate}
                            />
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage