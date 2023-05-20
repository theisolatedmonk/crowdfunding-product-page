import React from 'react'

// type Props = {}

export default function CollectionStatus() {
  return (
    <div className="flex flex-col bg-white text-black  w-full items-center p-2 rounded-lg">
    <div className="flex w-full gap-8 p-4">
      <div className="flex flex-col border-r p-2">
        <p className="font-bold">$89,914</p>
        <p className="">of $100,000 backed</p>
      </div>
      <div className="flex  flex-col border-r p-2">
        <p className="justify-between">5,007</p>
        <p className="">totalbackers</p>
      </div>
      <div className="flex  flex-col p-2">
        <p className="justify-between">56</p>
        <p className="">daysleft</p>
      </div>
    </div>
    <input type="range"  className="text-green-400 w-full" max={100000}/>
  </div>
  )
}