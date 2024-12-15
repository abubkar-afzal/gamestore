import React from "react";
import Image from "next/image";
import HotGame from "./images/cdwm3.jpg"

const Hot = ()=>{
    return(<>
    <div className="main xsm:w-[12rem] xsm:h-[12rem]">
        <div>
        <Image src={HotGame} width={600} height={600} className="xsm:rounded-[10px] xsm:static"/>
        <div className="xsm:flex xsm:flex-row xsm:mt-[-3.9rem] xsm:text-[0.9rem]  xsm:rounded-[10px] xsm:p-4 xsm:absolute bg-[---c9] w-[12rem]">
            <div className="xsm:w-[7rem]"><p className="xsm:text-[10px] xsm:text-[---c4]">Current Price <h2 className="xsm:text-[12px] xsm:text-[---c8] xsm:flex">500.00 Rs<p className="xsm:text-[---c4] xsm:text-[10px] xsm:align-baseline mt-auto xsm:pl-2">  ($1.8)</p></h2></p>
        </div>
        <button className="xsm:w-[5rem] xsm:h-[2rem] xsm:ml-3 xsm:bg-[---c8] xsm:text-[10px] xsm:rounded-[4rem] ">Buy Now &#8919;  </button>
        </div>

        <div className="xsm:flex xsm:flex-row xsm:mt-[-3.9rem] xsm:text-[0.9rem] xsm:rounded-tr-[10px] xsm:rounded-bl-[10px] xsm:p-1 xsm:relative left-[8rem] top-[-8rem] bg-[---c9] w-[4rem]">
            <div className="xsm:w-[4rem]"><p className="xsm:text-[6px] xsm:text-[---c4]">offer ends in <h2 className="xsm:text-[8px] xsm:text-[---c8] xsm:flex">12H: 30M: 40S</h2></p>
        </div>
       
        </div>

        </div>
        <div></div>
    </div>
    </>)
}

export default Hot;