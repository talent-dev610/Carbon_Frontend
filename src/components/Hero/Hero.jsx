import React from "react";
import "./Hero.css";
import { Hero_img } from "../../Assets/Images";
import {
  Small_right,
  Big_right,
  carbonright,
  faint_carbon,
  light_carbon,
} from "../../Assets/Carbon";
import { useHistory } from "react-router-dom";

function Hero() {
  const history = useHistory();
  return (
    <div className="hero">
      <div className="container">
        <div className="rel hero_box">
          <div className="img_icon big_right abs" style={{ width: "70px" }}>
            <img src={Big_right} alt="carbonright" />
          </div>
          <div className="img_icon big_left abs" style={{ width: "70px" }}>
            <img src={Big_right} alt="carbonright" />
          </div>
          <div className="small_icon carbonright abs" style={{ width: "40px" }}>
            <img src={carbonright} alt="carbonright" />
          </div>
          <div className="small_icon small_right abs" style={{ width: "40px" }}>
            <img src={Small_right} alt="smallright" />
          </div>
          <div
            className="small_icon carbonright_two abs"
            style={{ width: "60px" }}
          >
            <img src={light_carbon} alt="smallright" />
          </div>
          <div
            className="small_icon carbonright_three abs"
            style={{ width: "40px" }}
          >
            <img src={light_carbon} alt="smallright" />
          </div>
          <div className="hero_details flex_Box flex_Dir text_ct gap-[16px]">
            <h1>
              Live&nbsp;
              <span className="font-extrabold text-green">Carbon</span>
              &nbsp;Neutral and&nbsp;
              <span className="font-extrabold text-green">
                Credit Yourself with
              </span>
              &nbsp;a Better Future.
            </h1>
            <p>
              We are proud to introduce the Worlds first platform that provide
              land owners with a quick, safe and easy way to register, certify
              and offer Carbon Credits derived from trees on ther property.
              Corporations are easily able to purchase Carbon Credits to offset
              emissions.
            </p>
            <div
              className="hero_btn"
              onClick={() => history.push("/carbon-credit")}
            >
              <button className="click_btn">View Carbon Credit</button>
            </div>
            <div className="hero_img">
              <img src={Hero_img} alt="hero" />
            </div>
          </div>
          <div className="img_icon faint_carbon abs" style={{ width: "70px" }}>
            <img src={faint_carbon} alt="smallright" />
          </div>
          <div className="big_icon faint_Carbon abs" style={{ width: "100px" }}>
            <img src={light_carbon} alt="smallright" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
