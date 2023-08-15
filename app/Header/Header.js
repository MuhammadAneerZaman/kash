"use client";
import { signIn, useSession,signOut } from "next-auth/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faSearch,
  faCalendar,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Profile from "../../public/th.jpg";
export default function Header() {
  const { status , data:session } = useSession();
  return (
    <div className=" mx-2 my-1 h-32 md:w-[63rem] w-80  border-b-2 bg-cyan-900 border-gray-700 shadow-2xl">
      <div className=" text-cyan-500 flex items-center justify-between mx-2 py-4 box-border overflow-hidden  ">
        
          <h2 className=" cursor-default"> Welcome to Your todo App, <span className=" text-xl font-bold"> {session?.user?.name} </span> </h2>
        
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faBell} className=" h-4 w-4 cursor-pointer hover:scale-105 transition-all ease-in-out" />
          <FontAwesomeIcon
            icon={faQuestion}
            className=" h-3 w-3 border-2 border-solid border-cyan-500 rounded-full cursor-pointer transition-all ease-in-out hover:scale-105"
          />
          <Image
            src={session?.user?.image}
            className=" rounded-full cursor-pointer"
            height={35}
            width={35}
          />
        </div>
      </div>

        <div className=" mx-5 my-5 flex items center justify-between ">
            <div className=" text-cyan-500 flex items-center space-x-1 cursor-pointer hover:text-cyan-400 hover:border-b-2 border-cyan-400 pb-3 mr-2">
                <FontAwesomeIcon icon={faCalendar} className=" h-4 w-4" />
                <h1 className=" font-semibold">Todo</h1>
            </div>
            <div className=" flex items-center space-x-2">
                <div className=" border-2 border-cyan-500 rounded space-x-1 w-44 flex items-center">
                <FontAwesomeIcon icon={faSearch} className=" h-4 w-4 text-cyan-500" />
                <input type="search" placeholder="Start Your Search" className=" bg-cyan-900 outline-none  text-cyan-400  w-36" />
                </div>
                <FontAwesomeIcon icon={faBell} className=" h-4 w-4 text-cyan-500 cursor-pointer hover:scale-105 transition-all ease-in-out" />
                <FontAwesomeIcon icon={faCog}  className=" h-4 w-4 text-cyan-500 cursor-pointer hover:scale-105 transition-all ease-in-out"/>
            </div>
        </div>

    </div>
  );
}
