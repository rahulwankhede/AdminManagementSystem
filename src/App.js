import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Login from "./Login";
import WorkSpace from "./WorkSpace";
import CustomerDetails from "./CustomerDetails";
import AddBranch from "./AddBranch";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      
       
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/branch" element={<AddBranch/>}/>
          <Route exact path="/workspace" element={<WorkSpace/>}/>
          <Route exact path="/showCustomer" element={<Home/>}/>
          <Route exact path="/adduser" element={<CustomerDetails/>} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
