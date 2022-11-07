import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
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
               
                <td>{"GB0"+(index++)}</td>
                <td>{user.customerNo}</td>
                <td>{user.branchId}</td>
                <td>{user.balance}</td>
                <td>{user.openingDate}</td>
                <td>
                
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/workspace" class="btn btn-primary" >Home</Link>
      </div>
    </div>
  );
}
