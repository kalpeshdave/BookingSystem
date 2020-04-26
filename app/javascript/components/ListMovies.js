import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Movie from './Movie'

export default class ListMovies extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var movies= this.props.movies.map((item) => {
        return (
          <Movie movie={item} handleDelete={this.props.handleDelete} />
        )
    });

    return(
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Summary</th>
              <th>Year</th>
              <th>Genre</th>
              <th>IMDB</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies}
          </tbody>
        </Table>
      </div>
    )
  }
}