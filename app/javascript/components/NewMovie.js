import React, { Component } from 'react'

export default class NewMovie extends Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    const formFields = {}

    return(
      <div>
        <h1>New Movie</h1>
      
        <form onSubmit={ (e) => { this.props.handleSubmit(formFields.title.value, formFields.summary.value, formFields.year.value, formFields.genre.value, formFields.imdb_info.value); e.target.reset();}
}>
         <input ref={input => formFields.title = input} placeholder='Movie Title' required />
         <input ref={input => formFields.summary = input} placeholder='Summary' required />
         <input ref={input => formFields.year = input} placeholder='Year of Movie' required />
         <input ref={input => formFields.genre = input} placeholder='Genre of Movie' required />
         <input ref={input => formFields.imdb_info = input} placeholder='IMDB Link to Movie' />
         <button onClick={this.props.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}