import React, { useEffect, useMemo, useState } from "react";
import { SEO, Footer, Header } from "../../components";
import { Signin } from "../../Assets/Images";
import { AiOutlineArrowRight } from "react-icons/ai";
import { signInUser } from "../../services/";
import "./Auth.css";

function Login() {
  const signIn = async () => {
    try {
      const signInData = {
        email: email,
        password: password,
      };
      var data = await signInUser(signInData);
      if (data.status == 200) {
        alert("Success!!!!");
        localStorage.setItem("token", data.data.token);
      } else {
        alert("You are Fool man");
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
      <SEO title="Carbon || Login " />
      <div className="bg">
        <section className="container">
          <Header
            url="/register"
            span="Register"
            text="Dont Have an account ?"
          />
          <article className="flex flex-col mt-8  gap-10 lg:flex-row lg:gap-4">
            <div className="flex flex-col gap-4 auth_desc lg:w-1/2 lg:mr-5">
              <h1 className="text-black font-normal text-4xl font-body">
                Welcome to our community
              </h1>

              <p className="text-[#4d4d4d] font-normal font-workbody">
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
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 mt-5">
                  <label className="text-black font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter customer email"
                    className="inputs"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-black font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="inputs text-[#4D4D4D]"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    className="px-6 py-4 click_btn flex items-center"
                    onClick={() => {
                      signIn();
                    }}
                  >
                    SIGN IN NOW !
                    <AiOutlineArrowRight style={{ marginLeft: "10px" }} />
                  </button>
                </div>
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

export default Login;
