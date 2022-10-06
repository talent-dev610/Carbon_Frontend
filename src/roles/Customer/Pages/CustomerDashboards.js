import React from "react";
import { SEO } from "../../../components";
import CustomerDashboard from "../components/CustomerDashboard";

function CustomerDashboards() {
  const projects = [
    {
      name: "Wade Warren",
      addy: "2464 Royal Ln. Mesa, New Jersey 45463",
      owned: "22 y",
      status: "Approved",
    },

    {
      name: "Dianne Russell",
      addy: "3517 W. Gray St. Utica, Pennsylvania 57867",
      owned: "24 y",
      status: "Pending",
    },
    {
      name: "Robert Fox",
      addy: "2715 Ash Dr. San Jose, South Dakota 83475",
      owned: "28 y",
      status: "Approved",
    },
    {
      name: "Dianne Russell",
      addy: "3517 W. Gray St. Utica, Pennsylvania 57867",
      owned: "24 y",
      status: "Pending",
    },
    {
      name: "Robert Fox",
      addy: "2715 Ash Dr. San Jose, South Dakota 83475",
      status: "Approved",
    },
  ];
  return (
    <>
      <SEO title="Dashboard" />
      <CustomerDashboard projects={projects} />
    </>
  );
}

export default CustomerDashboards;
