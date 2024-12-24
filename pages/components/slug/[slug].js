import React from "react";
import Image from "next/image";
import img from "../home/images/as2.jpg";
import { useRouter } from "next/router";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa6";
import { TbCopyPlusFilled } from "react-icons/tb";
import { BiSolidPurchaseTag } from "react-icons/bi";

const Design = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className=" xsm:items-center xsm:space-y-3 xsm:flex xsm:flex-col xsm:mt-3">
        <div className="xsm:w-[300px]  xsm:text-center">
          <Image
            src={img}
            width={300}
            height={300}
            className="xsm:w-[300px] h-[300px] "
          />
          <p className="text-[1.4rem] xsm:mt-2 xsm:font-bold">
            ASSASSINS Creed 2 brotherhood
          </p>
        </div>
        <div className="xsm:w-[300px]  xsm:text-center">
          <p className="text-[1rem] xsm:font-semiboldbold">
            The game's plot is set in a fictional history of real-world events
            and follows the millennia-old struggle between the Assassins, who
            fight to preserve peace and free will, and the Templars, who desire
            peace through control. The framing story is set in the 21st century
            and follows Desmond Miles as he relives the genetic memories of his
            ancestor, Ezio Auditore da Firenze, to uncover the mysteries left
            behind by an ancient race known as the First Civilization in the
            hope of ending the Assassin-Templar conflict.
          </p>
        </div>
        <div className="xsm:w-[300px] xsm:font-extrabold xsm:text-center">
          <h1>Price: $5.00</h1>
          <p>Of one month</p>
        </div>
        <div className=" ">
        <div className="xsm:w-[300px] xsm:flex space-x-2 xsm:place-content-center my-3 ">
          <button className=" xsm:hover:bg-[---c7] xsm:active:bg-[---c6] xsm:items-center xsm:text-center xsm:flex xsm:text-[12px] xsm:bg-[---c3]  xsm:rounded-[2rem] p-1 ">
            <span className="text-[---c4] pl-3">Add to cart</span>
            <TiShoppingCart className="text-[---c4] w-[1.8rem] h-[1rem] my-2" />
          </button>
          <button className=" xsm:hover:bg-[---c7] xsm:active:bg-[---c6] xsm:items-center xsm:text-center xsm:flex xsm:text-[12px] xsm:bg-[---c3]  xsm:rounded-[2rem] p-1 ">
            <span className="text-[---c4] pl-3">Buy Now</span>
            <BiSolidPurchaseTag className="text-[---c4] w-[1.8rem] h-[1rem] my-2" />
          </button>
        </div>
        <div className="xsm:w-[300px] xsm:flex space-x-2 xsm:place-content-center xsm:text-center my-3 ">
          <button className=" xsm:hover:bg-[---c7] xsm:active:bg-[---c6] xsm:items-center xsm:text-center xsm:flex xsm:text-[12px] xsm:bg-[---c3]  xsm:rounded-[2rem] p-1 ">
            <span className="text-[---c4] pl-3">Save</span>
            <TbCopyPlusFilled className="text-[---c4] w-[1.8rem] h-[1rem] my-2" />
          </button>
          <button className=" xsm:hover:bg-[---c7] xsm:active:bg-[---c6] xsm:items-center xsm:text-center xsm:flex xsm:text-[12px] xsm:bg-[---c3]  xsm:rounded-[2rem] p-1 ">
            <span className="text-[---c4] pl-3">Like</span>
            <FaHeart className="text-[---c4] w-[1.8rem] h-[1rem] my-2" />
          </button>
        </div>
        
        </div>
      </div>
    </>
  );
};
export default Design;
