import { BiBasket } from "react-icons/bi";
import { PiBowlFoodBold, PiThumbsUpBold, PiBeerSteinBold, PiCakeBold, PiPercentBold } from "react-icons/pi";

const menus = [
  {
      name: "Popular",
      path: "/",
      icon: <PiThumbsUpBold />
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

export default function MenuCategories(){
    return(
      <div className="flex space-x-5">
        { menus.map(item => {
          const isActive = item.name.includes('Popular');
          return(
          <div className={`
            flex items-center space-x-2 rounded-full py-3 px-5 cursor-pointer
            ${isActive ? "bg-main-yellow text-white" : "text-zinc-600 hover:bg-zinc-200 bg-white"}
            `}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
          )
        })

        }
      </div>
    )
  }