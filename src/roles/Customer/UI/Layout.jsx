import React from "react";
import { Sidebar, Navbar, MobileScreen } from "../../../components";
import { MdOutlineDashboard } from "react-icons/md";
import { BiBarChartSquare } from "react-icons/bi";

function Layout(props) {
  const links = [
    {
      icon: <MdOutlineDashboard />,
      link: "Dashboard",
      url: "/customer-dashboard",
    },
    {
      icon: <BiBarChartSquare />,
      link: "Land Listings",
      url: "/customer-listing",
    },
  ];
  return (
    <section className="h-screen bg-[#f9f9f9] flex items-center justify-center max-w-screen-2xl my-o mx-auto ">
      <div className="w-full h-full overflow-y-scroll">
        <Navbar url="/customer-dashboard" />
        <MobileScreen url="/customer-dashboard" links={links} />
        <div className="flex flex-col lg:flex-row lg:w-full lg:h-full lg:overflow-y-scroll ">
          <Sidebar links={links} />
          <main className="p-5 lg:w-[80%] md:p-7">{props.children}</main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
