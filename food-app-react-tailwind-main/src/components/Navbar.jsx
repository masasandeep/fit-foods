import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import SearchBar from '../components/SearchBar';
import { CgProfile } from "react-icons/cg";
import { FaAllergies } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5";
import {CgWebsite} from "react-icons/cg";
import { MdFavorite, MdHelp } from "react-icons/md";
import FoodDisplay from './FoodCard'
import RiveComponent from "@rive-app/canvas";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
const Navbar = () => {
  
  const [user,setUser] = useState('')
  useEffect(() =>{
    const username = localStorage.getItem('username');
    // console.log(username)
    if(username){
      setUser(username)
    }
    console.log({user})
  },[])
  
  const [nav, setNav] = useState(false);
  const [name,setname] = useState('');
  useEffect(()=>{
    const name = localStorage.getItem('username')
    if(name){
      setname(name);
    }
  },[])
  return (
    <>
      
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* Left side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <Link to="/">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
              FIT <span className="font-bold">FOODS</span>
            </h1>
          </Link>
        </div>

        {/* Search Input */}
        {/* <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]"> */}
          
          {/* <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search foods"
          /> */}
          <SearchBar/>
        {/* </div> */}
        {/* Cart button */}
         
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <Link to="/signin">
          <CgProfile size={20} className="mr-4" />
          {user?
          user
          :'Login'}
          {/* Animationan */}
          </Link>
        </button>
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            FIT <span className="font-bold">FOODS</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex">
                <CgProfile size={25} className="mr-4" />
                <Link to="/userprofile">User Details</Link>
              </li>
              <li className="text-xl py-4 flex">
                <MdFavorite size={25} className="mr-4" />
                <Link to="/healthissues">Health Issues</Link>
              </li>
              <li className="text-xl py-4 flex">
                <FaAllergies size={25} className="mr-4" />
                <Link to="/allergies"> Allergies</Link>
              </li>
              <li className="text-xl py-4 flex">
                <IoDocuments size={25} className="mr-4" />
                <Link to="/document"> Upload Documents </Link>
              </li>
              <li className="text-xl py-4 flex">
                <CgWebsite size={25} className="mr-4" />
                <Link to="/blogs"> Food Blogs</Link>
              </li>
              <li className="text-xl py-4 flex">
                <CgWebsite size={25} className="mr-4" />
                <Link to="/FoodDisplay">Log out</Link>
              </li>
              {/* <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li> */}
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
