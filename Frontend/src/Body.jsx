import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar className="w-full" />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer className="w-full" />
    </div>
  );
}

export default Body;
