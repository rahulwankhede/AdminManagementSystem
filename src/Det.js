import React, { Component } from 'react'
import axios from "axios";
import { Link, useParams ,useNavigate,useLocation} from "react-router-dom";
export default function Det (props){
    const loc=useLocation();
    let navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
       
        navigate("/showCustomer");
    
      };
    return (

        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Customer Details</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
            {/* <div className="mb-3">
                <label htmlFor="Enter Account No" className="form-label">
                  Account No
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="AccountNo"
                  name="accountNo"
                  value={accountNo}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              */}
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Name : 
                </label>

                <text>{loc?.state.address}</text>
                 
              </div>
              <div className="mb-3">
                <label  htmlFor="firstName" className="form-label">
                  Home Address : 
                </label>
                <text>{"one"}</text>
                 
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Branch Name : 
                </label>
                <text>{"one"}</text>
                 
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Branch Address : 
                </label>
                <text>{"one"}</text>
                 
              </div>
             
             
             
             
             
             
              {/* <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
             
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="address"
                  name="address"
                  value={address}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
               */}
              <button type="submit" className="btn btn-outline-primary">
             Cancel
              </button>
             
  
              

  
            </form>
          </div>
        </div>
      </div>

    );

}
