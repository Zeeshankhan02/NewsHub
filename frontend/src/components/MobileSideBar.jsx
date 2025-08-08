import { NavLink } from "react-router-dom";
import {useHandleLogout } from "./handleLogout";

function MobileSideBar({categories,setIsMenuOpen,isMenuOpen}){
  
  const handleLogout = useHandleLogout();
  return<>
  
  {isMenuOpen && (
            <div className="border-t shadow-2xl rounded-xl absolute border-gray-200 bg-gray-300 -translate-x-30 z-10">
              
              <div className="flex flex-col space-y-2">
                {categories.map(category => (
                  <NavLink
                  to={category.to}
                  end={category.to === "/news/general"}
                  key={category.text}
                  onClick={() =>setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-white bg-[#c4d593c7]" : "text-black"
                    } text-lg hover:bg-[#dde9bbc7]  hover:text-white hover:text-xl md:hover:underline border-b underline-offset-6 pr-14 pl-2 pb-2 pt-2 p`
                  }
                  >
                    {category.text}
                  </NavLink>
                ))}
                 <button  onClick={handleLogout}
              className="bg-sky-700 rounded p-2 hover:text-white hover:bg-sky-600"
            >
              LogOut
            </button>
              </div>
            </div>
          )}
  
  </>
}

export default MobileSideBar