import React from "react";
import as4 from"./images/as4.jpg";
import cdwr2 from"./images/cdwr2.jpg";
import cdwm3 from"./images/cdwm3.jpg";
import Image from "next/image";


const NewGames =()=>{
    return(<>   <div className="main xsm:h-[19rem] xsm:bg-[---c4] xsm:px-2 xsm:pt-1 xsm:my-2 xsm:rounded-[20px] xsm:flex xsm:flex-col ">
            <div className=" xsm:p-2"><span className="xsm:font-bold mr-[11rem]">New Games</span><span className="xsm:text-[---c9] xsm:text-[12px] cursor-pointer">See All &#8919; </span>
            </div>
            <hr className="w-[19rem] place-self-center mx-auto" />
            <div className=" xsm:mt-[1rem] xsm:flex xsm:space-x-4">
                <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer xsm:text-center">
            <Image src={cdwr2} width={150} height={150} className="xsm:rounded-[2rem] xsm:static p-2"/>
                <span className="xsm:p-2 xsm:font-bold xsm:text-[10px] ">Call of Duty World At War 2</span>
                <br />
                <span className="xsm:p-2  xsm:text-[10px]">Action Game</span>
            </div>
            <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer xsm:text-center">
            <Image src={as4} width={150} height={150} className="xsm:rounded-[2rem] xsm:static p-2"/>
                <span className="xsm:p-2 xsm:font-bold xsm:text-[10px]">ASSASSINS CREED 4 Black Flag</span>
                <br />
                <span className="xsm:p-2  xsm:text-[8px]">Horror able pirate game </span>
            </div> <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer xsm:text-center">
            <Image src={cdwm3} width={150} height={150} className="xsm:rounded-[2rem] xsm:static p-2"/>
                <span className="xsm:p-2 xsm:font-bold xsm:text-[10px]">Call of Duty Wodern WarFare 3</span>
                <br />
                <span className="xsm:p-2  xsm:text-[10px]">Game of guns</span>
            </div>
            </div>
               </div>
        </>)
}
export default NewGames;