import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Barmenu = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 border border-[#242429] rounded gap-6 shadow-md absolute right-4 h-60 bg-[#242429]">
        <div className="flex items-center gap-7 w-28">
          <button className="w-20 bg-[white] border-1 rounded border border-[white] text-[white] bg-transparent px-2 py-1 hover:bg-[white] hover:text-[#242429] transition duration-[1.4s] ease-in-out">
            Sign in
          </button>
          <FaUserCircle className="bg-transparent text-[white] text-2xl hover:bg-transparent hover:text-[#7fb8d1]" />
        </div>
        <ul className="flex flex-col items-center gap-9">
          <li><a href="#"><p className="text-[white] tracking-widest hover:text-gray-500">HOME</p></a></li>
          <li><a href="#"><p className="text-[white] tracking-widest hover:text-gray-500">ABOUT</p></a></li>
          <li><a href="#"><p className="text-[white] tracking-widest hover:text-gray-500">MY NOTES</p></a></li>
        </ul>
        
      </div>
    </>
  );
};

export default Barmenu;


// {`${showIcon ? "disabled:hidden" : "hidden"} sm:hidden`}
