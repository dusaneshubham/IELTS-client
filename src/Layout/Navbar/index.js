import React from 'react';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import Category from '../Category';
import './index.css'
const NavbarAnkit=()=> {
  return <>
          
        <nav>
         <div class="logo">
            IELTS-BLOG
         </div>
        
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
        
         <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
            <span className="search">
         <input type="text" className="searchbox" placeholder=' Search here..'></input>
         <button className="searchbtn">
         <i className="fa fa-search"></i>
         </button>
         </span>
         </ul>
         <span className="search-mobile">
         <input type="text" className="searchbox" placeholder=' Search here..'></input>
         <button className="searchbtn">
         <i className="fa fa-search"></i>
         </button>
         </span>  
      </nav>
      <Category/>
  </>
  ;
}

export default NavbarAnkit;
