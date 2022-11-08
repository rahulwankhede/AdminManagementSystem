import React, { Component ,useState} from 'react'
import axios from "axios";
import { Link, useParams ,useNavigate} from "react-router-dom";
export default function AddBranch()
{
    let navigate = useNavigate();

    const [branchDetails, setUser] = useState({
      branchName:"",
      
      branchAddress: ""
     
    });
  
    const { branchName,branchAddress } =branchDetails;
  
    const onInputChange = (e) => {
      setUser({ ...branchDetails, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      console.log(branchName,branchAddress);
      await axios.post("http://localhost:9193/addBranch",branchDetails );
      console.log(branchName,branchAddress);
      navigate("/workspace");
  
    };
    return(  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Branch Details</h2>

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
            <label htmlFor="branchName" className="form-label">
              Branch Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="branchName"
              name="branchName"
              value={branchName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
         
         
         
          <div className="mb-3">
            <label htmlFor="branchAddress" className="form-label">
            Branch Address
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="branchAddress"
              name="branchAddress"
              value={branchAddress}
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
  </div>);
}