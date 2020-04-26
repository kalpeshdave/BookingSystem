import React, { Component } from 'react'

export default class Movie extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    return(
      <tr>
        <td><img src={this.props.movie.image_url} data-reactid=".0.0" width="60px" /></td>
        <td>{this.props.movie.title}</td>
        <td>{this.props.movie.summary}</td>
        <td>{this.props.movie.year}</td>
        <td>{this.props.movie.genre}</td>
        <td>{this.props.movie.imdb_info}</td>
        <td>
          <button type="button" className="btn btn-danger" onClick={() => this.props.handleDelete(this.props.movie.id)}>Delete</button>
          <a href={ `/movie/${this.props.movie.id}/seats_availability` } type='button' className='btn btn-primary'>Book</a>
        </td>
      </tr>
    )      
  }
}