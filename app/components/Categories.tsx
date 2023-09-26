import { BiBasket } from "react-icons/bi";
import { PiBowlFoodBold, PiThumbsUpBold, PiBeerSteinBold, PiCakeBold, PiPercentBold } from "react-icons/pi";

const menus = [
  {
      name: "Best Seller",
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
      <div className="flex space-x-2">
        { menus.map(item => {
          const isActive = item.name.includes('Best');
          return(
          <div className={`
            flex items-center space-x-2 rounded-lg py-2 px-4 w-36 cursor-pointer
            ${isActive ? "bg-main-yellow text-white" : "hover:bg-zinc-200"}
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