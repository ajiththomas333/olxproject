import  { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { addDoc,collection, doc} from 'firebase/firestore';
import {useNavigate} from "react-router-dom";






export default function Signup() {
  const navigator=useNavigate()
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const {Firebase}=useContext(FirebaseContext)
     
     const handleSubmit=(e)=>{e.preventDefault();
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password).then((result) => {
        updateProfile(result.user,{displayName:username})
          
      
         addDoc(collection(Firebase,"userer"), {
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          navigator("/login");
        })
        
        })
        
        
        

      

       }
           
        
      
    
      
    
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form  onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href ='login'>Login</a>
      </div>
    </div>
  );
  
}

