'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { PiBowlFoodBold, PiHouseBold, PiBeerSteinBold, PiCakeBold, PiPercentBold } from "react-icons/pi";

const menus = [
    {
        name: "Home",
        path: "/",
        icon: <PiHouseBold />
    },
    {
        name: "Food",
        path: "/food",
        icon: <PiBowlFoodBold />
    },
    {
        name: "Drink",
        path: "/drink",
        icon: <PiBeerSteinBold />
    },
    {
        name: "Dessert",
        path: "/dessert",
        icon: <PiCakeBold />
    },
    {
        name: "Promo",
        path: "/promo",
        icon: <PiPercentBold />
    },
];


export default function SideBar() {
    const pathname = usePathname();
    return (
        <div className="bg-white flex flex-col space-y-10 py-10 px-5 font-semibold h-full">
            <div className="text-2xl my-5">foodiz</div>
            <div className="flex flex-col space-y-3">
                {menus.map(item => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            href={item.path}
                            className={`flex items-center px-5 py-4 rounded-xl ${isActive ? "bg-main-red text-white" : "text-dark-grey hover:bg-light-grey"}`}
                        >
                            <span className="mr-3 text-lg">
                                {item.icon}
                            </span>
                            <span>{item.name}</span>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}
