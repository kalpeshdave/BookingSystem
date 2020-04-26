import React, { Component } from 'react'
import Header from './Header'
import Seat from './Seat'
import UserForm from './UserForm'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      available_seats: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/seats?movie_id='+this.props.movie_id)
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ available_seats: data }) });
  }

  render() {
    console.log(this.state.available_seats);

    const columns = [1,2,3,4,5,6,7,8,9,10,11,12]
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

    return (
      <>
        <Header title="Movie Seat Selection"/>
        <div className="container">
          <div className="row">
            <div className="w3ls-reg">
              <UserForm />
              <ul className="seat_w3ls">
                <li className="smallBox greenBox">Selected Seat</li>
                <li className="smallBox redBox">Reserved Seat</li>
                <li className="smallBox emptyBox">Empty Seat</li>
              </ul>
              <div className="seatStructure text-center">
                <Table striped bordered className="seatsBlock">
                  <thead>
                    <tr>
                      <td></td>
                      {columns.map(col => <td>{col}</td>)}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(row => <Seat row={row} columns={columns} />)}
                  </tbody>
                </Table>
                <div className="screen">
                    <h2 className="wthree text-center">Screen this way</h2>
                </div>
                <button>Confirm Selection</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } 
}