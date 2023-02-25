import React, { useState } from "react";

const Banner = () => {
  const [message, setMessage] = useState("");
  const handlechange = (e) => {
    setMessage(e.target.value);
    console.log("Value is", e.target.value);
  };
  return (
    <div className="px-5 md:px-60 py-20 bg-gradient-to-b from-pink-50 to-white">
      <h1 className="text-3xl font-medium text-red-600 ">Search Anything...</h1>
      <input
        type="text"
        placeholder="Live Search..."
        className="border-solid my-3 lg:my-10 border-2 border-red-200 rounded-full py-3 px-5 text-black outline-black w-full"
        onChange={handlechange}
        value={message}
      />
    </div>
  );
};

export default Banner;
