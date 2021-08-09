import React from "react";
import MainFooter from "./MainFooter";
import MainNavbar from "./MainNavbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <MainNavbar />
      {children}
      <MainFooter />
    </>
  );
};

export default Layout;
