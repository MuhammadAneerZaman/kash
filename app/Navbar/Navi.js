import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

 function NaviHead(props) {
   

  return (
    <div className=' cursor-pointer flex items-center text-cyan-400 text-3xl my-9 font-bold space-x-2 hover:border-l-2 border-dotted border-cyan-400 rounded-xl'>
      <FontAwesomeIcon className=' h-10 w-10' icon={props.HIcon} />
      <h3 className=' '>{props.Head}</h3>
    </div>
  )
}


export default function Navi(props) {
  return (
    <div className=' cursor-pointer  flex items-center text-cyan-500   w-44 space-x-2 text-lg my-3 hover:bg-cyan-900 transition duration-300  hover:scale-105'>
       <FontAwesomeIcon className=' h-5 w-5 ' icon={props.Icon} />
      <h3 className=' '>{props.Type}</h3>
    </div>
  )
}

export {Navi,NaviHead};
