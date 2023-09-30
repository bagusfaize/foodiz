import React from 'react'
import ChartCard from './ChartCard'
import { FiChevronRight } from 'react-icons/fi'

export default function Chart() {
    return (
        <div className="w-full h-full flex flex-col justify-between bg-white p-5 relative overflow-y-auto">
            <div>
                <h1 className="text-xl mb-5 font-semibold">My Order</h1>
                <div>
                    <ChartCard />
                    <ChartCard />
                    <ChartCard />
                    <ChartCard />
                    <ChartCard />
                </div>
            </div>
            <div>
                <div className="flex justify-between py-5">
                    <span className="text-lg">Total</span>
                    <span className="text-xl font-semibold">Rp 500k</span>
                </div>
                <button className="flex justify-center items-center text-white bg-main-yellow font-medium rounded-lg px-5 py-2.5 w-full">
                    Checkout
                    <FiChevronRight/>
                </button>
            </div>
        </div>
    )
}
