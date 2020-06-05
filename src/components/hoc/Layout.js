import React, { useState } from "react";
import ToolBar from "../Navigation/ToolBar";
import SideDrawer from "../Navigation/SideDrawer";

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const closeSideDrawerHandler = () => {
    setShowSideDrawer(false);
  };
  const toggleSideDrawer = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <div>
      <ToolBar drawerToggle={toggleSideDrawer} />
      <SideDrawer open={showSideDrawer} closed={closeSideDrawerHandler} />
      <main style={{ marginTop: "85px" }}>{children}</main>
    </div>
  );
};

export default Layout;
