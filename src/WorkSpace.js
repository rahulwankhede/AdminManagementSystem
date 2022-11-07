import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class WorkSpace extends Component {
  render() {
    return (
        
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

              <div class="d-grid gap-2">
            
                 <Link to="/showCustomer" class="btn btn-primary" type="button" >Show Customer</Link>
                 <Link to="/adduser" class="btn btn-primary" type="button" >Add Customer</Link>
              </div>
            </div></div></div>
    //     <div class="d-grid gap-2">
            
    //     <Link to="/showCustomer" class="btn btn-primary" type="button" >Show Customer</Link>
    //     <Link to="/adduser" class="btn btn-primary" type="button" >Add Customer</Link>
    //   </div>
    )
  }
}
