import React from "react";
import Layout from "../UI/Layout";
import { SEO, OptionBtn } from "../../../components";
import CarbonListing from "../components/CarbonListing";

function CarbonListings() {
  return (
    // <Layout>
    <>
      <SEO title="Carbon Listings" />
      <OptionBtn
        title="Carbon Listings"
        url="/create-carbon"
        link="Create Carbon Credit"
      />
      <CarbonListing />
    </>
    // </Layout>
  );
}

export default CarbonListings;
