import React, {Component} from  'react'
import PropTypes from 'prop-types'
import BookShelfHeading from './BookShelfHeading'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        shelfName: PropTypes.string.isRequired,
        shelfValue: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }
    render(){
        return(
            <div className="bookshelf">
                <BookShelfHeading title={this.props.shelfName}/>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => 
                            <Book 
                                key={book.id}
                                book={book}
                            />
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf