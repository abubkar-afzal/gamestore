import React from "react";
import Hot from "./home/hot";
import Finance from "./home/Finace_analysis";
import OldGames from "./home/Old _games";
import NewGames from "./home/New_games";
import AllGames from "./home/All_Games";

const HomePage = ()=>{
    return(<>
        <Hot/>
        <Finance/>
        <NewGames/>
        <OldGames/>
        <AllGames/>
    </>)
}

export default HomePage;