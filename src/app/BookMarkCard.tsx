import React from 'react'
import Image from "next/image";
import logoMastercraft from "@/images/logo-mastercraft.svg";
import bookmark from "@/images/icon-bookmark.svg";


export default function BookMarkCard() {
  return (
    <div className="flex bg-white rounded-lg text-black flex-col text-center  justify-center items-center gap-4 p-4 w-full">
        <Image src={logoMastercraft} className="relative top-[-30px]" alt={""}></Image>
          <p className="font-bold">Mastercraft Bamboo Monitor Riser</p>
          <p className="">A beautiful & handcrafted monitor stand to reduce neck and strain.</p>
          <div className="flex sm:justify-between w-full  justify-center gap-4">
          <p className="px-8 rounded-3xl text-white bg-green-300 items-center text-center flex sm:w-[40%] w-[full] ">Back this project</p>
          <div className="flex rounded-3xl sm:bg-gray-400  sm:w-[40%] sm:justify-between items-center bg-transparent justify-center ">
          <Image src={bookmark} className="" alt={""}></Image>
            <p className="p-4 rounded-3xl text-center hidden sm:flex ">Bookmark</p>
          </div>
          </div>
        </div>
  )
}