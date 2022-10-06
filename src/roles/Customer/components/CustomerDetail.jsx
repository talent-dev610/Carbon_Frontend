import React from "react";
import { Detail } from "../../../Assets/Images";

const CustomerDetail = () => {
  return (
    <section className="flex flex-col gap-3 ">
      <div className="flex_Dir gap-3  md:flex-row md:gap-4">
        <div className="flex_Dir gap-2 md:w-3/4">
          <div className="rounded">
            <img src={Detail} alt="detail" />
          </div>
          <div className="grid gap-1 grid-cols-4 ">
            <div>
              <img src={Detail} alt={Detail} className="rounded" />
            </div>
            <div>
              <img src={Detail} alt={Detail} className="rounded" />
            </div>
            <div>
              <img src={Detail} alt={Detail} className="rounded" />
            </div>
            <div>
              <img src={Detail} alt={Detail} className="rounded" />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-white md:w-1/4">
          <h1>MAP</h1>
        </div>
      </div>
      <div className="flex_Dir gap-2">
        <h1 className="text-black font-medium text-lg">Details</h1>
        <div className="flex_Dir gap-3 pt-4  border-solid border-t border-[#d9d9d9]">
          <p className="flex gap-1">
            <span className="detail_text">Name</span>
            <span className="detail_value">Wade Warren</span>
          </p>
          <p className="flex gap-1">
            <span className="detail_text">Email</span>
            <span className="detail_value">wadewarren@gmail.com</span>
          </p>

          <p className="flex gap-1">
            <span className="detail_text">Address</span>
            <span className="detail_value">
              2464 Royal Ln. Mesa, New Jersey 45463
            </span>
          </p>
          <p className="flex gap-1">
            <span className="detail_text">Land Address</span>
            <span className="detail_value">
              2464 Royal Ln. Mesa, New Jersey 45463
            </span>
          </p>
          <p className="flex gap-1">
            <span className="detail_text">Years Owned</span>
            <span className="detail_value">10 years</span>
          </p>
          <p className="flex gap-1">
            <span className="detail_text">Titled Owner</span>
            <span className="detail_value">Wade Warren</span>
          </p>
          <p className="flex gap-1">
            <span className="detail_text">Type of Tree</span>
            <span className="detail_value">Pine</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerDetail;
