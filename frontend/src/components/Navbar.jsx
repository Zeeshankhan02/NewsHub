import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Newspaper, Menu, X } from "lucide-react";
import HomeSpinner from "../assets/HomeSpinner/HomeSpinner";
import MobileSideBar from "./MobileSideBar";
import { useHandleLogout } from "./handleLogout";


function Navbar() {
  const categoris = [
    { text: "General", to: "/news/general" },
    { text: "Sports", to: "/news/sports" },
    { text: "Tech", to: "/news/technology" },
  ];

  const [loader, setLoader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = useHandleLogout();
  const location = useLocation();
  const navigate = useNavigate(null)

  // hide "Profile" link on login or signup page
  const hidePart = location.pathname === "/";

  return (
    <>
      {loader ? (
        <HomeSpinner />
      ) : (
        <div className="flex p-8 justify-between items-center h-20 sm:h-16 bg-[linear-gradient(90deg,_rgba(42,123,155,1)_0%,_rgba(198,221,136,1)_68%,_rgba(237,221,83,1)_100%)] border-b border-gray-400 w-full">
          <div className="flex items-center">
            <Newspaper className="h-8 w-8 text-[#354604]" />
            <h1 className="text-3xl  text-white text-shadow-sm text-shadow-black font-bold">
              NewsHub
            </h1>
          </div>
          {!hidePart && (
            <div className="hidden md:grid grid-cols-4 gap-10 items-center ">
              {categoris.map((category) => (
                <NavLink
                  to={category.to}
                  end={category.to === "/news/general"}
                  key={category.text}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-white" : "text-black"
                    } text-lg hover:bg-[#afc379c7] text-center pt-3 pb-3 hover:text-white hover:underline underline-offset-6`
                  }
                >
                  {category.text}
                </NavLink>
              ))}

              <button
                onClick={handleLogout}
                className="bg-sky-700 text-center rounded p-2 hover:text-white hover:bg-sky-600"
              >
                LogOut
              </button>
            </div>
          )}
          {!hidePart && (<div className="md:hidden relative ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-[#d5e2b5]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <MobileSideBar
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              categories={categoris}
            />
          </div>)}
          {hidePart && ( <button
                onClick={()=>{
                  navigate('/signup')
                }}
                className="bg-blue-900 text-center text-white rounded p-2 w-25 cursor-pointer hover:bg-sky-600"
              >
                SignUp
              </button>)}
        </div>
      )}
    </>
  );
}

export default Navbar;
