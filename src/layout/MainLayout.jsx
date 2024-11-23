import React,{useState} from "react";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [show, setShow] = useState(false);

  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      <Sidebar show={show} />

      <div
        className="flex-grow-1"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopNavbar show={show} setShow={setShow} />

        <div
          style={{
            flexGrow: 1, // Ensures the content expands
            overflowY: "auto", // Enables scrolling when necessary
            WebkitOverflowScrolling: "touch", // Smooth scrolling on mobile devices
            scrollbarWidth: "thin", // Makes scrollbar thinner
            msOverflowStyle: "none", // Hides scrollbar in older Internet Explorer
          }}
        >
          <div className="p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
