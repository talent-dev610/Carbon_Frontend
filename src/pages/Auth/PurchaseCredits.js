import React, { useState } from "react";
import { SEO, Footer, Header } from "../../components";
import { Image_one } from "../../Assets/Carbon";
import { CO2 } from "../../Assets/Images";
import { AiOutlineClose } from "react-icons/ai";

const PurchaseCredits = () => {
  const [details, setDetails] = useState(
    Array.from({ length: 3 }, (v, i) => false)
  );
  return (
    <React.Fragment>
      <SEO title="Purchase Carbon Credits" />
      <section className="container">
        <Header url="/login" span="Sign In" text="Already have an account?" />
        <div className="flex flex-col px-5 gap-[20px]">
          <div className="flex_Dir gap-[10px]">
            <h1 className="text-4xl text-black font-semibold mt-4">
              Purchase Carbon Credit{" "}
            </h1>
            <p className="text-[#4D4D4D] font-normal text-lg mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lib.
            </p>
          </div>

          {/* select form */}
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex flex-col md:w-[60%]">
              <h1 className="text-2xl text-black font-semibold">Select</h1>
              <div className="w-full mt-4">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-[#222222]">
                    Select Carbon Credit Listing{" "}
                  </label>
                  <select className="inputs">
                    <option disabled selected className="inputs">
                      Select
                    </option>
                  </select>
                </div>
                <div className="grid-cols-1 w-full gap-[10px] pt-[13px] grid lg:grid-cols-2 mb-[10px]">
                  <div
                    className="flex_Box py-[10px] text_ct px-[2px] bg_fairy rounded-full bold_sty border-green"
                    style={{ background: "rgba(0, 140, 54, 0.06)" }}
                  >
                    <span className="text-xs text-black font-normal">
                      4140 Parker Rd. Allentown, New Mexico, 31134
                    </span>
                    <AiOutlineClose className="text-xs text-green ml-2" />
                  </div>
                  <div
                    className="flex_Box py-[10px] text_ct px-[2px] bg_fairy rounded-full bold_sty border-green"
                    style={{ background: "rgba(0, 140, 54, 0.06)" }}
                  >
                    <span className="text-xs text-black font-normal">
                      4140 Parker Rd. Allentown, New Mexico, 31134
                    </span>
                    <AiOutlineClose className="text-xs text-green ml-2" />
                  </div>
                  <div
                    className="flex_Box py-[10px] text_ct px-[2px] bg_fairy rounded-full bold_sty border-green"
                    style={{ background: "rgba(0, 140, 54, 0.06)" }}
                  >
                    <span className="text-xs text-black font-normal">
                      4140 Parker Rd. Allentown, New Mexico, 31134
                    </span>
                    <AiOutlineClose className="text-xs text-green ml-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-[40%] bg-[#F9F9F9] rounded p-4">
              {details.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="border-b border-[#BFC2C2] border-solid py-4 gap-[20px] flex flex-row "
                  >
                    <div className="w-[40%]">
                      <img src={Image_one} alt="images" />
                    </div>
                    <div className="flex-col flex w-[60%]">
                      <h1 className="text-base font-medium">
                        4140 Parker Rd. Allentown, New Mexico, 31134
                      </h1>
                      <div className="space_sty mt-[20px]">
                        <div className="flex gap-[2px]">
                          <div>
                            <img src={CO2} alt="CO2" />
                          </div>
                          <p className="text-black text-xs font-medium mt-[3px]">
                            5802 mts
                          </p>
                        </div>
                        <p className="text-green text-xs font-medium">
                          $7/per mt
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <article className="flex_Dir gap-[10px] ">
                <div className="space_sty mt-3">
                  <h1 className="text-black font-medium text-sm">
                    Metric Tons
                  </h1>
                  <h1 className="text-black font-semibold text-sm">17,406</h1>
                </div>
                <div className="space_sty">
                  <h1 className="text-black font-medium text-sm">
                    Total Price
                  </h1>
                  <h1 className="text-green font-semibold text-sm">
                    $121,842.00
                  </h1>
                </div>
              </article>
            </div>
          </div>

          {/* bank details */}
          <form className="flex flex-col gap-4 border-solid border-t border-[#d9d9d9]">
            <h1 className="text-black font-semibold text-2xl pt-8">
              Bank Information
            </h1>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-[#222222]">
                    Bank Name
                  </label>
                  <input placeholder="Enter Bank Name" className="inputs " />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-black">
                    SWIFT Code
                  </label>
                  <input placeholder="Enter SWIFT" className="inputs " />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-[#222222]">
                    Account Number
                  </label>
                  <input
                    placeholder="Enter Account number"
                    className="inputs "
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-black">
                    Account Name
                  </label>
                  <input placeholder="Enter Account name" className="inputs " />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-[#222222]">
                    Bank Address
                  </label>
                  <textarea cols="10" rows="4" className="inputs  "></textarea>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-sm font-medium text-black">
                    Amount
                  </label>
                  <input placeholder="$121,842.00" className="inputs " />
                </div>
              </div>
            </div>

            <div className="mb-16 mt-3">
              <button className="px-6 py-4 click_btn flex items-center">
                PURCHASE NOW !
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default PurchaseCredits;
