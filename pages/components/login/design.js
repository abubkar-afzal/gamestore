import React from "react";
import Image from "next/image";
import img from "../home/images/as2.jpg"
import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";

const Design = () => {
  return (
    <>
    <div className="place-items-center items-center align-middle">
    <div className=" xsm:w-[70vw] rounded-[2rem] p-[20px]  xsm:bg-[---c4] xsm:place-content-start xsm:items-center place-items-center text-center align-middle">
      <div>
      <hr className="h-[1.5px] m-2 bg-[---c1]" />
        
        <h1 className=" font-bold xsm:rounded-[2rem] w-[6rem] p-2 pb-4">LOGIN</h1>
        <hr className="h-[1.5px] m-2 bg-[---c1] mb-[20px]" />
      
      </div>
      <div className=" xsm:flex xsm:flex-col  text-left xsm:space-y-4">
        <label htmlFor="email" className=" font-bold xsm:rounded-[2rem] w-[6rem]">Email:</label>
        <input type="text"  htmlFor="email" placeholder="Enter your email" className="xsm:w-[10rem] xsm:h-[2.5rem] xsm:p-3 xsm:rounded-[2rem] border-[1px] border-[---c17]" />
        
        <label htmlFor="password" className=" font-bold xsm:rounded-[2rem] w-[6rem]">Password:</label>
        <input type="password"  htmlFor="password" placeholder="Enter your password" className="xsm:w-[10rem] xsm:h-[2.5rem] xsm:p-3 xsm:rounded-[2rem] border-[1px] border-[---c17]"/>

        <a><p className="xsm:text-[10px] xsm:text-[---c3] cursor-pointer xsm:hover:underline xsm:relative xsm:left-[5rem]">Forgot Password ?</p></a>

        <button className="bg-[---c3] text-[---c4] p-2 mb-4 font-bold xsm:rounded-[2rem] w-[10rem] hover:bg-[---c6] active:bg-[---c7]">Login </button>
        <button className="bg-[---c3] text-[---c4] p-2 mb-4 font-bold xsm:rounded-[2rem] w-[10rem] hover:bg-[---c6] active:bg-[---c7]">Sign Up </button>

      </div>

    </div>
    
    </div>
    </>
  );
};
export default Design;
