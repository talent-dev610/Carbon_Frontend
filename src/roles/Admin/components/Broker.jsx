import React from "react";
import { FiSearch, FiMoreVertical } from "react-icons/fi";

function Broker() {
  const [brokers, setBrokers] = React.useState(
    Array.from({ length: 8 }, (v, i) => false)
  );

  return (
    <div className="bg-white rounded-md p-5">
      <div className="user_options space_sty">
        <div className="user_search flex_sty">
          <FiSearch className="search_icon mr-2" />
          <input
            placeholder="Search by location..."
            className="w-11/12 text-[#898a8d]"
          />
        </div>
      </div>

      <div className="tables mt-5">
        <table>
          <thead>
            <tr>
              <th className="text-xs">Name</th>
              <th className="text-xs">Username </th>
              <th className="text-xs">Password</th>
              <th className="text-xs">Role </th>
              <th className="text-xs">Action</th>
            </tr>
          </thead>
          <tbody>
            {brokers.map((item, i) => {
              return (
                <tr key={i}>
                  <td>Wade Warren</td>
                  <td>wadewarren@gmail.com</td>
                  <td>wadewarren@</td>
                  <td>Broker</td>
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

export default Broker;
