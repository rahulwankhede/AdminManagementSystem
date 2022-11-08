import React from "react";

import {BrowserRouter,Switch,Route, Link} from 'react-router-dom';
import { Component,useState,useRef,useEffect } from "react";
import WorkSpace from "./WorkSpace";


//const LOGIN_URL='/auth'
const Login=()=>
{
    
  const userRef=useRef();
  const errRef=useRef();
  const [user,setUser]=useState('');
const [pwd,setPwd]=useState('');
const [errMsg,setErrMsg]=useState('');
const [success,setSuccess]=useState(false);
   useEffect(()=>{
   userRef.current.focus();},[])
   useEffect(()=>{
    setErrMsg('');
   },[user,pwd])
   const handleSubmit=async (e)=>
   {
    e.preventDefault();
    
    console.log(user,pwd); 

    if(user=="aravindh2000"&&pwd==12345)
    {
      setUser('');
      setPwd('');
      setSuccess(true);
    }
    else{
      setSuccess(false);
      setErrMsg('Invalid login Credentials....');
    }

   
    }
   
   

   
  return(
    <>{success?(
        <section>
     <WorkSpace/>
        </section>
    ):(
        <div className="container ">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <p ref={errRef} className={errMsg?"errmsg":
    "offscreen"} aria-live="assertive">{errMsg}</p>
    <h1>Login</h1>
   <section>
 
    <form onSubmit={handleSubmit}>
       
       <input placeholder="user id"   className="form-control" type="text" id="userId" ref={userRef} autoComplete="off" 
       onChange={(e)=>setUser(e.target.value)}
       value={user}
       required/><br/>
   
       <input placeholder="password"   className="form-control" type="password" id="password"  
       onChange={(e)=>setPwd(e.target.value)}
       value={pwd}
       required/><br/>
       <button class="btn btn-primary" to="workspace">Sign In</button>
    </form>
   </section></div></div></div>)}
   </>
  ); 

  
};
export default Login;