'use client'
import React from 'react';
import { usePathname } from 'next/navigation'
import { PiForkKnifeDuotone } from 'react-icons/pi';
import {FiShoppingBag} from 'react-icons/fi'

type HeaderProps = {
    // isCartOpen: boolean,
    onClick: () => void,
}

export default function Header({onClick}: HeaderProps) {
    const pathname = usePathname();
    return (
    <nav className="flex justify-between items-center bg-white px-5 sticky top-0 z-50">
            <div className="flex items-center space-x-2 text-2xl my-5 font-semibold">
                <span className="flex justify-center items-center h-8 w-8 bg-main-yellow rounded-full text-white">
                    <PiForkKnifeDuotone className="text-lg" />
                </span>
                <span className="text-zinc-700">foodiz</span>
            </div>
            <div 
                onClick={() => onClick()}
                className="relative flex justify-center items-center h-9 w-9 rounded-full text-zinc-500 bg-zinc-100 hover:bg-zinc-200 cursor-pointer">
                <span className="absolute h-3 w-3 bg-main-red text-white rounded-full flex justify-center items-center top-0 right-0 font-semibold text-xs border border-white"></span>
                <FiShoppingBag className="text-xl" />
            </div>
        </nav>
    )
}