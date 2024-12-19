import React, { useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { TbCopyPlusFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { IoSettings } from "react-icons/io5";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { IoWalletSharp } from "react-icons/io5";
import Logo from "./logo";

const Navbar = () => {
  const [show, hide] = useState(false);
  const onepress = () => {
    hide(!show);
  };

  return (
    <>
      <div className="xsm:flex xsm:sticky xsm:z-10">
        <div className="py-2 pl-2 grid grid-cols-2 ">
          <div
            onClick={onepress}
            className="xsm:h-[4em] xsm:w-[3rem] xsm:rounded-[2rem] xsm:cursor-pointer  "
          >
            <Logo />
            <span className="xsm:text-[15px] xsm:mt-[-7px]">Games</span>
          </div>
          <div
            className={
              show
                ? "xsm:bg-[---c10] xsm:grid xsm:grid-cols-1 xsm:left-0  xsm:bottom-0  xsm:grid-rows-8 xsm:h-[90vh] xsm:w-auto  xsm:fixed xsm:duration-[2s] "
                : "xsm:bg-[---c10] xsm:grid xsm:grid-cols-1 xsm:left-[-7rem]  xsm:bottom-0  xsm:grid-rows-8 xsm:h-[90vh] xsm:w-auto  xsm:fixed xsm:duration-[2s]"
            }
          >
            <div></div>
            <div></div>
            <div className=" xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4]               xsm:rounded-[2rem]  xsm:flex xsm:space-x-1">
              <MdHomeFilled className="w-[2rem] h-[1.5rem] text-[---c1] xsm:active:text-[---c4] xsm:hover:text-[---c4]" />
              <p>Home</p>
            </div>

            <div className=" xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:rounded-[2rem]  xsm:flex xsm:space-x-1">
              <TbCopyPlusFilled className="w-[2rem] h-[1.5rem] text-[---c1] xsm:active:text-[---c4] xsm:hover:text-[---c4]" />
              <p>Saved</p>
            </div>

            <div className=" xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:rounded-[2rem]  xsm:flex xsm:space-x-1">
              <FaHeart className="w-[2rem] h-[1.5rem] text-[---c1] xsm:active:text-[---c4] xsm:hover:text-[---c4]" />
              <p>Liked</p>
            </div>

            <div className=" xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:rounded-[2rem]  xsm:flex xsm:space-x-1">
              <TiShoppingCart className="w-[2rem] h-[1.5rem] text-[---c1] xsm:active:text-[---c4] xsm:hover:text-[---c4]" />
              <p>Store</p>
            </div>

            <div className=" xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:rounded-[2rem]  xsm:flex xsm:space-x-1">
              <IoSettings className="w-[2rem] h-[1.5rem] text-[---c1] xsm:active:text-[---c4] xsm:hover:text-[---c4]" />
              <p>Setting</p>
            </div>

            <div></div>
            <div></div>
            <div className=" xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:rounded-[2rem]  xsm:flex xsm:space-x-1">
              <BsFillPlusCircleFill className="w-[2rem] xsm:active:bg-[---c6] h-[1.5rem] text-[---c2] xsm:active:text-[---c4] xsm:hover:text-[---c4]" />
              <p>Login</p>
            </div>

            <div className=" xsm:cursor-pointer  xsm:h-[40px] w-[7rem] xsm:items-center   xsm:w-[30px] xsm:rounded-[2rem] my-2 xsm:flex ">
              <Logo />
              <span className="ml-[0.4rem] mt-[0.5rem]">Abubakar </span>
            </div>
          </div>
        </div>

        <div className="xsm:place-content-end xsm:flex xsm:w-[100%] xsm:m-2 xsm:space-x-2 xsm: xsm:left-">
          <div className="grid content-center items-center grid-cols-3 w-[8rem] h-[2rem] rounded-[2rem] border-[1.5px] border-black">
            <CiSearch className="xsm:cursor-pointer xsm:w-[2rem] xsm:h-[1.5rem] xsm:place-self-start " />
            <input
              type="text"
              className=" xsm:w-[3rem] xsm:h-[1rem] xsm:place-self-between"
              name="search"
              id="search"
              placeholder="search"
            />
            <TbAdjustmentsHorizontal className="xsm:cursor-pointer xsm:w-[2rem] xsm:h-[1.5rem] xsm:place-self-end" />
          </div>
          <div>
            <button className=" xsm:hover:bg-[---c7] xsm:active:bg-[---c6] xsm:items-center xsm:flex xsm:text-[10px] xsm:bg-[---c3] xsm:w-[8rem] xsm:rounded-[2rem]  ">
              <IoWalletSharp className="text-[---c4] w-[1.8rem] h-[1rem] m-2" />
              <span className="text-[---c4]">Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
