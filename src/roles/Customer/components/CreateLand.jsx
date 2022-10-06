import React, { useMemo, useState } from "react";
import { Wood, Rain_forest, Treees, Drag } from "../../../Assets/Images";
import { useDropzone } from "react-dropzone";
import {
  acceptStyle,
  baseStyle,
  activeStyle,
  rejectStyle,
} from "../../../utils/styles";

function CreateLand(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({ accept: "image/*" });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  return (  
    <div className="bg-white rounded-md p-5">
      <form className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-black">
              Land Owner Name
            </label>
            <input placeholder="Enter land owner name" className="inputs " />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-medium text-black">
              Land Address
            </label>
            <textarea cols="10" rows="4" className="inputs  "></textarea>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-[#222222]">
                Age of Trees
              </label>
              <input placeholder="10 Years" className="inputs " />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-black">
                Type of Trees
              </label>

              <select className="inputs">
                <option disabled selected className="inputs">
                  Pine
                </option>
              </select>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-[#222222]">
                Acres
              </label>
              <input placeholder="Enter property size" className="inputs " />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-black">Co2</label>
              <input
                placeholder="Enter amount of carbon "
                className="inputs "
              />
            </div>
          </div>
        </div>
        {/* images */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-[#222222] mb-[8px]">
                Upload a land plot image
              </label>
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
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
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-black mb-[8px]">
                Upload a ownership document
              </label>
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
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
              </div>
            </div>
          </div>
        </div>

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

        <div>
          <button className="click_btn rounded-md py-3 px-5">
            Create Carbon Credit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateLand;
