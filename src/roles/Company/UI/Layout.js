import React from "react";
import { Sidebar, Navbar, MobileScreen } from "../../../components";
import { FiSettings } from "react-icons/fi";
import { BsArrowCounterclockwise } from "react-icons/bs";

function Layout(props) {
  const links = [
    {
      icon: <BsArrowCounterclockwise />,
      link: "Purchase History",
      url: "/company-history",
    },
    {
      icon: <FiSettings />,
      link: "Settings",
      url: "/company-settings",
    },
  ];
  return (
    // <section className="h-screen bg-[#f9f9f9] flex items-center justify-center max-w-screen-2xl my-o mx-auto">
    //   <div className="w-full h-full overflow-y-scroll">
    //     <Navbar url="/company-history" />
    //     <MobileScreen url="/company-history" links={links} />
    //     <div className="flex flex-col lg:flex-row lg:w-full lg:h-full lg:overflow-y-scroll ">
    //       <Sidebar links={links} />
    //       <main className="p-5 pb-16 lg:w-[80%] md:p-7">{props.children}</main>
    //     </div>
    //   </div>
    // </section>

    // <section className="h-screen bg-[#f9f9f9] flex items-center justify-center max-w-screen-2xl my-o mx-auto">
    //   <div className="w-full h-full overflow-y-scroll">
    //     <Navbar url="/company-history" />
    //     <MobileScreen url="/company-history" links={links} />
    //   </div>
    //   <div className="flex flex-col lg:flex-row lg:w-full lg:h-full lg:overflow-y-scroll ">
    //     <Sidebar links={links} />
    //     <main className="p-5 pb-16 lg:w-[80%] md:p-7">{props.children}</main>
    //   </div>
    // </section>
    <section className="h-screen bg-[#f9f9f9] flex items-center justify-center max-w-screen-2xl my-o mx-auto">
      <div className="w-full h-full overflow-y-scroll">
        <Navbar url="/company-history" />
        <MobileScreen url="/company-history" links={links} />
        <div className="flex flex-col lg:flex-row lg:w-full lg:h-full lg:overflow-y-scroll ">
          <Sidebar links={links} />
          <main className="p-5 pb-16 lg:w-[80%] md:p-7">{props.children}</main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
