import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FiSearch, FiMoreVertical } from "react-icons/fi";

function CustomerListing({ projects }) {
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
              <th className="text-xs">Name</th>
              <th className="text-xs">Owner Address</th>
              <th className="text-xs">Land Address</th>
              <th className="text-xs">Email</th>
              <th className="text-xs">Status </th>
              <th className="text-xs">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.addy}</td>
                    <td>2464 Royal Ln. Mesa, New Jersey 45463</td>
                    <td>demo@gmail.com</td>
                    <td>
                      <button
                        className={
                          item.status === "Approved"
                            ? "text-green bg-lightGreen rounded px-4"
                            : "text-[#FFAB2E] bg-lightYellow rounded px-4"
                        }
                      >
                        {item.status}
                      </button>
                    </td>
                    <td>
                      <div className="w-full flex_Box text-center">
                        <FiMoreVertical className="text-[#949494]" />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerListing;
