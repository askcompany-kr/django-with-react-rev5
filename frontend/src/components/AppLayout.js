import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

function AppLayout({ children }) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}

export default AppLayout;
