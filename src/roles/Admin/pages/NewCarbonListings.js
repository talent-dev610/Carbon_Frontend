import React from "react";
import { SEO, OptionBtn } from "../../../components";
import NewCarbonListing from "../components/NewCarbonListing";

function NewCarbonListings() {
  return (
    <>
      <SEO title="New Carbon Listing" />
      <OptionBtn
        li="Create Carbon Credit Listings"
        name="Create Carbon  Lists"
        desc="Create Carbon Credit Listings"
        links="/carbon-listings"
      />
      <NewCarbonListing />
    </>
  );
}

export default NewCarbonListings;
