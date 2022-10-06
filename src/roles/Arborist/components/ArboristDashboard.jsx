import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";

function ArboristDashboard({ projects }) {
  return (
    <section className="flex flex-col gap-4 p-5">
      <div className="db_grids grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 ">
        <div className="bg-white rounded-md p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1 xl:flex-row xl:gap-0">
            <span className="text-sm font-medium xl:text-sm">
              Carbon Credit Buyer
            </span>
            <div className="bg-lightGreen rounded-2xl justify-center gap-1 font-semibold items-center  text-green flex w-1/3 xl:mt-2 xl:text-sm">
              <AiOutlineRise className="text-base" />
              <small>10.0%</small>
            </div>
          </div>
          <h1 className="font-semibold text-3xl">856</h1>
        </div>

        <div className="bg-white rounded-md p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1 xl:flex-row xl:justify-between">
            <span className="text-sm font-medium">Land Listings</span>
            <div className="bg-lightGreen rounded-2xl justify-center gap-1 font-semibold items-center text-green flex w-1/3 lg:gap:2">
              <AiOutlineRise className="text-base lg:ml-1" />
              <small className="lg:mr-1">22.0%</small>
            </div>
          </div>

          <h1 className="font-semibold text-3xl">3,342</h1>
        </div>

        <div className="bg-white rounded p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1 xl:flex-row xl:justify-between">
            <span className="text-sm font-medium ">Land Owners</span>
            <div className="bg-lightGreen rounded-2xl justify-center gap-1 font-semibold items-center text-green flex w-1/3 lg:gap:2">
              <AiOutlineRise className="text-base lg:ml-1" />
              <small className="lg:mr-1">12.0%</small>
            </div>
          </div>

          <h1 className="font-semibold text-3xl">77</h1>
        </div>

        <div className="bg-white rounded-sm p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1 xl:flex-row xl:justify-between">
            <span className="text-sm font-medium ">Carbon Credits</span>
            <div className="bg-lightRed rounded-2xl justify-center gap-1 font-semibold items-center text-[#C71026] flex w-1/3 lg:gap:2">
              <AiOutlineFall className="text-base lg:ml-1" />
              <small className="lg:mr-1">7.0%</small>
            </div>
          </div>

          <h1 className="font-semibold text-3xl">17</h1>
        </div>
      </div>
      <div className="bg-white rounded-md p-5">
        <h1>BAR CHARTS</h1>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-black font-semibold">Land Listings</h1>
        <div className="tables bg-white rounded-md p-5">
          <table>
            <thead>
              <tr>
                <th className="text-xs">Land Owners Name</th>
                <th className="text-xs">Land Address</th>
                <th className="text-xs">Years Owned</th>
                <th className="text-xs">Type of Trees </th>
                <th className="text-xs">Land Status </th>
                <th className="text-xs">Created At</th>
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
                      <td>
                        <div className="flex align-items justify-content w-full flex_Box text-center">
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
    </section>
  );
}

export default ArboristDashboard;
