import React, { useEffect, useMemo, useState } from "react";
import { SEO, Footer, Header } from "../../components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { userRegister } from "../../services";

function CustomerPurchase() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [contactName, setContactName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [contactNumber, setContactNumber] = useState(true);
  const [isConfirm, setIsConfirm] = useState(true);
  const [msg, setMsg] = useState("");
  const [creditRequired, setCreditRequired] = useState("");
  const [businessType, setBussinessType] = useState("");

  const [purchaser, setPurchaser] = useState("");
  const [yearsOwned, setYearsOwned] = useState("");
  const [titledOwner, setTitledOwner] = useState("");
  const [developed, setDeveloped] = useState(true);
  const [treeType, setTreeType] = useState("Pine");
  const [landPlotImage, setLandPlotImage] = useState("");
  const [ownershipDoc, setOwnerShipDoc] = useState("");
  const [role, setRole] = useState(2);

  const register = async () => {
    const registerData = {
      name: name,
      email: email,
      password: password,
      contactName: contactName,
      address: address,
      city: city,
      state: state,
      contactNumber: contactNumber,
      creditRequired: creditRequired,
      businessType: businessType,
      purchaser: "",
      yearsOwned: "",
      titledOwner: "",
      developed: false,
      treeType: "",
      landPlotImage: "",
      ownershipDoc: "",
      role: 2,
    };

    if (password != confirm) {
    } else {
      var data = await userRegister(registerData);
      if (data.success) {
        alert("Register Success!");
      } else {
        alert(data.data);
      }
    }
  };

  useEffect(() => {
    if (confirm != password) {
      setIsConfirm(false);
      setMsg("Password is not confirmed!");
    } else {
      setIsConfirm(true);
    }
  }, [confirm]);

  return (
    <React.Fragment>
      <SEO title="Carbon || Customer Purchase" />
      <section className="container">
        <Header url="/login" span="Sign In" text="Already have an account?" />
        <div className="flex flex-col px-5">
          <h1 className="text-4xl text-black font-semibold mt-4">
            Carbon Credit Purchaser
          </h1>
          <p className="text-[#4D4D4D] font-normal text-lg mt-3 mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lib.
          </p>
        </div>

        <div className="flex flex-col gap-4 px-5">
          <h1 className="db_header ">Carbon Credit Buyer Information</h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  Carbon Credit Buyer Name
                </label>
                <input
                  placeholder="Nirav Parmar"
                  className="inputs "
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">
                  Contact Name
                </label>
                <input
                  placeholder="Enter customer email"
                  className="inputs "
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-black">
                Carbon Credit Buyer Address
              </label>
              <textarea
                cols="10"
                rows="4"
                className="inputs"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  City
                </label>
                <input
                  placeholder="Enter city"
                  className="inputs "
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">State</label>
                <input
                  placeholder="Enter state"
                  className="inputs "
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  Contact Number
                </label>
                <input
                  placeholder="Enter contact nuber"
                  className="inputs "
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">Email</label>
                <input
                  placeholder="Enter email"
                  className="inputs "
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  Credits Required
                </label>
                <input
                  placeholder="1000 kg"
                  className="inputs "
                  onChange={(e) => setCreditRequired(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">
                  Type of Business
                </label>

                <select
                  className="inputs"
                  onChange={(e) => setBussinessType(e.target.value)}
                >
                  <option className="inputs">Enterprise</option>
                  <option className="inputs">MyBussiness</option>
                  {/* <option disabled selected className="inputs">
                    Select Business Type
                  </option> */}
                </select>
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
                  className="inputs "
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">
                  Confirm Password
                </label>
                <input
                  placeholder="Enter Confirm Password "
                  className="inputs "
                  type="password"
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
              {isConfirm ? "" : <div style={{ color: "red" }}>{msg}</div>}
            </div>
          </div>

          <div className="mb-16">
            <button
              className="px-6 py-4 click_btn flex items-center"
              onClick={() => register()}
            >
              REGISTER NOW !
              <AiOutlineArrowRight style={{ marginLeft: "10px" }} />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default CustomerPurchase;
