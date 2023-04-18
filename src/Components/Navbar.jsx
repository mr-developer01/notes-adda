import React, {useState} from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import Barmenu from "./Barmenu";


// const clickMe = (e) => {
//   console.log(e);
// }

const Navbar = () => {

  const [showIcon, setIcon] = useState(false)

  return (
    <>
      <nav className="flex  items-center bg-[#242429] justify-between p-4 sm:flex sm:justify-between rounded-xl">
        <div className="logo text-[white] flex gap-2">
          <div>
            <hr className="w-9 bg-[white]" />
            <h1 className="text-xs">NOTES</h1>
          </div>

          <div>
            <h1 className="text-xs ml-[2px]">AADA</h1>
            <hr className="w-9 bg-[white]" />
          </div>
        </div>

        <div className="flex items-center w-40 gap-2 justify-between rounded-2xl sm:ml-12 md:w-64">
          <div className="flex items-center justify-between w-36 px-4 rounded-2xl bg-[#3e3e3e95] sm:w-full md:px-2">
            <input
              type="search"
              id="Search"
              placeholder="Search"
              className="w-24 bg-transparent outline-none sm:w-32 md:w-60 text-[white] md:px-3 md:py-2"
            />
            <label htmlFor="Search" className="text-xs md:text-[18px]">
              <FaSearch className="text-[#d9d9d9] md:mr-4"/>
            </label>
          </div>

          <FaBars className="text-[#b7b7b7] hover:cursor-pointer sm:hidden" onClick={() => setIcon(!showIcon)}/>
        </div>

        {/* <FaBars className="text-[#b7b7b7] hover:cursor-pointer sm:hidden" onClick={() => setIcon(!showIcon)}/> */}

        <div className="hidden sm:flex sm:w-auto sm:gap-2 sm:items-center md:gap-3">
            <p className="text-[white] text-sm"><a href="#">ABOUT</a></p>
            <p className="text-[white] text-sm"><a href="#">MY NOTES</a></p>
            <p className="text-[white] text-sm"><a href="#">HOME</a></p>
            <button className="w-20 bg-[white] border-1 rounded border border-[white] text-[white] bg-transparent px-2 py-1 hover:bg-[white] hover:text-[#242429] transition duration-[1.4s] ease-in-out">Sign in</button>
            <FaUserCircle className="bg-transparent text-[white] text-2xl hover:bg-transparent hover:text-[#7fb8d1]" />
          </div>
      </nav>
      <div className={`${showIcon ? "disabled:hidden" : "hidden"} sm:hidden z-10`}>
        <Barmenu />
      </div>
    </>
  );
};

export default Navbar;
