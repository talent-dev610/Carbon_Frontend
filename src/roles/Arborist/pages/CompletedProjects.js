import React from "react";
import { SEO, OptionBtn } from "../../../components";
import CompletedProject from "../components/CompletedProject";

function CompletedProjects() {
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
      <SEO title="Completed Projects" />
      <OptionBtn title="Completed Projects" />
      <CompletedProject projects={projects} />
    </>
  );
}

export default CompletedProjects;
