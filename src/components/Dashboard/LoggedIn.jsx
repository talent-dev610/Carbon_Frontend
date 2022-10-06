import React from "react";
import { Avatar } from "@mui/material";
import { avatar } from "../../Assets/Images";
import { Link } from "react-router-dom";

function LoggedIn({ url }) {
  return (
    <div className="bg-white flex mx-5 px-12 flex-col rounded my-6">
      <div className="flex flex-col items-center py-1 mt-3 ">
        <Avatar
          src={avatar}
          alt="avatar"
          className="outline outline-1 outline-lightGreen outline-offset-2 mb-1"
        />
        <h4 className="text-black font-medium text-base ">Nirav P</h4>
        <p className="text-[#A4A4A4] font-normal text-xs">Customer</p>
      </div>
      <div className="space_sty gap:2 my-3">
        <p className="text-xs font-semibold text-black">Log Out</p>
        <Link to={url} className="text-xs font-semibold text-black">
          Your Dashboard
        </Link>
      </div>
    </div>
  );
}

export default LoggedIn;
