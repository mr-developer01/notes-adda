import React from "react";
import {
  FaUserCircle,
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaUserAlt,
  FaLock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Register() {
  const handleKeyDown = (event) => {
    // console.log("User pressed: ", event.key);

    if (event.key === "Enter") {
      // 👇 your logic here
      alert("Enter key pressed ✅");
    }
  };
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... h-[100vh] flex w-full items-center justify-center">
      <div className="text-center w-380 h-450 bg-black p-20 flex flex-col justify-start opacity-70 rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <a href="k">
            <FaUserCircle className="text-white text-8xl" />
          </a>
          <h4 className="text-white mt-2 text-2xl">Singn Up</h4>
        </div>
        <div className="">
          <form className="">
            <div className="flex items-center justify-center my-4">
              <div className="rounded-l bg-[#d3d8e0] px-3 py-[10px] ">
                <span className="">
                  <FaUserAlt className="text-xl" />
                </span>
              </div>
              <input
                type=""
                className=" outline-none py-2 px-1 rounded-r bg-white"
                placeholder="Enter You Name"
              />
            </div>
            <div className="flex items-center justify-center my-4">
              <div className="rounded-l bg-[#d3d8e0] px-3 py-[10px] ">
                <span className="">
                  <MdEmail className="text-xl" />
                </span>
              </div>
              <input
                type=""
                className=" outline-none py-2 px-1 rounded-r bg-white"
                placeholder="Enter You Email"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className=" rounded-l bg-[#d3d8e0] px-3 py-[10px]">
                <span className="">
                  <FaLock className="text-xl" />
                </span>
              </div>
              <input
                type="text"
                className="outline-none py-2 px-1 rounded-r text-black"
                placeholder="Password"
                onKeyDown={handleKeyDown}
              />
            </div>
            <button
              type="button"
              className="text-black bg-[#cacfd6]  my-5 px-[6.4rem] rounded hover:bg-[#9ba2ac] py-2 font-bold"
            >
              LOGIN
            </button>
            <div className="">
              <div className="text-white">
                <input type="checkbox" /> Remember ME
              </div>
              <div className="text-white">
                <a href="k">Forgot your password</a>
              </div>
            </div>
          </form>
          <div className="flex items-center justify-evenly mt-2">
            <a href="f" className="">
              <FaGoogle className="text-white hover:text-red-500 text-3xl" />
            </a>
            <a href="f">
              <FaFacebook className="text-white hover:text-red-500 text-3xl" />
            </a>
            <a href="login">
              <FaGithub className="text-white hover:text-red-500 text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;