import React from "react";
import { SEO, Nav, Credits, Footer, BreadCrumb } from "../../components";
import {
  Image_four,
  Image_six,
  Image_five,
  Image_three,
  Image_one,
  Image_two,
} from "../../Assets/Carbon";

function CarbonCredits() {
  const credits = [
    {
      avatar: Image_one,
    },
    { avatar: Image_two },
    { avatar: Image_three },
    { avatar: Image_four },
    { avatar: Image_five },
    { avatar: Image_six },
  ];
  return (
    <React.Fragment>
      <SEO title="Carbon Credits" />
      <Nav bkg text="Purchase Carbon Credits" url="/purchase-carbonCredits" />
      <BreadCrumb
        title="Carbon Credits"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea consequat, venenatis, etiam feugiat. Maecenas id orci eros vitae pellentesque."
      />
      <Credits credits={credits} dollar search />
      <Credits credits={credits} btn dollar />
      <Footer />
    </React.Fragment>
  );
}

export default CarbonCredits;
