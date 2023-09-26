import Image from "next/image";
import { IoIosAdd } from 'react-icons/io';

export default function Food() {
    return (
      <main className="p-5">
        <h1 className="text-3xl font-semibold mb-5">All Foods</h1>
        <div className="grid grid-cols-12 gap-x-3 gap-y-7">
          {/* {foods.map(item => (
            <div className="bg-white p-5 rounded-2xl col-span-3 w-48 shadow-sm" key={item.title}>
              <div className="flex justify-center">
                <Image src={item.imgSrc} alt="food-img" width={100} height={100}/>
              </div>
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
              <div className="flex justify-between mt-2 items-end">
                <span className="font-semibold">Rp 20k</span>
                <span className="h-7 w-7 bg-black rounded-full flex justify-center items-center cursor-pointer">
                  <IoIosAdd className="text-2xl text-white" />
                </span>
              </div>
            </div>
          ))} */}
        </div>
      </main>
    )
  }
  