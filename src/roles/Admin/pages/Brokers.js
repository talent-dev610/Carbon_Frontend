import React from "react";
import Broker from "../components/Broker";
import { SEO, OptionBtn } from "../../../components";

function Brokers() {
  return (
    <>
      <SEO title="Brokers" />
      <OptionBtn
        title="Brokers"
        url="/create-brokers"
        link=" Create New Broker"
      />
      <Broker />
    </>
  );
}

export default Brokers;
