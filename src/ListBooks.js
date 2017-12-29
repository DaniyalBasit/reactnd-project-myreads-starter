import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import AddBookButton from './AddBookButton'
import BookShelf from './BookShelf'

class ListBooks extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    state = {
        shelf: ["wantToRead", "currentlyReading", "read"] 
    }

    shelfBooks = (shelf) => {
        let books = this.props.books.filter((book) => {
            return shelf === book.shelf
        })
        return books
    }

    shelfName = (shelfKey) => {
        let name
        switch(shelfKey) { 
            case "wantToRead": { 
               name = "Want To Read" 
               break; 
            } 
            case "currentlyReading": { 
               name = "Currently Reading" 
               break; 
            }  
            default: { 
               name = "Read" 
               break;              
            } 
         }
         return name
    }
    
    render() {
        return (
            <div className="list-books">
                <Header />
                <div className="list-books-content">
                    <div>
                        {this.state.shelf.map((name) => 
                            <BookShelf 
                                key={name}
                                shelfValue={name}
                                shelfName={this.shelfName(name)}
                                books={this.shelfBooks(name)}
                            />
                        )}
                    </div>
                </div>
                <AddBookButton />
            </div>
        )    
    }
}

export default ListBooks