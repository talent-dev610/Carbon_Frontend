import React from "react";
import { SEO, OptionBtn } from "../../../components";
import CustomerDetail from "../components/CustomerDetail";

function CustomerDetails() {
  return (
    <>
      <SEO title="Customer || Details" />
      <OptionBtn
        li="Land Details"
        name="Land Listings"
        desc="Land Listings"
        links="/customer-listing"
      />
      <CustomerDetail />
    </>
  );
}

export default CustomerDetails;
