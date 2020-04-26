import React, { Component } from 'react'

export default class Seat extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){
    var rowSeats = this.props.columns.map((item) => {
      return (
        <td><input type="checkbox" className="seats" value={`${this.props.row}${item.column}`} /></td>
      )
    });

    return(
      <tr>
        <td>{this.props.row}</td>
        {rowSeats}
      </tr>
    )      
  }
}