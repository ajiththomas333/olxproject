import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { signOut } from 'firebase/auth';
import { getAuth} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
function Header() {
  const {user}= useContext(AuthContext)
  const {Firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}` :<spam onClick={()=>{
            navigate("/login")
          }}>login</spam>}</span>
          <hr />
          
        

        </div>
        {user && <spam onClick={()=>{
          const auth = getAuth();
          signOut(auth);
          navigate('/login')
        }}>logout</spam>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
              navigate("/create")
            }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
