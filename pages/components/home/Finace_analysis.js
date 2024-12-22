import React, { useState } from "react";
import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
const Finance = () => {
  const [dis1, setDis1] = useState(false);
  const [dis2, setDis2] = useState(false);
  const [dis3, setDis3] = useState(false);
  const [dis4, setDis4] = useState(false);

  return (
    <>
      <div className="main xsm:h-[15rem] xsm:bg-[---c11] xsm:pl-2 xsm:pt-1 xsm:pb- xsm:rounded-[20px] xsm:flex xsm:flex-col xsm:m-2  ">
        <div className="xsm:flex xsm:m-2 xsm:px-3 xsm:border-b-1 xsm:border-[---c5] h-[2rem] w-[23rem]">
          <span className="xsm:text-[---c12]">Your Finance</span>
          <BiDotsHorizontalRounded className="xsm:text-[---c4] xsm:text-[1rem]  xsm:absolute xsm:right-8 xsm:mt-2 " />
        </div>
        <hr className="w-[19rem] place-self-center mx-auto" />
        <div className="xsm:flex">
          <div className="xsm:my-6 xsm:space-y-6">
            <div
              onMouseLeave={() => {
                setDis1(false);
              }}
              className="xsm:flex xsm:flex-col xsm:text-[10px] xsm:w-[2rem]"
            >
              <button
                onMouseEnter={() => {
                  setDis1(true);
                }}
                className="Money1 xsm:flex xsm:text-[---c4] cursor-pointer xsm:bg-[---c13] xsm:rounded-[2rem] xsm:px-2 xsm:w-[3rem]"
              >
                <FaCaretDown />
                ETH
              </button>
              <div
                className={`chang1 xsm:rounded-r-md xsm:rounded-bl-md text-[---c4] xsm:ml-[2.7rem] xsm:flex-col xsm:flex xsm:text-[6px] xsm:text-center xsm:bg-[---c13]  xsm:w-[3rem] xsm:absolute xsm:mt-[0.8rem] xsm:py-2  ${
                  dis1 ? "xsm:block" : "xsm:hidden"
                } `}
              >
                <a className="xsm:hover:bg-[---c11]" href="">
                  USDT
                </a>
                <a className="xsm:hover:bg-[---c11]" href="">
                  PI
                </a>
                <a className="xsm:hover:bg-[---c11]" href="">
                  Ruppes
                </a>
              </div>
            </div>
            <div
              onMouseLeave={() => {
                setDis2(false);
              }}
              className="xsm:flex xsm:flex-col xsm:text-[10px] xsm:w-[2rem]"
            >
              <button
                onMouseEnter={() => {
                  setDis2(true);
                }}
                className="Money1 xsm:flex xsm:text-[---c4] cursor-pointer xsm:bg-[---c14] xsm:rounded-[2rem] xsm:px-2 xsm:w-[3rem]"
              >
                <FaCaretDown />
                ADA
              </button>
              <div
                className={`chang1 xsm:rounded-r-md xsm:rounded-bl-md text-[---c4] xsm:ml-[2.7rem] xsm:flex-col xsm:flex xsm:text-[6px] xsm:text-center xsm:bg-[---c14]  xsm:w-[3rem] xsm:absolute xsm:mt-[0.8rem] xsm:py-2  ${
                  dis2 ? "xsm:block" : "xsm:hidden"
                } `}
              >
                <a className="xsm:hover:bg-[---c11]" href="">
                  USDT
                </a>
                <a className="xsm:hover:bg-[---c11]" href="">
                  PI
                </a>
                <a className="xsm:hover:bg-[---c11]" href="">
                  Ruppes
                </a>
              </div>
            </div>
            <div
              onMouseLeave={() => {
                setDis3(false);
              }}
              className="xsm:flex xsm:flex-col xsm:text-[10px] xsm:w-[2rem]"
            >
              <button
                onMouseEnter={() => {
                  setDis3(true);
                }}
                className="Money1 xsm:flex xsm:text-[---c4] cursor-pointer xsm:bg-[---c15] xsm:rounded-[2rem] xsm:px-2 xsm:w-[3rem]"
              >
                <FaCaretDown />
                BTC
              </button>
              <div
                className={`chang1 xsm:rounded-r-md xsm:rounded-bl-md text-[---c4] xsm:ml-[2.7rem] xsm:flex-col xsm:flex xsm:text-[6px] xsm:text-center xsm:bg-[---c15]  xsm:w-[3rem]  xsm:absolute xsm:mt-[0.8rem] xsm:py-2  ${
                  dis3 ? "xsm:block" : "xsm:hidden"
                } `}
              >
                <a className="xsm:hover:bg-[---c11]" href="">
                  USDT
                </a>
                <a className="xsm:hover:bg-[---c11]" href="">
                  PI
                </a>
                <a className="xsm:hover:bg-[---c11]" href="">
                  Ruppes
                </a>
              </div>
            </div>
            <div
              onMouseLeave={() => {
                setDis4(false);
              }}
              className="xsm:flex xsm:flex-col xsm:text-[10px] xsm:w-[2rem]"
            >
              <button
                onMouseEnter={() => {
                  setDis4(true);
                }}
                className="Money1 xsm:flex xsm:text-[---c4] cursor-pointer xsm:bg-[---c16] xsm:rounded-[2rem] xsm:px-2 xsm:w-[3rem]"
              >
                + Add
              </button>
            </div>
          </div>
          <div>
            <div className="xsm:text-[---c4] xsm:w-[15rem] xsm:bg-[---c9] xsm:ml-[2.5rem] xsm:right-12 xsm:mt-3 xsm:h-[8rem] xsm:text-center xsm:rounded-lg xsm:place-content-center">Total Balance : $100</div>
            <button className="xsm:text-[---c4] xsm:w-[15rem] xsm:bg-[---c3] xsm:rounded-[2rem] xsm:mt-2 xsm:absolute xsm:right-12 xsm:h-[2rem]">Top Up Balance</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
