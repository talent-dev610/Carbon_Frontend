import React, { useState } from "react";
import { FiMoreVertical, FiChevronDown, FiSearch } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

function NewListing({ projects }) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("Created At");
  const [values, setValues] = useState("Pending");
  const options = ["Option 1", "Option 2", "Option 3"];

  //   trees
  const [selectTrees, setSelectTrees] = useState("Pine");
  const choices = ["Option 1", "Option 2", "Option 3"];

  const [transfers, setTransfers] = useState(
    Array.from({ length: 8 }, (v, i) => false)
  );
  return (
    <div className="bg-white rounded-md p-5">
      <div className="space_sty">
        <div className="flex_sty new_search">
          <FiSearch className="search_icon mr-2" />
          <input
            placeholder="Search by location..."
            className="w-11/12 text-[#898a8d]"
          />
        </div>
        {/* dropdown */}
        <section className="flex gap-[4px]">
          <div className="d_none">
            <div className="bg-[#f9f9f9] flex z-10 rounded  cursor-pointer text-green items-center py-2 px-4">
              <span>Pine</span>
              <FiChevronDown className="text-base ml-2" />
            </div>
          </div>
          <div className="d_none">
            <div className="bg-[#f9f9f9] flex z-10 rounded  cursor-pointer text-green items-center py-2 px-4">
              <span>Pending</span>
              <FiChevronDown className="text-base ml-2" />
            </div>
          </div>
          <div>
            <div className="bg-[#f9f9f9] flex z-10 rounded  cursor-pointer text-green items-center py-2 px-4">
              <span className="hidden md:flex">Created At</span>
              <BsBag className="text-base ml-2" />
            </div>
          </div>
          {/* <article>
            <div className="dropdown d_none w_sty">
              <div
                className="dropdown_btn"
                onClick={(e) => setActive(!selectTrees)}
              >
                <span className="select_text">{selectTrees}</span>
                <span>
                  <FiChevronDown className="select-icon" />
                </span>
              </div>
              {active && (
                <div className="dropdown_content">
                  {choices.map((choice) => (
                    <div
                      className="dropdown_item"
                      onClick={(e) => {
                        setSelected(choice);
                        setActive(false);
                      }}
                    >
                      {choice}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article> */}

          {/* <div className="dropdown d_none w_sty">
            <div
              className="dropdown_btn"
              onClick={(e) => setSelectTrees(!active)}
            >
              <span className="select_text">{values}</span>
              <span>
                <FiChevronDown className="select-icon" />
              </span>
            </div>
            {active && (
              <div className="dropdown_content">
                {values.map((value) => (
                  <div
                    className="dropdown_item"
                    onClick={(e) => {
                      setValues(value);
                      setActive(false);
                    }}
                  >
                    {value}
                  </div>
                ))}
              </div>
            )}
          </div> */}

          {/* <div className="dropdown w_sty">
            <div className="dropdown_btn" onClick={(e) => setActive(!active)}>
              <span className="select_text">{selected}</span>
              <span>
                <BsBag className="select-icon" />
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
          </div> */}
        </section>
      </div>

      <div className="tables mt-5">
        <table>
          <thead>
            <tr>
              <th className="text-xs">Land Owners Name</th>
              <th className="text-xs">Land Address</th>
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

export default NewListing;
