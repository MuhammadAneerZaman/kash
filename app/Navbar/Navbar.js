"use client";
import { signIn, useSession,signOut } from "next-auth/react";


import Link from 'next/link'
import { Navi, NaviHead } from "./Navi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faListAlt,
  faDatabase,
  faCog,
  faSignOut,
  faColumns,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
export default function Navbar() {
    const [ menuIcon , setMenuIcon] = useState(faBars)
    let HandleMenu = ()=>{
        let list = document.getElementById('Nav');
        setMenuIcon( menuIcon === faBars ? faTimes : faBars);
        list.classList.add( menuIcon === faBars && 'left-0')
        list.classList.remove( menuIcon === faTimes && 'left-0')
        
    }
  return ( 
  <div id='Nav' className=" absolute -left-48 md:left-0  lg:flex flex-col items-center h-screen w-56 bg-cyan-950 shadow-xl  transition-all ease-in-out  ">
        <FontAwesomeIcon icon={menuIcon} onClick={HandleMenu} className=' absolute left-48 h-6 w-6 text-cyan-400 cursor-pointer md:hidden' />
    
      <NaviHead HIcon={faFolder} Head='My Slack' />

      <Navi Icon={faListAlt} Type='Courses' />
      <Navi Icon={faColumns} Type='Summer Coding' />
      <Navi Icon={faDatabase} Type='Data Science' />
      <Navi Icon={faCog} Type='Settings' />

      <span onClick={()=>signOut()}>
      <NaviHead HIcon={faSignOut} Head='Sign Out'  />
      </span>
  </div> );
}
