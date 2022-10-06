import React from "react";
import NewListing from "../components/NewListing";
import { SEO, OptionBtn } from "../../../components";

function NewListings() {
  const projects = [
    {
      name: "Wade Warren",
      addy: "2464 Royal Ln. Mesa, New Jersey 45463",
      owned: "22 y",
      status: "Developed",
    },
    {
      name: "Robert Fox",
      addy: "2715 Ash Dr. San Jose, South Dakota 83475",
      owned: "28 y",
      status: "Developed",
    },
    {
      name: "Wade Warren",
      addy: "2464 Royal Ln. Mesa, New Jersey 45463",
      owned: "22 y",
      status: "Developed",
    },
    {
      name: "Dianne Russell",
      addy: "3517 W. Gray St. Utica, Pennsylvania 57867",
      owned: "24 y",
      status: "UnDeveloped",
    },
    {
      name: "Robert Fox",
      addy: "2715 Ash Dr. San Jose, South Dakota 83475",
      owned: "28 y",
      status: "Developed",
    },
    {
      name: "Wade Warren",
      addy: "2464 Royal Ln. Mesa, New Jersey 45463",
      owned: "22 y",
      status: "Developed",
    },
    {
      name: "Dianne Russell",
      addy: "3517 W. Gray St. Utica, Pennsylvania 57867",
      owned: "24 y",
      status: "UnDeveloped",
    },
    {
      name: "Robert Fox",
      addy: "2715 Ash Dr. San Jose, South Dakota 83475",
      owned: "28 y",
      status: "Developed",
    },
  ];
  return (
    <>
      <SEO title="New Listings" />
      <OptionBtn title="New Land Listings" />
      <NewListing projects={projects} />
    </>
  );
}

export default NewListings;
