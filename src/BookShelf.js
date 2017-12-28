import React, {Component} from  'react'
import PropTypes from 'prop-types'
import BookShelfHeading from './BookShelfHeading'
// import BooksGrid from './BooksGrid'

class BookShelf extends Component {
    static propTypes = {
        shelfName: PropTypes.string.isRequired,
    }
    render(){
        return(
            <div className="bookshelf">
                <BookShelfHeading title={this.props.shelfName}/>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* <BooksGrid books={this.state.books} /> */}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf