import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Links({ links }) {
  const [select, setSelect] = useState(0);
  const [toggle, setToggle] = useState(false);

  function handleClick(index) {
    setSelect(index);
  }

  return (
    <div className="flex flex-col gap-2 overflow-y-scroll">
      {links &&
        links.map((item, i) => {
          if (item.subLinks) {
            return (
              <>
                <div
                  onClick={() => {
                    handleClick(i);
                  }}
                  key={i}
                  className={` flex_sty p-4 ${
                    select === i && toggle
                      ? "text-green cursor-poiner font-semibold bg-[#F9F9F9]  border-solid border-l-2 border-green"
                      : "text-[#7b7b7b]"
                  }`}
                >
                  <span className="text-3xl mr-2 font-medium">{item.icon}</span>
                  <span
                    className="text-1xl font-semibold"
                    onClick={() => setToggle(!toggle)}
                  >
                    {item.link}
                  </span>
                </div>

                <div
                  className={` flex flex-col bg-[#F9F9F9] overflow-hidden ${
                    toggle ? "h-auto" : "h-0"
                  }`}
                >
                  {item.subLinks.map((subLink, index) => {
                    return (
                      <NavLink
                        key={index}
                        to={subLink.path}
                        className="border-solid border-l-2 border-green ml-7 px-6 py-4 text-black font-normal text-base"
                        activeClassName="text-green font-semibold"
                        exact
                      >
                        {subLink.link}
                      </NavLink>
                    );
                  })}
                </div>
              </>
            );
          } else {
            return (
              <NavLink
                key={i}
                to={item.url}
                className="flex_sty text-[#7b7b7b] p-4"
                activeClassName="text-green font-semibold bg-[#F9F9F9]  border-solid border-l-2 border-green"
                exact
              >
                <span className="text-3xl mr-2 font-light">{item.icon}</span>
                <span className="text-1xl font-semibold">{item.link}</span>
              </NavLink>
            );
          }
        })}
    </div>
  );
}

export default Links;
