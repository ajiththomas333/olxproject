import React, { Fragment, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import{ FirebaseContext} from '../../store/Context'
import { AuthContext } from '../../store/Context';
import { getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { addDoc, doc,collection} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const {Firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  


  const[name,setName]=useState('')
  const[category,setCategory]=useState('')
  const[price,setPrice]=useState('')
  const[image,setImage]=useState(null)
  const date=new Date()
  const handleSubmit =()=>{
    const storage = getStorage();
    const storageRef = ref(storage, `/image/${image.name}`)
    uploadBytes(storageRef,image).then(({ref})=>{
     getDownloadURL(ref).then((url)=>{
      console.log(url)

        addDoc(collection(Firebase,"products"), {
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()

        })
      })
    }).then(()=>{
      navigate("/")
    })
    
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input"
             type="number"
             value={price}
             onChange={(e)=>setPrice(e.target.value)}
             id="fname"
              name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):null}></img>
          
            <br />
            <input 
          
              onChange={(e)=>setImage(e.target.files[0])}
              type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
