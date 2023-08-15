import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Main1 from "./Main1";
import Main2 from "./Main2";

export default function Main() {
  return (
    <div className=" flex mx-2 my-2 md:w-[63rem] md:flex-row flex-col w-60 space-x-2 ">
      <div className=" md:w-[792px] w-80  h-[818px] bg-cyan-950 flex md:flex-row flex-col space-y-2 items-center space-x-3 px-2">
        <div className=" md:w-[369px]  w-80 h-[773px] border-2 border-cyan-950 rounded-2xl bg-cyan-900  overflow-y-auto ">
          <div className=" ml-3 my-3">
            <Main1 />
          </div>
        </div>
        <div className=" md:w-[366px] w-80 h-[773px] border-2 border-cyan-950 rounded-2xl bg-cyan-900 ">
        <Main2 />
        </div>
      </div>
      <div className=" w-[327px] h-[818px] bg-cyan-950 ">
       <div>
        <div className=" my-11 h-96 w-full flex justify-center items-center flex-col space-y-2 bg-cyan-900 rounded-xl">
        <h3 className=" text-xl font-medium text-cyan-400">Quote</h3>
          <div className="w-[250px] h-[247px] px-2 ">
            <p className="  font-bold float-right text-cyan-400">
              ...
            </p>
            <p className=" text-cyan-500 my-4">
              We have three roles pn earth: to learn, to love, to eat. When we stop learning, we start stagnate and died. When we stop loving, we lose our sence of purpose and become self-centered. When we limit our things, we deny the benefits of our talent
            </p>
            <p className=" justify-center text-cyan-400">Jim Cathcart, The acorn Principle</p>
          </div>

        </div>
       </div>
      </div>
    </div>
  );
}
