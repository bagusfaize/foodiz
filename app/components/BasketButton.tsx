import { BiBasket } from "react-icons/bi";

export default function BasketButton(){
    return(
      <div className="bg-white w-16 h-16 flex justify-center items-center rounded-lg shadow-xl absolute bottom-10 right-10">
        <BiBasket className="text-2xl"/>
      </div>
    )
  }