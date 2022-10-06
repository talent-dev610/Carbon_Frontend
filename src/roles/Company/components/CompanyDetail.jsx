import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Image_one } from "../../../Assets/Carbon";

function CompanyDetail() {
  return (
    <div className="flex bg-white rounded gap-3 p-3 flex-col md:flex-row md:p-5">
      <div className="flex_Dir gap-3 md:w-1/2">
        <h1 className="text-lg text-black font-medium">Properties</h1>
        <div className="flex pb-6 gap-2 border-b border-[#BFC2C2] md:border-none">
          <div>
            <img src={Image_one} alt="images" />
          </div>
          <div className="flex_Dir">
            <h3 className="text-black text-sm font-normal md:text-base">
              4140 Parker Rd. Allentown, New Mexico, 31134
            </h3>
          </div>
        </div>
        <div className="flex pb-6 gap-2 border-b border-[#BFC2C2] md:border-none">
          <div>
            <img src={Image_one} alt="images" />
          </div>
          <div className="flex_Dir">
            <h3 className="text-black text-sm font-normal md:text-base">
              4140 Parker Rd. Allentown, New Mexico, 31134
            </h3>
          </div>
        </div>
        <div className="flex pb-6 gap-2 border-b border-[#BFC2C2] md:border-none">
          <div>
            <img src={Image_one} alt="images" />
          </div>
          <div className="flex_Dir">
            <h3 className="text-black text-sm font-normal md:text-base">
              4140 Parker Rd. Allentown, New Mexico, 31134
            </h3>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-3 md:w-1/2 md:pl-7 md:border-l border-[#BFC2C2]">
        <h1 className="text-lg text-black font-medium md:mt-4">
          Other Details
        </h1>
        <div className="flex ">
          <div className="w-1/2 text-[#949494] font-normal text-sm">
            Carbon Credits
          </div>

          <div className="w-1/2 text-black font-semibold">5280 mts</div>
        </div>
        <div className="flex ">
          <div className="w-1/2 text-[#949494] font-normal text-sm">
            Price per mt
          </div>

          <div className="w-1/2 text-black font-semibold">$6</div>
        </div>
        <div className="flex">
          <div className="w-1/2 text-[#949494] font-normal text-sm">
            Total Cost
          </div>

          <div className="w-1/2 text-black font-semibold">$31,248.00</div>
        </div>
        <div className="flex">
          <div className="w-1/2 text-[#949494] font-normal text-sm">Wire</div>

          <div className="w-1/2 flex flex-col gap-1">
            <span className="text-[#FF2F2F] font-semibold">Pending</span>
            <span className="text-[#FF2F2F] font-normal text-xs">
              Wire completed time is 27 aug, 2022 8:40 am
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyDetail;
