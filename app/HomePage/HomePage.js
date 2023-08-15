
"use client";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Main from "../Main/Main";
export default function HomePage() {
  return (
    
    <div className=' bg-slate-950'>
    <Navbar />
  
  <div className=' md:ml-56 ml-6'>
    <Header />
    <Main />
  </div>
  </div>
  )
}
