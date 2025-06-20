import React from 'react'
import './Navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { SlUser,SlHandbag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <div className="left">
       <div className="logo"> <img src="https://vegina-store.myshopify.com/cdn/shop/files/logo-7.svg?v=1676488073&width=352" alt="" /></div>
       <div className="nav-items">
        <ul>
            <li>Home <span><IoIosArrowDown /></span></li>
            <li>Shop <span><IoIosArrowDown /></span></li>
            <li>Collection</li>
            <li>Blogs</li>
            <li>Pages <span><IoIosArrowDown /></span></li>
            <li>Buy vegist</li>
        </ul>
    </div>
    </div>
   
    <div className="nav-right">
        <input type="text" placeholder='Search our store' />
        <div className="searc"><FaSearch className='sear'/></div>
        
        <SlUser className='ch' />
        <div className="likes"><FaRegHeart className='ch'/><span>0</span></div>
        <SlHandbag className='ch'/>
        </div>
    </div>
   
    </>
  )
}

export default Navbar