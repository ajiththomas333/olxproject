import React,{useEffect,useContext,useState} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';

import { getDocs,collection } from 'firebase/firestore';
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';

function Posts() {
  const {Firebase}=useContext(FirebaseContext)
  
  const[products,setProducts]=useState([])
  const {setPostDetailes}=useContext(PostContext)
  const navigate=useNavigate()
  
    
  useEffect(()=>{
    const colRef=collection(Firebase,'products')
    getDocs(colRef).then((Snapshot)=>{
     const allpost= Snapshot.docs.map((product)=>{
      return{
        ...product.data(),
        id:product.id
      }
     })
     setProducts(allpost)

    })
  },[])


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         { 
         products.map((product)=>{
          
          return(
        
         <div
            className="card"
            onClick={()=>{
              setPostDetailes(product)
              navigate('/view')

            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
         )
         
          })
         
          }



        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>

      </div>
     


    </div>
  );
}

export default Posts;
