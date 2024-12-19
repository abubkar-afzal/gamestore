import React from "react";
import as1 from"./images/as1.jpg";
import cd2 from"./images/cd2.jpg";
import cd1 from"./images/cd1.jpg";
import Image from "next/image";


const Featured =()=>{
    return(<>   <div className="main xsm:h-[19rem] xsm:bg-[---c4] xsm:pl-2 xsm:pt-1 xsm:pb- xsm:rounded-[20px] xsm:flex xsm:flex-col ">
            <div className=" xsm:p-2"><span className="xsm:font-bold mr-[12rem]">Old Games</span><span className="xsm:text-[---c9] xsm:text-[12px] cursor-pointer">See All &#8919; </span>
            </div>
            <hr className="w-[19rem] place-self-center mx-auto" />
            <div className=" xsm:mt-[1rem] xsm:flex xsm:space-x-4">
                <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer">
            <Image src={as1} width={150} height={150} className="xsm:rounded-[2rem] xsm:static p-2"/>
                <span className="xsm:p-2 xsm:font-bold xsm:text-[10px]">ASSASSINS CREED 1</span>
                <br />
                <span className="xsm:p-2  xsm:text-[10px]">Awesome game ❣</span>
            </div>
            <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer">
            <Image src={cd1} width={150} height={150} className="xsm:rounded-[2rem] xsm:static p-2"/>
                <span className="xsm:p-2 xsm:font-bold xsm:text-[10px]">Call of Duty 1</span>
                <br />
                <span className="xsm:p-2  xsm:text-[10px]">Horror able game!! </span>
            </div> <div className="h-[200px] w-[150px] xsm:shadow-md xsm:shadow-black xsm:cursor-pointer">
            <Image src={cd2} width={150} height={150} className="xsm:rounded-[2rem] xsm:static p-2"/>
                <span className="xsm:p-2 xsm:font-bold xsm:text-[10px]">Call of Duty 2</span>
                <br />
                <span className="xsm:p-2  xsm:text-[10px]">Game of action</span>
            </div>
            </div>
               </div>
        </>)
}
export default Featured;