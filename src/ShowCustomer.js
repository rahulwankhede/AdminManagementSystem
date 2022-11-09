import React, { Component ,useEffect, useState} from 'react'
import axios from "axios";


import { Link, useParams} from "react-router-dom";
import Det from './Det';

export default function ShowCustomer()
 {

    const [users, setUsers] = useState([]);
     const [ch,setCh]=useState({
      name:"",
      address:"",
      branchname:"",
      branchaddress:""
     });

    const { id } = useParams();
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:9193/getAccounts");
      console.log(result.data);
      setUsers(result.data);
     
      
    };
    const fill=async (id1,id2)=>{
      console.log(id1,id2);
      const result1= await axios.get(`http://localhost:9193/getCustomerById/${id1}`);
      
      const res1=result1.data;
    
    
       const result2= await axios.get(`http://localhost:9193/getBranchById/${id2}`);
      
       const res2=result2.data;
    await setCh({name:(res1.firstName+" "+res1.lastName),address:res1.address,branchname:res2.branchName,branchaddress:res2.branchAddress});
      
     console.log(ch);
    
     
   
    }
  
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:9193/deleteAccount/${id}`);
      loadUsers();
    };
    return(
        <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                
                <th scope="col">Account Number</th>
                <th scope="col">Customer Number</th>
                <th scope="col">Branch Id</th>
                <th scope="col">Balance</th>
                <th scope="col">Opening Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                 
                  <td>{"GB0"+(user.accountNo)}</td>
                  <td>{user.customer.id}</td>
                  <td>{user.branch.id}</td>
                  <td>{user.balance}</td>
                  <td>{user.openingDate}</td>
                  <td>
                  <button   class="btn btn-primary"  onClick={()=>{fill(user.customer.id,user.branch.id)}} >Details</button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.accountNo)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <Link to="/workspace" class="btn btn-primary" >Home</Link>
          <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Name : 
                </label>

                <text>{ch.name}</text>
                 
              </div>
              <div className="mb-3">
                <label  htmlFor="firstName" className="form-label">
                  Home Address : 
                </label>
                <text>{ch.address}</text>
                 
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Branch Name : 
                </label>
                <text>{ch.branchname}</text>
                 
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Branch Address : 
                </label>
                <text>{ch.branchaddress}</text>
                 
              </div>
             
        </div>
      </div>
  



    );
}
