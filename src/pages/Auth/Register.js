import React from "react";
import { SEO, Footer, Header } from "../../components";
import { Signin } from "../../Assets/Images";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineUser } from "react-icons/ai";
import Polygon_two from "./Polygon_two.svg";
import { FaHandsHelping } from "react-icons/fa";
import "./Auth.css";

function Register() {
  return (
    <React.Fragment>
      <SEO title="Carbon || Register" />
      <div className="bg">
        <section className="container">
          <Header url="/login" span="Sign In" text="Already have an account?" />
          <article className="flex flex-col mt-8  gap-10 lg:flex-row lg:gap-4">
            <div className="flex flex-col gap-4 auth_desc lg:w-1/2 lg:mr-5">
              <h1 className="text-black font-normal text-4xl font-body">
                Welcome to our community
              </h1>

              <p className="text-[#4d4d4d] font-normal">
                This is an exchange where Individuals, Organizations and
                Companies can purchase Carbon Credits controlled by a one year
                term contract and Landowners can list their land for carbon
                sequestration.
              </p>
              <div className="auth_img hidden lg:block">
                <img src={Signin} alt="Signin" />
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:w-1/2">
              <h1 className="text-black font-semibold text-2xl">Sign In</h1>
              <p className="text-[#4D4D4D] font-normal text-base leading-6">
                Click one of the links below to sign in or learn more. It only
                takes a few minutes to register.
              </p>

              <div className="flex flex-col gap-4 mt-6">
                <Link
                  className="div_sty flex gap-3 p-8 animate hover:bold_sty border-green"
                  to="/land-owner"
                >
                  <div className="relative">
                    <div className="w-20">
                      <img src={Polygon_two} alt="polygon" />
                    </div>

                    <AiOutlineUser className="absolute abs text-green top-[30%] ml-7 text-xl lg:mt-2" />
                  </div>
                  <div className="flex flex-col ml-4 gap-3">
                    <p className="font-semibold">Land Owner</p>
                    <p className="text-sm text-[#4D4D4D] font-normal">
                      Click here to register and review our specific and
                      verifiable Carbon Credits
                    </p>
                  </div>
                </Link>
                <Link
                  className="div_sty flex gap-3 p-8"
                  to="/customer-purchase"
                >
                  <div className="relative">
                    <div className="w-20">
                      <img src={Polygon_two} alt="polygon" />
                    </div>

                    <FaHandsHelping className="absolute abs text-green top-[29%] ml-7 text-xl lg:mt-2" />
                  </div>
                  <div className="flex flex-col ml-4 gap-0.5">
                    <p className="font-semibold">Carbon Credit Buyer</p>
                    <AiOutlineArrowRight
                      style={{
                        color: "#008c36",
                        marginLeft: "auto",
                        fontSize: "20px",
                      }}
                    />
                    <p className="text-sm text-[#4D4D4D] font-normal">
                      Click here to register and review our specific and
                      verifiable Carbon Credits
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </article>
          <div className="auth_img lg:hidden lg:w-1/2">
            <img src={Signin} alt="Signin" />
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Register;
