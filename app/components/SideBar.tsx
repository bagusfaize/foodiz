import React from 'react'
import { PiBowlFoodBold, PiHouseBold, PiBeerSteinBold, PiCakeBold, PiPercentBold} from "react-icons/pi";

export default function SideBar() {
  return (
    <div className="bg-white flex flex-col space-y-10 py-10 px-5 font-semibold h-full">
        <div className="text-2xl my-5">foodiz</div>
        <div className="flex flex-col space-y-3">
            <span className="flex items-center px-5 py-4 bg-slate-50 rounded-xl">
                <PiHouseBold className="mr-3 text-lg"/>
                <span className="">Home</span>
            </span>
            <span className="flex items-center px-5 py-4 text-slate-500 rounded-xl">
                <PiBowlFoodBold className="mr-3 text-xl"/>
                <span className="">Food</span>
            </span>
            <span className="flex items-center px-5 py-4 text-slate-500">
                <PiBeerSteinBold className="mr-3 text-xl"/>
                <span className="">Drink</span>
            </span>
            <span className="flex items-center px-5 py-4 text-slate-500">
                <PiCakeBold className="mr-3 text-xl"/>
                <span className="">Dessert</span>
            </span>
            <span className="flex items-center px-5 py-4 text-slate-500">
                <PiPercentBold className="mr-3 text-xl"/>
                <span className="">Promo</span>
            </span>
        </div>
    </div>
  )
}
