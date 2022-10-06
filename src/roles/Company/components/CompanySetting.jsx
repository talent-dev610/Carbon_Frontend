function CompanySetting() {
  return (
    <form className="flex flex-col gap-4 px-5">
      <div className="space_sty">
        <h1 className="text-3xl text-black font-semibold">Settings</h1>
        <div>
          <button className="px-6 py-2 click_btn font-light rounded">
            Save{" "}
          </button>
        </div>
      </div>
      <article className="bg-white rounded-md p-5 flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-[#222222]">
                Company Name
              </label>
              <input placeholder="CarbonCreditListings" className="inputs" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-black">
                Contact Name
              </label>
              <input placeholder="Chris" className="inputs" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-black">
              Company Address
            </label>
            <textarea cols="10" rows="4" className="inputs"></textarea>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-[#222222]">City</label>
              <input placeholder="-" className="inputs " />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-black">State</label>
              <input placeholder="-" className="inputs " />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-[#222222]">
                Contact Number
              </label>
              <input placeholder="998203972337" className="inputs " />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-black">Email</label>
              <input
                placeholder="Enter email"
                className="inputs"
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-[#222222]">
                Password
              </label>
              <input type="password" placeholder="*******" className="inputs" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-black">
                Type of Business
              </label>

              <select className="inputs">
                <option disabled selected className="inputs">
                  Select Business Type
                </option>
              </select>
            </div>
          </div>
        </div>
        {/*  */}
      </article>
    </form>
  );
}

export default CompanySetting;
