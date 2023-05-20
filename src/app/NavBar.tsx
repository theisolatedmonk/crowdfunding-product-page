import React from 'react'
import Image from "next/image";
import logo from "@/images/logo.svg";


export default function NavBar() {
  return (
    <div className="flex justify-between   bg-black w-[80%] p-4">
          <Image src={logo} alt={""}></Image>
          <div className="flex gap-2">
            <p>About</p>
            <p>Discover</p>
            <p>GetStarted</p>
          </div>
        </div>
  )
}