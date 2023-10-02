import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../AuthContext";

import Account from "../pages/Account";
import NavAccount from "./NavAccount";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Nav() {
  const { user } = UserAuth();

  return (
    <div className="flex items-center justify-between px-12 py-6 text-[#68707d] bg-gray-100 md:px-6 md:py-6">
      <div className="flex space-x-6 justify-center items-center">
        <Link to="/" className="hidden sm:block">
          <p className="text-3xl text-black md:p-3">footlocker.</p>
        </Link>

        <Link
          to="/shop"
          state={{ brandLink: null }}
          className="border-b-2 hover:border-gray-500 border-transparent"
        >
          <p className="text-[14px] md:text-[16px] font-bold">Shop</p>
        </Link>
        <Link
          to="/contact"
          className="border-b-2 hover:border-gray-500 border-transparent"
        >
          <p className="text-[14px] md:text-[16px] font-bold">Contact Us</p>
        </Link>
      </div>

      <div className="flex space-x-10 text-md font-bold">
        <Link to="/cart" className="">
          <ShoppingCartIcon />
        </Link>

        {/* {user?.email ? (
          <NavAccount />
        ) : (
          <>
            <Account />
          </>
        )} */}
      </div>
    </div>
  );
}

export default Nav;
