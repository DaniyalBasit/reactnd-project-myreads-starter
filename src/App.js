import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    shelf: ["wantToRead", "currentlyReading", "read"]
  }
  prevState = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.prevState.books = books
      this.setState({ books })
    })
  }

  onBookUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      BooksAPI.getAll().then((books) => {
        this.prevState.books = books
        this.setState({ books })
      })
    )  
  }

  setUserBook(){
    this.setState({books: this.prevState.books})
  }

  onSearchBooks = (query) => {
    if (query !== "") {
      BooksAPI.search(query).then((books) => {
        if (books === undefined || books.error) {
          this.setState({ books: [] })
        }else{
          this.setState({ books })
        }
      })
    }
  }

  setBookShelf = (userBook) => {
    let book = this.state.books.filter((book) => this.prevState.books.includes(book)).find((lishBook) => {return lishBook === userBook})
    return book !== undefined ? (book.shelf) : ("none")
  }

  shelfBooks = (shelf) => {
    let books = this.state.books.filter((book) => {
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
    const books = this.state.books
    return (
      <div className="app">
        <Route exact path='/search' render={()=>(
          <SearchPage 
            books={books}
            bookUpdate={this.onBookUpdate}
            searchBooks={this.onSearchBooks}
            setShelf={this.setBookShelf}
            setBooks={this.setUserBook}
          />
        )}/>
        <Route exact path='/' render={()=>(
          <ListBooks 
            books={books}
            bookUpdate={this.onBookUpdate}
            shelves={this.state.shelf}
            setShelfBooks={this.shelfBooks}
            setShelfName={this.shelfName}
            setShelf={this.setBookShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
