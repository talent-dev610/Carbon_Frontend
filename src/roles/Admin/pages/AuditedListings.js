import React from "react";
import AuditedListing from "../components/AuditedListing";
import { SEO, OptionBtn } from "../../../components";

function AuditedListings() {
  return (
    <>
      <SEO title="Audited Listings" />
      <OptionBtn title="Audited Listings" />
      <AuditedListing />
    </>
  );
}

export default AuditedListings;
