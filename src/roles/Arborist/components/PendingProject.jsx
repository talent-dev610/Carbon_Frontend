import React, { useState } from "react";
import { FiMoreVertical, FiSearch } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";

function PendingProject({ projects }) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("Filter and Sort");
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="bg-white rounded-md p-5">
      <div className="space_sty">
        <div className="user_search flex_sty">
          <FiSearch className="search_icon mr-2" />
          <input
            placeholder="Search by location..."
            className="w-11/12 text-[#898a8d]"
          />
        </div>
        {/* dropdown */}
        <div className="dropdown">
          <div className="dropdown_btn" onClick={(e) => setActive(!active)}>
            <span className="select_text">{selected}</span>
            <span>
              <AiOutlineBars className="select-icon" />
            </span>
          </div>
          {active && (
            <div className="dropdown_content">
              {options.map((option) => (
                <div
                  className="dropdown_item"
                  onClick={(e) => {
                    setSelected(option);
                    setActive(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="tables mt-5">
        <table>
          <thead>
            <tr>
              <th className="text-xs">Land Owners Name</th>
              <th className="text-xs">Land Address </th>
              <th className="text-xs">Years Owned</th>
              <th className="text-xs">Type of Trees </th>
              <th className="text-xs">Land Status </th>
              <th className="text-xs">Created At</th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.addy}</td>
                    <td>{item.owned}</td>
                    <td>Pine</td>
                    <td>
                      <button
                        className={
                          item.status === "Developed"
                            ? "text-green bg-lightGreen rounded px-4"
                            : "text-[#FFAB2E] bg-lightYellow rounded px-4"
                        }
                      >
                        {item.status}
                      </button>
                    </td>
                    <td>16 Aug, 2022 8:45 AM</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PendingProject;
