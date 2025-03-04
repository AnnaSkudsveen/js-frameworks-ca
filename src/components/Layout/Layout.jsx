import { Outlet } from "react-router-dom";
import Navbar from "./header";
import Footer from "./Footer";
import React from "react";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
