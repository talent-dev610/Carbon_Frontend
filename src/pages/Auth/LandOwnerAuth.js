import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { Wood, Rain_forest, Treees } from "../../Assets/Images";
import { useDropzone } from "react-dropzone";
import {
  acceptStyle,
  baseStyle,
  activeStyle,
  rejectStyle,
} from "../../utils/styles";
import { SEO, Footer, Header } from "../../components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Drag } from "../../Assets/Images";
import { userRegister } from "../../services";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

function LandOwnerAuth(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
    acceptedFiles,
  } = useDropzone({ accept: "image/*" });
  const docDrop = useDropzone({ accept: "image/*" });

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [developed, setDeveloped] = useState(true);
  const [isConfirm, setIsConfirm] = useState(true);
  const [msg, setMsg] = useState("");
  const [fileUpload, setFileUpload] = useState(false);
  const [docfileUpload, setDocFileUpload] = useState(false);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  const formref = useRef();
  const register = async () => {
    let submitForm = new FormData(formref.current);

    submitForm.append("role", 1);
    submitForm.append("developed", developed);

    Object.values(acceptedFiles).forEach((file) => {
      submitForm.append("landPlotImg", file);
    });

    Object.values(docDrop.acceptedFiles).forEach((file) => {
      submitForm.append("ownershipDoc", file);
    });

    if (password != confirm) {
    } else {
      var data = await userRegister(submitForm);
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

  useEffect(() => {
    if (acceptedFiles.length > 0) setFileUpload(true);
    else setFileUpload(false);
  }, [acceptedFiles]);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    if (docDrop.acceptedFiles.length > 0) setDocFileUpload(true);
    else setDocFileUpload(false);
  }, [docDrop.acceptedFiles]);

  const docfiles = docDrop.acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <React.Fragment>
      <SEO title="Carbon || LAND OWNER AUTH" />
      <section className="container">
        <Header url="/login" span="Sign In" text="Already have an account?" />
        <div className="flex flex-col px-5">
          <h1 className="text-4xl text-black font-semibold mt-4">
            Land Owner Registration
          </h1>
          <p className="text-[#4D4D4D] font-normal text-lg mt-3 mb-7 md:w-1/2">
            List your land to sell your Carbon Credits by agreeing not to cut
            trees for a specific time period, have trees panted on your property
            or full reforestation.
          </p>
        </div>

        <form className="flex flex-col gap-4 px-5" ref={formref}>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  Name
                </label>
                <input
                  placeholder="Nirav Parmar"
                  className="inputs"
                  name="name"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">Email</label>
                <input
                  placeholder="Enter customer email"
                  type="email"
                  name="email"
                  className="inputs"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  Carbon Credit Purchaser
                </label>
                <textarea
                  cols="10"
                  rows="4"
                  className="inputs"
                  name="purchaser"
                ></textarea>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">
                  Land Address
                </label>
                <textarea
                  cols="10"
                  rows="4"
                  className="inputs"
                  name="address"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  Years Owned
                </label>
                <input
                  placeholder="10 Years"
                  className="inputs"
                  name="yearsOwned"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">
                  Titled Owner
                </label>
                <input
                  placeholder="Enter name"
                  className="inputs"
                  name="titledOwner"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-[#222222]">
                  Is the land developed or undeveloped?
                </label>
                <div className="flex flex-row gap-2 md:w-full lg:w-[80%]">
                  <div className="w-1/2 inputs">
                    <input
                      type="radio"
                      value="developed"
                      id="developed"
                      className="w-4 h-4 text-green  border-0 focus:ring-green"
                      onChange={() => setDeveloped(true)}
                      checked={developed}
                    />
                    <label
                      for="developed"
                      className="ml-2 text-base font-normal text-green mt-[-2.5px]"
                    >
                      Developed
                    </label>
                  </div>
                  <div className="w-1/2 inputs">
                    <input
                      type="radio"
                      value="undeveloped"
                      id="undeveloped"
                      className="w-4 h-4 text-green  border-0 focus:ring-green"
                      onChange={() => setDeveloped(false)}
                      checked={!developed}
                    />
                    <label
                      for="undeveloped"
                      className="ml-2 text-base font-normal  text-green mt-[-2.5px]"
                    >
                      Undeveloped
                    </label>
                  </div>
                </div>

                {/* end */}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-sm font-medium text-black">
                  Type of trees
                </label>
                <select className="inputs" name="treeType">
                  <option className="inputs">Pine</option>
                  <option className="inputs">Tree</option>
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
                  name="password"
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
                  className="inputs"
                  name="checkpassword"
                  type="password"
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
              {isConfirm ? "" : <div style={{ color: "red" }}>{msg}</div>}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
              <div
                className="flex flex-col gap-1.5 w-full "
                style={{ cursor: "pointer" }}
              >
                <label className="text-sm font-medium text-[#222222] mb-[8px]">
                  Upload a land plot image
                </label>
                <div {...getRootProps({ style })}>
                  <input {...getInputProps()} type="file" multiple />
                  <div>
                    <img src={Drag} alt="Drag" />
                  </div>
                  <p className="text-black mt-[6px] mb-[8px]">
                    Drag and Drop image or&nbsp;
                    <span className="text-green">Browse.</span>
                  </p>
                  <small className="text-xs text-black font-normal">
                    Format: png, jpg
                  </small>
                  {fileUpload ? files : ""}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div
                className="flex flex-col gap-1.5 w-full "
                style={{ cursor: "pointer" }}
              >
                <label className="text-sm font-medium text-black mb-[8px]">
                  Upload a ownership document
                </label>
                <div {...docDrop.getRootProps({ style })}>
                  <input {...docDrop.getInputProps()} multiple />
                  <div>
                    <img src={Drag} alt="Drag" />
                  </div>
                  <p className=" text-black mt-[6px] mb-[8px]">
                    Drag and Drop image or&nbsp;
                    <span className="text-green">Browse.</span>
                  </p>
                  <small className="text-xs text-black font-normal">
                    Format: png, jpg, pdf
                  </small>
                  {docfileUpload ? docfiles : ""}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex w-1/2 gap-4">
              <figure>
                <img src={Rain_forest} alt="Rain_forest" />
              </figure>
              <figure>
                <img src={Wood} alt="wood" />
              </figure>
              <figure>
                <img src={Treees} alt="wood" />
              </figure>
            </div>
            <div className="w-full md:w-1/2"></div>
          </div>

          <div className="mb-16">
            <button
              onClick={() => register()}
              type="button"
              className="px-6 py-4 click_btn flex items-center"
            >
              REGISTER NOW !
              <AiOutlineArrowRight style={{ marginLeft: "10px" }} />
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default LandOwnerAuth;
