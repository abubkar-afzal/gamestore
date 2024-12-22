import React from "react";
import Image from "next/image";
import logo from "./home/images/my_logo_transparent_black.png";
const Footer = () => {
  return (
    <>
      <div className="xsm:h-[80vh] xsm:w-[100vw] mt-[10px] xsm:content-center ml-2">
        <div className="xsm:flex xsm:space-x-1 xsm:h-[40px] xsm:mb-4 ">
          <Image src={logo} width={40} height={40} />
          <p className="xsm:text-[1rem] xsm:pt-4 ">AR Games</p>
        </div>
        <div>
          <div className="my-2 space-y-2 ml-2">
            <span className="font-bold">Category</span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              Action
            </span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              Shooting
            </span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              Historical
            </span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              Racing
            </span><br/>
          </div>
        </div>
        <div>
          <div className="my-2 space-y-2 ml-2">
            <span className="font-bold">About</span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              Blogs
            </span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              Games
            </span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              Technolgy
            </span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              Premium
            </span><br/>
          </div>
        </div>
        <div>
          <div className="my-2 space-y-2 ml-2">
            <span className="font-bold">Contact</span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              +923144077251
            </span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              hafizabubakarafzal@gmail.com
            </span><br/>
            <span className="xsm:hover:underline xsm:text-[---c9] hover:text-black">
              GitHub
            </span><br/>
          </div>
        </div>
      </div>
      <hr  className="h-[2px] bg-black"/>
      <div className="xsm:mb-[10px] ml-2">
        <div className="xsm:flex my-2 space-x-[10px] flex-wrap">
          <p className="xsm:hover:underline xsm:text-[---c9] hover:text-black">Legal</p>
          <p className="xsm:hover:underline xsm:text-[---c9] hover:text-black">Safety&PrivacyCenter</p>
          <p className="xsm:hover:underline xsm:text-[---c9] hover:text-black">PrivacyPolicy</p>
          <p className="xsm:hover:underline xsm:text-[---c9] hover:text-black">Accessibility</p>
          <p className="xsm:hover:underline xsm:text-[---c9] hover:text-black">&copy;2024 ARGames </p>
        </div>
        <button className="border-[2px] border-[---c9] p-[4px] rounded-[2rem]">
          English
        </button>
      </div>
    </>
  );
};

export default Footer;
