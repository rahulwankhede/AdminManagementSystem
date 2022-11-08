import React, { Component,useState } from 'react'
import axios from "axios";
import { Link, useParams ,useNavigate} from "react-router-dom";
export default function Account()
{
    let navigate = useNavigate();

    const [account, setUser] = useState({
      balance:"",
      
   openingDate: ""
     
    });
  
    const { balance,openingDate} =account;
  
    const onInputChange = (e) => {
      setUser({ ...account, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:9193/addAccount",account );
      navigate("/workspace");
  
    };
    return(
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Account Entry</h2>
  
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
                <label htmlFor="balance" className="form-label">
                  Balance
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Balance"
                  name="Balance"
                  value={balance}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
             
             
             
              <div className="mb-3">
                <label htmlFor="openingDate" className="form-label">
                 Opening Date
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  placeholder="Opening Date"
                  name="openingDate"
                  value={openingDate}
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
