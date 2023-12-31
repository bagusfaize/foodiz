import Image from "next/image";
import MenuCategories from "./components/Categories";
import Hero from "./components/Hero";
import { foods } from "./constant/constant";
import { IoIosAdd } from "react-icons/io";
import { AiFillFire } from "react-icons/ai";

export default function Home() {
  return (
    <main className="p-5">
      <Hero />
      <h1 className="text-lg font-semibold mt-8 mb-5">Menu Category</h1>
      <div className="mb-5">
        <MenuCategories />
      </div>
      <div className="grid grid-cols-12 gap-x-3 gap-y-7">
          {foods.map(item => (
            <div className="bg-white p-5 rounded-2xl col-span-3 w-48 shadow-sm" key={item.title}>
              <div className="flex justify-center relative">
                <span className="absolute right-0 w-6 h-6 bg-red-100 flex justify-center items-center rounded-full">
                  <AiFillFire className="text-red-500"/>
                </span>
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
          ))}
        </div>
    </main>
  )
}
