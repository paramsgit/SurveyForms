import { Link, Outlet } from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSearchbar, toggleNavbar } from '../utils/appSlice'

const Navbar = (props) => {
    const dispatch=useDispatch();
    const Theme=props.mode[0]
    const setTheme=props.mode[1]
    const [page, setpage] = useState("")
    const isNavbarOpen=useSelector((store)=>store.app.isNavbarOpen)


    const ToggleNavbar=()=>{
      dispatch(toggleNavbar())
    }
   
    const SwitchTheme=()=>{
      setTheme(!Theme)
    }
   
  
    
  
  return (
    
<>
    
<nav className="fixed w-full bg-white border-gray-200 dark:bg-[#141414] z-[60]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Enquiry</span>
          </a>
          <div className="flex md:order-1 max-w-[420px] md:w-full">
            <button onClick={ToggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between w-full md:flex md:w-auto md:order-2" id="navbar-search">
            <div className={`${false ? "hidden" : "block"} relative mt-3 md:hidden`}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               
              </div>
             
            </div>

            <ul className={`${isNavbarOpen ? "hidden md:flex" : "flex"} flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700`}>
              <li className='m-2 md:m-0'>
                <Link to='/' className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent ${page === "" ? "md:text-blue-700 md:dark:text-blue-500 bg-blue-500 " : "md:dark:text-white md:text-gray-800 bg-gray-800 "}  md:p-0`} onClick={() => { setpage("") }} aria-current="page">Level3</Link>
              </li>
              <li className='m-2 md:m-0'>
                <Link to='/level2' className={`block py-2 pl-3 pr-4 text-gray-900 rounded text-white md:bg-transparent md:p-0 ${page === "level2" ? "md:text-blue-700 md:dark:text-blue-500 bg-blue-500 " : "md:dark:text-white md:text-gray-800 bg-gray-800 "} `} onClick={() => { setpage("level2") }}>Level2 </Link>
              </li>
              <li className='m-2 md:m-0'>
                <Link to='/level1' className={`block py-2 pl-3 pr-4 text-gray-900 rounded text-white md:bg-transparent md:p-0 ${page === "level1" ? "md:text-blue-700 md:dark:text-blue-500 bg-blue-500 " : "md:dark:text-white md:text-gray-800 bg-gray-800 "} `} onClick={() => { setpage("level1") }}>Level1 </Link>
              </li>

              <li>
                {Theme ?
                  <button onClick={SwitchTheme} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 mr-2 dark:bg-white dark:text-gray-900 dark:border-gray-600 dark:hover:bg-gray-100 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>

                  :
                  <button onClick={SwitchTheme} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 mr-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
                }



              </li>
            </ul>
          </div>
        </div>
      </nav>
<Outlet/>
</>

  
  )
}

export default Navbar