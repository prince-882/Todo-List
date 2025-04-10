import { useState } from "react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-600 text-white p-2  flex items-center justify-around flex-row">
      <span className="font-semibold">iTask</span>
      <span>
        <ul className="flex items-center justify-around gap-3 flex-row">
          <li>Home</li>
          <li>Your Tasks</li>
        </ul>
      </span>
    </div>
  );
};

export default Navbar;
