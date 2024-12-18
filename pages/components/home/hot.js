import React from "react";
import Image from "next/image";
import HotGame from "./images/cdwm3.jpg"

const Hot = ()=>{
    return(<>
    <div className="main xsm:h-[10rem] xsm:bg-[---c4] xsm:pl-2 xsm:pt-1 xsm:pb- xsm:rounded-[20px] xsm:flex ">
        <div className="">
        <Image src={HotGame} width={150} height={150} className="xsm:rounded-[10px] xsm:static"/>
        <div className="xsm:flex xsm:flex-row xsm:mt-[-3rem] xsm:rounded-[10px] xsm:p-3 xsm:pr-2 xsm:absolute xsm:bg-[---c9]  xsm:h-[3rem]">
            <div className=""><p className="xsm:text-[8px] xsm:text-[---c4]">Current Price <h2 className="xsm:text-[10px] xsm:text-[---c8] xsm:flex">500.00 Rs<p className="xsm:text-[---c4] xsm:text-[8px] xsm:align-baseline mt-auto xsm:pl-2">  ($1.8)</p></h2></p>
        </div>
        <button className="xsm:px-1 xsm:ml-3 xsm:bg-[---c8] xsm:text-[8px] xsm:rounded-[4rem] ">Buy Now &#8919;  </button>
        </div>

        <div className="xsm:flex xsm:flex-row xsm:mt-[rem] xsm:text-[0.9rem] xsm:rounded-tr-[10px] xsm:rounded-bl-[10px] xsm:p-1 xsm:relative left-[86px] top-[-150px] bg-[---c9] w-[4rem]">
            <div className="xsm:w-[4rem]">
                 <p className="xsm:text-[6px] xsm:text-[---c4]">offer ends in <h2 className="xsm:text-[8px] xsm:text-[---c8] xsm:flex">12H: 30M: 40S</h2>
             </p>
        </div>
       
        </div>
        </div>
        <div>
            <div className="xsm:bg-[---c10] xsm:flex  xsm:m-2 xsm:ml-[22px]  xsm:text-[8px] xsm:rounded-[2rem] xsm:w-[10rem] xsm:h-[22px] xsm:pt-[1px]">
                <div className="xsm:rounded-[2rem] xsm:m-[-3px] hover:bg-[---c4] active:bg-[---c4]  xsm:px-4 xsm:py-1  h-[100%] hover:xsm:shadow-sm hover:xsm:shadow-black  active:xsm:shadow-sm active:xsm:shadow-black cursor-pointer">Details</div>
                <div className="xsm:rounded-[2rem] xsm:m-[-3px] hover:bg-[---c4] active:bg-[---c4]  xsm:px-4 xsm:py-1  h-[100%] hover:xsm:shadow-sm hover:xsm:shadow-black  active:xsm:shadow-sm active:xsm:shadow-black cursor-pointer">Members</div>
                <div className="xsm:rounded-[2rem] xsm:m-[-3px] hover:bg-[---c4] active:bg-[---c4]  xsm:px-4 xsm:py-1  h-[100%] hover:xsm:shadow-sm hover:xsm:shadow-black  active:xsm:shadow-sm active:xsm:shadow-black cursor-pointer">Price</div>
            </div >
                <div className="xsm:w-[13rem] xsm:px-3">
                <h1 className="xsm:text-[15px] xsm:font-bold">Call of Duty Modern Warfare 3 </h1>
                <p className="xsm:text-[8px]">This game is included in call of duty modern warfare series. This is the top rated game of this series.</p>
                <hr />
                
                </div>
                <div className="flex xsm:m-2 xsm:space-x-1">
                    <div className="xsm:rounded-[2rem] xsm:text-[9px] bg-black w-[17px] xsm:text-white xsm:text-center xsm:place-content-center">AR</div>
                    <div>
                    <p className="xsm:text-[7px]">Editor</p>
                    <p className="xsm:text-[8px] xsm:font-bold">Abubakar</p>
                    </div>
                    <div>
                    <button className="xsm:text-[8px] xsm:font-bold xsm:p-2 xsm:border-[1px] xsm:rounded-[2rem] xsm:absolute xsm:right-10 xsm:mt-[-4px] ">Other Works &#8919;</button></div>
                </div>

            </div>
    </div>
    </>)
}

export default Hot;