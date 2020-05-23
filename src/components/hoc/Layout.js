import React from "react";
import ToolBar from "../Navigation/ToolBar";
import SideDrawer from "../Navigation/SideDrawer";

const Layout = ({ children }) => {
  return (
    <div>
      <ToolBar />
      <SideDrawer />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
