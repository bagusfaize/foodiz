'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { BiBasket } from 'react-icons/bi';

export default function Header() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-between items-center bg-white px-5 shadow-sm">
            <div className="text-2xl my-5 text-main-yellow font-semibold">foodiz</div>
            <div>
                <BiBasket className="text-2xl"/>
            </div>
        </nav>
    )
}