import React from "react";
import MediaQuery from "react-responsive";
import Links from "./Links";
import { Avatar } from "@mui/material";
import { avatar } from "../../Assets/Images";
import { FiMoreHorizontal } from "react-icons/fi";
import { Popover } from "@headlessui/react";

function Sidebar({ links }) {
  return (
    <MediaQuery minWidth={1025}>
      <aside className="sidebar pl-[2px] border-solid border-r border-[#e8e8e8] h-screen sticky top-0 left-0  bg-white lg:w-[20%]">
        <Popover className="relative space_sty my-[25px] mb-[30px] px-[30px]">
          <div className="flex justify-between gap-[5px]">
            <Avatar src={avatar} alt="avatar" />
            <div className="flex flex-col">
              <h4 className="text-black font-medium text-base ">Nirav P</h4>
              <p className="text-[#A4A4A4] font-normal text-xs">Customer</p>
            </div>
          </div>

          <Popover.Button className="bg-[#F9F9F9] text-3xl rounded-full">
            <FiMoreHorizontal className="px-[7px]" />
          </Popover.Button>

          <Popover.Panel className="absolute z-10">
            <div className="bg-[#f9f9f9] w-[200px] mt-[100px]  rounded p-2">
              <button className="text-black text-xs font-normal">
                LOG OUT
              </button>
            </div>
          </Popover.Panel>
        </Popover>

        {/* navbar */}
        <Links links={links} />
      </aside>
    </MediaQuery>
  );
}

export default Sidebar;
