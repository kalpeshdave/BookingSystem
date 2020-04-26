import React, { Component } from 'react'
import ListMovies from './ListMovies'
import NewMovie from './NewMovie'

export default class Body extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleFormSubmit(title, summary, year, genre, imdb_info){
    let body = JSON.stringify({movie: {title: title, summary: summary, year: year, genre: genre, imdb_info: imdb_info} })

    fetch('/api/v1/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((movie)=>{
      this.setState({ movies: this.state.movies.concat(movie) })
    })
  }

  handleDelete(id){
    fetch(`/api/v1/movies/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      const newMovies = this.state.movies.filter((movie) => movie.id !== id)
      this.setState({ movies: newMovies })
    })
  }

  componentDidMount(){
    fetch('/api/v1/movies.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ movies: data }) });
  }

  render() {
    return (
      <div className="container">
        <NewMovie handleSubmit={this.handleFormSubmit} />
        <ListMovies movies={this.state.movies} handleDelete={this.handleDelete} />
      </div>
    );
  }
}