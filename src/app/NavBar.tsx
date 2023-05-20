import React from 'react'
import Image from "next/image";
import logo from "@/images/logo.svg";
import menu from "@/images/icon-hamburger.svg";


export default function NavBar() {
  return (
    <div className="flex justify-between    sm:w-[76%] w-full relative ">
          <Image src={logo} alt={""}></Image>
          <div className=" gap-4 hidden sm:flex">
            <p>About</p>
            <p>Discover</p>
            <p>GetStarted</p>
          </div>
          <Image src={menu} className=' flex sm:hidden ' alt={""}></Image>
        </div>
  )
}