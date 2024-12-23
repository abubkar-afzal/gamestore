import React from "react";
import Image from "next/image";
import img from "../home/images/as2.jpg"
import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";

const Design = () => {
  return (
    <>
    <hr className="h-[1px] bg-black"/>
        <div className="xsm:text-[2rem] xsm: m-2 text-center">CART</div>
        <hr className="h-[1px] bg-black mb-4"/>
      <div className="xsm:ml-4 xsm:w-[100vw] xsm:grid xsm:grid-cols-4 ">
        <div>
          <p>Game</p>
        </div>
        <div>
          <p>1 month license</p>
        </div>
        <div>
          <p>Adjust duration</p>
        </div>
        <div>
          <p>Total</p>
        </div>
      </div>
      <hr className="h-[1px] bg-black"/>
      <div className="xsm:ml-4 xsm:mt-3 xsm:w-[100vw] xsm:grid xsm:grid-cols-4 xsm:items-center">
        <div>
          <Image src={img} width={50} height={50}/>
          <p className="text-[2vw]">ASSASSINS Creed 2 brotherhood</p>
        </div>
        <div>
          <p>$5.00</p>
        </div>
        <div className="xsm:flex xsm:space-x-1 xsm:mt-2">
        <FaCirclePlus className="xsm:cursor-pointer"/>
          <p className="-mt-1">1</p>
        <FaCircleMinus className="xsm:cursor-pointer"/>
        </div>
        <div>
          <p >$5.00</p>
        </div>
      </div>
    </>
  );
};
export default Design;
