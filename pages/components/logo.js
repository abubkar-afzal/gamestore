import React from "react";
import Image from "next/image";
import logo from "../../public/my_logo_transparent_black.png";

const Logo =()=>{
    return(
        <>
        <Image src={logo} width={50} height={50} alt="logo"/>
        </>
    )
}
export default Logo;