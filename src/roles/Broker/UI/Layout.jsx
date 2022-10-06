import React from "react";
import { Sidebar, Navbar, MobileScreen } from "../../../components";
import { MdOutlineDashboard, MdOutlineScience } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";

function Layout(props) {
  const links = [
    {
      icon: <MdOutlineDashboard />,
      link: "Dashboard",
      url: "/broker-dashboard",
    },
    {
      icon: <BiBarChartSquare />,
      link: "Land Listings",
      subLinks: [
        {
          link: "New Listings",
          path: "/new-listings",
        },
        {
          link: "Audited Listings",
          path: "/audited-listings",
        },
      ],
    },

    {
      icon: <MdOutlineScience />,
      link: "Carbon List Listings",
      url: "/carbon-listings",
    },
    {
      icon: <AiOutlineUser />,
      link: "Land Owners",
      url: "/land-owners",
    },
    {
      icon: <IoBriefcaseOutline />,
      link: "Carbon Credit Buyers",
      url: "/credit-buyers",
    },
  ];
  return (
    <section className="h-screen bg-[#f9f9f9] flex items-center justify-center max-w-screen-2xl my-o mx-auto">
      <div className="w-full h-full overflow-y-scroll">
        <Navbar url="/broker-dashboard" />
        <MobileScreen url="/broker-dashboard" links={links} />
        <div className="flex flex-col lg:flex-row lg:w-full lg:h-full lg:overflow-y-scroll ">
          <Sidebar links={links} />
          <main className="p-5 pb-16 lg:w-[80%] md:p-7">{props.children}</main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
