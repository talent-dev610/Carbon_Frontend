import React from "react";
import { SEO, OptionBtn } from "../../../components";
import LandOwner from "../components/LandOwner";

function LandOwners() {
  return (
    <>
      <SEO title="Land Owners" />
      <OptionBtn title="Land Owners" />
      <LandOwner />
    </>
  );
}

export default LandOwners;
