
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams ,useNavigate} from "react-router-dom";


export default function CustomerDetails()
{
    let navigate = useNavigate();

    const [customer, setUser] = useState({
      firstName:"",
      lastName: "",
      address: ""
     
    });
  
    const { firstName,lastName,address } = customer;
  
    const onInputChange = (e) => {
      setUser({ ...customer, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:9193/addCustomer", customer);
      navigate("/workspace");
  
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
                    First Name
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
               
               
               
                <div className="mb-3">
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
                
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
               
    
                <Link className="btn btn-outline-danger mx-2" to="/workspace">
              Cancel
            </Link>

    
              </form>
            </div>
          </div>
        </div>
      );
    
  
}
