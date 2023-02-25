import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-pink-50 px-5 lg:px-60 h-16 flex justify-between items-center ">
      <div>
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="logo"
          className="w-24"
        />
      </div>
      <div>
        <button className="border-solid flex items-center space-x-2 border-2 border-gray-900 px-3 py-1 text-sm font-medium rounded-full hover:border-red-600">
          <MdOutlineAccountCircle fill="red" />
          <span>My Account</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
