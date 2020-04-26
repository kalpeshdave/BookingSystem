import React, { Component } from 'react'

export default class UserForm extends Component {
  
  render(){
    return(
      <>
        <div className="inputForm">
          <h2>fill the required details below and select your seats</h2>
          <div className="mr_agilemain">
            <div className="agileits-left">
              <label> Name
                  <span>*</span>
              </label>
              <input type="text" id="Username" required />
            </div>
            <div className="agileits-right">
              <label> Number of Seats
                  <span>*</span>
              </label>
              <input type="number" id="Numseats" required min="1" />
            </div>
          </div>
        </div>
      </>
    )      
  }
}