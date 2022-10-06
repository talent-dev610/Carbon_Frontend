import React, { useState } from "react";
import { FiMoreVertical, FiSearch } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";

function WireTranfer() {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("Filter and Sort");
  const options = ["Option 1", "Option 2", "Option 3"];
  const [transfers, setTransfers] = React.useState(
    Array.from({ length: 8 }, (v, i) => false)
  );
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
              <th className="text-xs">Carbon Credit Buyer</th>
              <th className="text-xs">Contact name</th>
              <th className="text-xs">Amount of Carbon </th>
              <th className="text-xs">Price per mt</th>
              <th className="text-xs">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map((item, i) => {
              return (
                <tr key={i}>
                  <td>Energy Plum</td>
                  <td>Crish</td>
                  <td>5802 mts</td>
                  <td>$7.00</td>
                  <td>$40,614.00</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WireTranfer;
