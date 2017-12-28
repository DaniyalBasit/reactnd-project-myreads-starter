import React, { Component } from 'react'
import Header from './Header'
import AddBookButton from './AddBookButton'
import BookShelf from './BookShelf'

class ListBooks extends Component{
    render() {
        const shelfName = ["wantToRead", "currentlyReading", "read"]        
        return (
            <div className="list-books">
                <Header />
                <div className="list-books-content">
                    <div>
                        {shelfName.map((name) => 
                            <BookShelf key={name} shelfName={name}/>
                        )}
                    </div>
                </div>
                <AddBookButton />
            </div>
        )    
    }
}

export default ListBooks