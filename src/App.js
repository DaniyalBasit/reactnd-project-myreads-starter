import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
      BooksAPI.getAll().then((allBooks) => {
          allBooks.map((book) => {

          })
          console.log(allBooks)
      })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={()=>(
          <SearchPage />
        )}/>
        <Route exact path='/' render={()=>(
          <ListBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
