import Image from 'next/image'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

export default function ChartCard() {
  return (
    <div className="flex items-center mb-4">
        <div className="mr-2 bg-zinc-100 rounded-xl">
            <Image src="/images/food-1.png" alt="cart-food-img" height={100} width={100} />
        </div>
        <div className="w-full">
            <div className="flex items-center space-x-2 justify-between mb-2">
                <div>Karedok</div>
                <div className="font-medium">Rp 20k</div>
            </div>
            <div className="flex items-center space-x-2 justify-between">
                <div>x1</div>
                <button>
                    <FiTrash2/>
                </button>
            </div>
        </div>
    </div>
  )
}
