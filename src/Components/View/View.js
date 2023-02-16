import { useState,useEffect,useContext } from 'react';
import React from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
import { collection ,getDocs} from 'firebase/firestore';
function View() {
  const[userDetailes,setUserDetailes]=useState()
  const{postDetailes}=useContext(PostContext)
  const{Firebase}=useContext(FirebaseContext)

    useEffect(()=>{
      const colRef=collection(Firebase,'products')
      getDocs(colRef).then((res)=>{
        res.forEach(doc=>{
          setUserDetailes(doc.data())
          
        });
      })
      
    })
  return (

    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetailes.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetailes.price}  </p>
          <span>{postDetailes.name}</span>
          <h5>{postDetailes.category}</h5>
          <span>{postDetailes.createdAt}</span>
        </div>
        {userDetailes &&<div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>}
      </div>
    </div>
  )
  
}
export default View;
