import { SEO, OptionBtn } from "../../../components";
import CompanyDetail from "../components/CompanyDetail";

function CompanyDetails() {
  return (
    <>
      <SEO title="Company || Detail" />
      <OptionBtn
        li="History Details"
        name="Purchase History"
        desc="History Details"
        links="/company-history"
      />
      <CompanyDetail />
    </>
  );
}

export default CompanyDetails;
