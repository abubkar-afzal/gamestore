import React from "react";
import as4 from "./images/as4.jpg";
import cdwr2 from "./images/cdwr2.jpg";
import cdwm3 from "./images/cdwm3.jpg";
import as1 from "./images/as1.jpg";
import cd2 from "./images/cd2.jpg";
import cd1 from "./images/cd1.jpg";
import Image from "next/image";

const AllGames = () => {
  return (
    <>
      {" "}
      <div className="main xsm:h-[19rem] xsm:bg-[---c4] xsm:pl-2 xsm:pt-1 xsm:my-2 xsm:rounded-[20px] xsm:flex xsm:flex-col  ">
        <div className=" xsm:p-2">
          <span className="xsm:font-bold mr-[12rem]">All Games</span>
          <span className="xsm:text-[---c9] xsm:text-[12px] cursor-pointer">
            See All &#8919;{" "}
          </span>
        </div>
        <hr className="w-[19rem] place-self-center mx-auto" />
        <div className=" xsm:mt-[1rem] xsm:flex xsm:flex-wrap xsm:space-x-[1.5rem] xsm:space-y-[1rem] xsm:overflow-y-scroll xsm:h-[15rem]">
            <div></div>
          <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer xsm:text-center">
            <Image
              src={cdwr2}
              width={150}
              height={150}
              className="xsm:rounded-[2rem] xsm:static p-2"
            />
            <span className="xsm:p-2 xsm:font-bold xsm:text-[10px] ">
              Call of Duty World At War 2
            </span>
            <br />
            <span className="xsm:p-2  xsm:text-[10px]">Action Game</span>
          </div>
          <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer xsm:text-center">
            <Image
              src={as4}
              width={150}
              height={150}
              className="xsm:rounded-[2rem] xsm:static p-2"
            />
            <span className="xsm:p-2 xsm:font-bold xsm:text-[8px]">
              ASSASSINS CREED 4 Black Flag
            </span>
            <br />
            <span className="xsm:p-2  xsm:text-[8px]">
              Horror able pirate game{" "}
            </span>
          </div>{" "}
          <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer xsm:text-center">
            <Image
              src={cdwm3}
              width={150}
              height={150}
              className="xsm:rounded-[2rem] xsm:static p-2"
            />
            <span className="xsm:p-2 xsm:font-bold xsm:text-[9px]">
              Call of Duty Wodern WarFare 3
            </span>
            <br />
            <span className="xsm:p-2  xsm:text-[10px]">Game of guns</span>
          </div>
          <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer xsm:text-center">
            <Image
              src={as1}
              width={150}
              height={150}
              className="xsm:rounded-[2rem] xsm:static p-2"
            />
            <span className="xsm:p-2 xsm:font-bold xsm:text-[10px]">
              ASSASSINS CREED 1
            </span>
            <br />
            <span className="xsm:p-2  xsm:text-[10px]">Awesome game ❣</span>
          </div>
          <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer xsm:text-center">
            <Image
              src={cd1}
              width={150}
              height={150}
              className="xsm:rounded-[2rem] xsm:static p-2"
            />
            <span className="xsm:p-2 xsm:font-bold xsm:text-[10px]">
              Call of Duty 1
            </span>
            <br />
            <span className="xsm:p-2  xsm:text-[10px]">
              Horror able game!!{" "}
            </span>
          </div>{" "}
          <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer xsm:text-center">
            <Image
              src={cd2}
              width={150}
              height={150}
              className="xsm:rounded-[2rem] xsm:static p-2"
            />
            <span className="xsm:p-2 xsm:font-bold xsm:text-[10px]">
              Call of Duty 2
            </span>
            <br />
            <span className="xsm:p-2  xsm:text-[10px]">Game of action</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllGames;
