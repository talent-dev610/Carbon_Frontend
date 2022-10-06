import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineRise } from "react-icons/ai";

function CustomerDashboard({ projects }) {
  return (
    <section className="flex flex-col gap-4 p-5">
      <article className="flex flex-col gap-4 md:flex-row-reverse">
        <section className="customer_db grid grid-cols-2 gap-2 md:grid-cols-1 md:w-1/4">
          <div className="bg-white rounded-md p-3">
            <div className="flex flex-col gap-1 lg:flex-row ">
              <span className="text-black font-medium text-xs md:text-sm">
                Total Listings
              </span>
              <div className="bg-lightGreen text-green rounded-2xl py-1 flex_Box w-[40%] md:w-[50%] lg:ml-2 xl:py-0 xl:w-[30%]">
                <AiOutlineRise className="mr-1" />
                <small style={{ fontSize: "10px" }}>22.0%</small>
              </div>
            </div>
            <h1 className="font-semibold text-2xl mt-2">3,342</h1>
          </div>

          <div className="bg-white rounded-md p-3">
            <div className="flex flex-col gap-1 xl:flex-row ">
              <span className="text-black font-medium text-xs md:text-sm ">
                Pending Listings
              </span>
              <div className="bg-lightGreen text-green rounded-2xl py-1 flex_Box w-[40%] md:w-[50%] lg:ml-2 xl:py-0 xl:w-[30%]">
                <AiOutlineRise className="mr-1" />
                <small style={{ fontSize: "10px" }}>22.0%</small>
              </div>
            </div>
            <h1 className="font-semibold text-2xl mt-2">3,023</h1>
          </div>
        </section>

        <div className="bg-white rounded-md p-5 md:w-9/12">
          <h1>BAR CHARTS</h1>
        </div>
      </article>

      <div className="flex flex-col gap-3">
        <div className="tables bg-white rounded-md p-5">
          <h1 className="text-black font-semibold mb-2">Land Listings</h1>
          <table>
            <thead>
              <tr>
                <th className="text-xs">Name</th>
                <th className="text-xs">Owner Addresss</th>
                <th className="text-xs">Land Address</th>
                <th className="text-xs">Email </th>
                <th className="text-xs">Status</th>
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

export default CustomerDashboard;
