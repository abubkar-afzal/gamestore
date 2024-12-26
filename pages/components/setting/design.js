import React, { useRef, useState } from "react";


const Design = () => {
     const [dark,light] = useState(false);
    const ref = useRef();
    const toggle =()=>{

      if(ref){
        light(!dark);
      } 
    }
  return (

    <>

      <div>
   
        <div className="xsm:flex xsm:flex-row">
          <div className="xsm:m-3 xsm:w-[400px] xsm:text-center  ">
            <p className="xsm:text-[2rem]  xsm:font-bold ">STORE SETTING</p>
          </div>
        </div>
        <hr className="h-[1.5px] m-2 bg-[---c1]" />

        <div className="xsm:flex xsm:flex-col items-center">
          <div className="xsm:m-3 xsm:flex xsm:flex-wrap xsm:flex-cols place-content-center">
            <div>
              <p className="xsm:text-[20px] xsm:font-bold m-2">For <a  className={`${dark? "hidden":"inline"}`}>Dark Mode</a><a className={`${dark? "inilne":"hidden"}`}>Light Mode</a></p>
              <div className="xsm:bg-[---c17] xsm:rounded-[1rem] xsm:w-[9rem] xsm:h-[2rem] xsm:place-content-center ">
                <div ref={ref} onClick={toggle} className={`Dark_LIGHT xsm:relative ${dark ? "xsm:left-[7rem]":"xsm:left-0"} xsm:duration-[2s] xsm:bg-[---c4] xsm:rounded-[3rem] xsm:w-[1.5rem] xsm:h-[1.5rem] xsm:mx-1 xsm:cursor-pointer`}>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="xsm:w-[300px] mt-[1rem] xsm:flex xsm:flex-col   text-center xsm:place-content-center xsm:text-center  ">
            <hr className="h-[1px] bg-black" />

            <p className="xsm:text-[1rem] font-bold">
              To Add Any Feature Contact <a className="text-[---c6] active:underline">+923144077251</a>
            </p>
            <hr className="h-[1px] bg-black" />

        
          </div>
        </div>
      </div>
    </>
  );
};
export default Design;
