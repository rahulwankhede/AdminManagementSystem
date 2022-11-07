import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WorkSpace from "../WorkSpace";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    accountNo:"",
    customerNo: "",
    branchId: "",
    balance:"",
    openingDate:""
  });

  const { accountNo,customerNo,branchId,balance,openingDate } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/workspace");

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

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
              <label htmlFor="Enter Customer No" className="form-label">
                Customer No
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="customerNo"
                name="customerNo"
                value={customerNo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
           
           
            <div className="mb-3">
              <label htmlFor="branchId" className="form-label">
                BranchId
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="branchId"
                name="branchId"
                value={branchId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor="balance" className="form-label">
                Balance
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="balance"
                name="balance"
                value={balance}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="openingDate" className="form-label">
                openingDate
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="openingDate"
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
