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
import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar = () => {
  const [show, hide] = useState(false);
  const onepress = () => {
    hide(!show);
  };
  let home;
  let saved;
  let liked;
  let cart;
  let setting;
  let login;


  const router = useRouter();
  const currentUrl = router.asPath;
  if(currentUrl==="/"){
    home="xsm:text-[---c4]  xsm:bg-[---c3]"
  }else if(currentUrl==="/components/Saved"){
    saved="xsm:text-[---c4] xsm:bg-[---c3]"
  }else if(currentUrl==="/components/Liked"){
    liked="xsm:text-[---c4] xsm:bg-[---c3]"
  }else if(currentUrl==="/components/Cart"){
    cart="xsm:text-[---c4] xsm:bg-[---c3]"
  }else if(currentUrl==="/components/Setting"){
    setting="xsm:text-[---c4] xsm:bg-[---c3]"
  }else if(currentUrl==="/components/Login"){
    login="xsm:text-[---c4] xsm:bg-[---c3]"
  }


  return (
    <>
      <div className="xsm:flex xsm:fixed  xsm:z-10">
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
                ? "NAVBAR xsm:bg-[---c10] xsm:grid xsm:grid-cols-1 xsm:left-0  xsm:bottom-0  xsm:grid-rows-8 xsm:h-[92vh] xsm:w-auto  xsm:fixed xsm:duration-[2s] "
              : "xsm:bg-[---c10] xsm:grid xsm:grid-cols-1 xsm:left-[-7rem]  xsm:bottom-0  xsm:grid-rows-8 xsm:h-[92vh] xsm:w-auto  xsm:fixed xsm:duration-[2s]"
            }
          >
            <div></div>
            <div></div>
            
            <Link href="http://localhost:3000"><div className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${home}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}>
              <MdHomeFilled className={`w-[2rem] h-[1.5rem] text-[---c1]  ${home} `}/>
              <p>Home</p>
            </div></Link>

            <Link href="http://localhost:3000/components/Saved"><div className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${saved}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}>
              <TbCopyPlusFilled className={`w-[2rem] h-[1.5rem] text-[---c1]  ${saved}`}/>
              <p>Saved</p>
            </div></Link>

            <Link href="http://localhost:3000/components/Liked"><div className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${liked}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}>
              <FaHeart className={`w-[2rem] h-[1.5rem] text-[---c1]  ${liked}`} />
              <p>Liked</p>
            </div></Link>

            <Link href="http://localhost:3000/components/Cart"> <div className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${cart}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}>
              <TiShoppingCart className={`w-[2rem] h-[1.5rem] text-[---c1]  ${cart}`} />
              <p>Cart</p>
            </div></Link>

            <Link href="http://localhost:3000/components/Setting"><div className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${setting}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}>
              <IoSettings className={`w-[2rem] h-[1.5rem] text-[---c1]  ${setting}`} />
              <p>Setting</p>
            </div></Link>

            <div></div>
            <div></div>
            <Link href="http://localhost:3000/components/Login"><div className={` xsm:cursor-pointer xsm:hover:bg-[---c3] xsm:active:bg-[---c6] xsm:h-[40px] w-[7rem] xsm:items-center xsm:hover:text-[---c4] xsm:active:text-[---c4] xsm:font-extrabold  ${login}             xsm:rounded-[2rem]  xsm:flex xsm:space-x-1`}>
              <BsFillPlusCircleFill className={`w-[2rem] xsm:active:bg-[---c6] h-[1.5rem] text-[---c2] xsm:active:text-[---c4] xsm:hover:text-[---c4] ${login}`} />
              <p>Login</p>
            </div></Link>

            <div className=" xsm:cursor-pointer  xsm:h-[40px] w-[7rem] xsm:items-center   xsm:w-[30px] xsm:rounded-[2rem] my-2 xsm:flex ">
              <Logo />
              <span className="ml-[0.4rem] mt-[0.5rem] font-extrabold">Abubakar </span>
            </div>
          </div>
        </div>

        <div className="xsm:place-content-end xsm:flex xsm:w-[100%] xsm:m-2 xsm:space-x-2 xsm: xsm:left-">
          <div className="grid content-center items-center grid-cols-3 w-[8rem] h-[2rem] rounded-[2rem] border-[1.5px] border-black">
            <CiSearch className="xsm:cursor-pointer xsm:w-[2rem] xsm:h-[1.5rem] xsm:place-self-start " />
            <input
              type="text"
              className=" xsm:w-[3rem] xsm:h-[1rem] xsm:place-self-between bg-transparent"
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
      <div className="h-[5rem] w-[100%]"></div>
    </>
  );
};
export default Navbar;
