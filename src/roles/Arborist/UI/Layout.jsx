import React from "react";
import { Sidebar, Navbar, MobileScreen } from "../../../components";
import { MdOutlineDashboard, MdOutlineScience } from "react-icons/md";
import { BiBarChartSquare } from "react-icons/bi";

function Layout(props) {
  const links = [
    {
      icon: <MdOutlineDashboard />,
      link: "Dashboard",
      url: "/arborist-dashboard",
    },
    {
      icon: <BiBarChartSquare />,
      link: "Land Listings",
      subLinks: [
        {
          link: "Pending Projects",
          path: "/pending-projects",
        },
        {
          link: "Completed Projects",
          path: "/completed-projects",
        },
      ],
    },

    {
      icon: <MdOutlineScience />,
      link: "Carbon List Listings",
      url: "/carbon-listings",
    },
  ];
  return (
    <section className="h-screen bg-[#f9f9f9] flex items-center justify-center max-w-screen-2xl my-o mx-auto">
      <div className="w-full h-full overflow-y-scroll">
        <Navbar url="/arborist-dashboard" />
        <MobileScreen url="/arborist-dashboard" links={links} />
        <div className="flex flex-col lg:flex-row lg:w-full lg:h-full lg:overflow-y-scroll ">
          <Sidebar links={links} />
          <main className="p-5 pb-16 lg:w-[80%] md:p-7">{props.children}</main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
