import React from "react";
import Layout from "../UI/Layout";
import { SEO, OptionBtn } from "../../../components";
import CreateLand from "../components/CreateLand";

function CustomerLands() {
  return (
    <>
      <SEO title="Create Land" />
      <OptionBtn
        li="Add New Land"
        name="Land Listings"
        desc="Add New Land"
        links="/customer-listing"
      />
      <CreateLand />
    </>
  );
}

export default CustomerLands;
