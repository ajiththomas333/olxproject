import React,{useEffect, useContext} from 'react';
import './App.css';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom';
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import {AuthContext, FirebaseContext  } from './store/Context'

function App() {
  const {user,setUser}=useContext(AuthContext)
  const {Firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        setUser(user)

    
  })
})
  


  return (
  
    <div>
      <Post>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/view" element={<View/>} />
        </Routes>
        </Post>
    
    
    </div>
  );
}

export default App;
