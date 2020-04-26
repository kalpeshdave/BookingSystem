import React, { Component } from 'react'
import { Button, Navbar } from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <Navbar>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#">Guest</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        <div className="container"><h3>{this.props.title}</h3></div>
      </>
    );
  }
}