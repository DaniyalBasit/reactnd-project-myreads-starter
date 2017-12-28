import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function  AddBookButton (props) {
    return(
        <div className="open-search">
            <Link to='/search'>Add a book</Link>
        </div>
    )
}

export default AddBookButton