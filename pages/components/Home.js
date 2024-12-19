import React from "react";
import Hot from "./home/hot";
import Finance from "./home/Finace_analysis";
import Featured from "./home/Featured_creators";

const HomePage = ()=>{
    return(<>
    <Hot/>
    <Finance/>
    <Featured/>
    </>)
}

export default HomePage;