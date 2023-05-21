import React from 'react'
import check from "@/images/icon-check.svg";
import Image from "next/image";


export default function ThankyouCard() {
  return (
    <div className="flex flex-col rounded-lg gap-4 bg-white p-8 justify-center items-center text-center w-[440px] h-fit ">
    <Image src={check} className="  flex items-center" alt={""}></Image>
    <p className="font-bold"> Thank for your support!</p>
    <p className=""> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed</p>
    <button className="font-bold px-8 py-4 bg-green-500 rounded-3xl"> Got it</button>
    </div>
  )
}