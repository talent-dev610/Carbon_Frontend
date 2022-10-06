import { SEO, OptionBtn } from "../../../components";
import CompanyHistory from "../components/CompanyHistory";

function CompanyHistorys() {
  const projects = [
    {
      status: "Developed",
    },
    {
      status: "Pending",
    },
    {
      status: "Developed",
    },
    {
      status: "Developed",
    },
    {
      status: "Developed",
    },
    {
      status: "Developed",
    },
    {
      status: "Developed",
    },
    {
      status: "Developed",
    },
  ];
  return (
    <>
      <SEO title="Company || History" />
      <OptionBtn title="Purchase History" />
      <CompanyHistory projects={projects} />
    </>
  );
}

export default CompanyHistorys;
