import React from 'react'

// type Props = {}

export default function CollectionStatus() {
  return (
    <div className="flex flex-col bg-white text-black  w-full items-center p-6 rounded-lg  ">
    <div className="flex w-full flex-col sm:flex-row gap-8 p-4 justify-center sm:justify-normal items-center sm:items-start">
      <div className="flex flex-col sm:border-r border-b p-2 items-center sm:items-start">
        <p className="font-bold ">$89,914</p>
        <p className="">of $100,000 backed</p>
      </div>
      <div className="flex  flex-col sm:border-r border-b p-2 items-center sm:items-start">
        <p className="justify-between font-bold">5,007</p>
        <p className="">totalbackers</p>
      </div>
      <div className="flex  flex-col p-2 items-center sm:items-start">
        <p className="justify-between font-bold">56</p>
        <p className="">daysleft</p>
      </div>
    </div>
    <input type="range"  className="text-[hsl(176,50%,47%)] w-full" max={100000}/>
  </div>
  )
}