"use client";

import Image from "next/image";
import Google from '../public/Google-Symbol.png'
import Logo from '../public/Firefly I want logo for my todo app . A boy listing with pen on diary . Logo should be attractive . .jpg'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import HomePage from "./HomePage/HomePage";


export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession();
if(status === "authenticated"){
  return (
    <div>
      <HomePage />
    </div>
  )
}
       
    return (
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className=" flex flex-col items-center">
          <Image src={Logo} height={100} width={100} alt="Todo_Logo" className=" rounded-full h-80 w-96" />
          <div onClick={() => signIn('google')} className=" px-2 py-3 flex items-center cursor-pointer hover:scale-105 transition duration-200 hover:bg-slate-800">
            <Image src={Google} height={50} width={100} alt="Google Image" />
            <span className=" text-cyan-300 text-2xl shadow-xl md:text-3xl">Continue With Google</span>
        
          </div>
          {status === "loading" && (
    <div className=" loading loading-ball text-info"></div>
  )} 
        </div>
      </div>
    )
}
