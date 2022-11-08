import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Login from "./Login";
import WorkSpace from "./WorkSpace";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
        <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/workspace" element={<WorkSpace/>}/>
          <Route exact path="/showCustomer" element={<Home/>}/>
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
