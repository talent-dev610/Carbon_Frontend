import React from "react";
import { SEO, OptionBtn } from "../../../components";

function CreateBrokers() {
  return (
    <>
      <SEO title="Create Broker" />
      <OptionBtn
        li="Create New Broker"
        name="Brokers"
        desc="Create New Broker"
        links="/brokers"
      />
      <div className="bg-white rounded-md p-5">
        <form className="flex flex-col gap-4">
          {/*  */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  Broker Name
                </label>
                <input placeholder="Enter Broker Name" className="inputs " />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">
                  Enter Username
                </label>
                <input placeholder="Enter Username " className="inputs " />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  Password
                </label>
                <input
                  placeholder="Enter Password"
                  type="password"
                  className="inputs "
                />
              </div>
            </div>
            <div className="w-full md:w-1/2"></div>
          </div>

          <div>
            <button className="click_btn rounded-md py-3 px-5">
              Create Broker
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateBrokers;
