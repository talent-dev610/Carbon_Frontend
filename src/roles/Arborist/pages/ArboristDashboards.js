import { SEO } from "../../../components";
import ArboristDashboard from "../components/ArboristDashboard";

function ArboristDashboards() {
  const projects = [
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
      <SEO title="Arborist || Dashboard" />
      <ArboristDashboard projects={projects} />
    </>
  );
}

export default ArboristDashboards;
