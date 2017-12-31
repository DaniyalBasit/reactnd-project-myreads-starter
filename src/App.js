import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  onBookUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    )  
  }

  render() {
    const books = this.state.books
    return (
      <div className="app">
        <Route exact path='/search' render={()=>(
          <SearchPage books={books} />
        )}/>
        <Route exact path='/' render={()=>(
          <ListBooks 
            books={books}
            bookUpdate={this.onBookUpdate}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
