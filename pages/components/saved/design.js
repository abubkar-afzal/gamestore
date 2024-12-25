import React from "react";
import Image from "next/image";
import img from "../home/images/as2.jpg";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { TbCopyPlusFilled } from "react-icons/tb";

const Design = () => {
  return (
    <>
      <div>
        <div className="xsm:flex xsm:flex-row">
          <div className="xsm:m-3 xsm:w-[400px] xsm:text-center  ">
            <p className="xsm:text-[2rem]  xsm:font-bold ">SAVED GAMES</p>
          </div>

        
        </div>
        <hr className="h-[1.5px] m-2 bg-[---c1]" />

        <div className="xsm:flex xsm:flex-row">
          <div className="xsm:m-3 xsm:w-[100px] xsm:flex xsm:flex-wrap xsm:flex-cols">
            <Image
              src={img}
              width={300}
              height={300}
              className="xsm:w-[100px] h-[100px]"
            />
            
          </div>
          <div  className="xsm:w-[300px] xsm:flex xsm:flex-col   text-center xsm:place-content-center  "><div> <p className="xsm:text-[13px] xsm:font-semibold">ASSASSINS CREED 2 Brotherhood</p> <p className="xsm:text-[12px] xsm:font-bold">Now in just $5.00</p></div>
          <div className=" xsm:flex space-x-2 xsm:place-content-center xsm:items-center my-3 ">
            <button className=" xsm:hover:bg-[---c7] xsm:active:bg-[---c6] xsm:items-center xsm:text-center xsm:flex xsm:text-[10px] xsm:h-[2rem] xsm:bg-[---c3]  xsm:rounded-[2rem] p-1 ">
              <span className="text-[---c4] pl-3">Add to cart</span>
              <TiShoppingCart className="text-[---c4] w-[0.8rem] h-[1rem] my-2" />
            </button>
            <button className=" xsm:hover:bg-[---c7] xsm:active:bg-[---c6] xsm:items-center xsm:text-center xsm:flex xsm:text-[10px] xsm:h-[2rem] xsm:bg-[---c3]  xsm:rounded-[2rem] p-1 ">
              <span className="text-[---c4] pl-3">Buy Now</span>
              <BiSolidPurchaseTag className="text-[---c4] w-[0.8rem] h-[1rem] my-2" />
            </button>
            <button className=" xsm:hover:bg-[---c7] xsm:active:bg-[---c6] xsm:items-center xsm:text-center xsm:flex xsm:text-[10px] xsm:h-[2rem] xsm:bg-[---c3]  xsm:rounded-[2rem] p-1 ">
              <span className="text-[---c4] pl-3">Remove Saved</span>
              <TbCopyPlusFilled className="text-[---c4] w-[0.8rem] h-[1rem] my-2" />
            </button>
          </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Design;
