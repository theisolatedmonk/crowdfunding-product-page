import React from 'react'

type TemplatType = {
itemName: string
    amount: number
    leftItem: number
    discription: string
}

export default function ContributionTemplate(props: TemplatType) {
  return (
    <div className="flex flex-col border p-4 justify-between rounded-lg gap-4 ">
    <div className="flex justify-between">
      <p className="font-bold">{props.itemName}</p>
      <p className="text-green-400"> pledge ${props.amount}or more</p>
    </div>
    <p className="">{props.discription}</p>
    <div className="flex justify-between ">
      <div className="font-bold">64 <span className="font-normal">left</span></div>
      <p className="p-2 rounded-3xl bg-green-400">Select Reward</p>
    </div>
  </div>
  )
}