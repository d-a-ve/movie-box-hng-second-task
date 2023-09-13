import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="grid-flow-rows grid grid-cols-[5%,_1fr,_5%] md:grid-cols-[1.5rem,_1fr,_1.5rem]">
      <Header />
      <Outlet />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
