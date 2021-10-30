import React,{useState} from 'react';
import "./index.css"
 export default function LoginPage (){
   const[name,setName]=useState("");
   const[password,setPassword]=useState("");
  //  const[allEntry,setAllEntry]=useState([]);
  //  const submitForm=()=>{
  //    const newEntry={name:name ,password:password}
  //    setAllEntry([...newEntry,allEntry])
  //  }
   const loginStart=(e) =>{
     e.preventDefault();
     if(name==="safdar" && password=="1234"){
       alert("User succesfully login")
     }
     else{
       alert("Username or password wrong");
     }
      //  console.log(name);
      //  console.log(password);

   }
        return (
                <div className="login-wrapper">
                        <div className="form-wrapper">
                <h1>Please LogIn</h1>
                <form    >
                  <label>
                    <p>Username</p>
                    <input type="text"  value={name} id="name" required  onChange={(e)=> setName(e.target.value)} /> 
                  </label>
                  <label>
                    <p>Password</p>
                    <input type="password" value={password} required id="password" autoComplete="off"  onChange={(e)=> setPassword(e.target.value)} />
                  </label>
                  <div className="mysubmit">
                    <button  type="submit" onClick={loginStart}>Submit</button>
                  </div>
                </form>
                </div>
              </div>
            
        )}
