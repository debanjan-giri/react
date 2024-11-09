import React, { useState, useMemo } from "react";
import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { LuSquareStack } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { SiSimpleanalytics } from "react-icons/si";
import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineBusinessCenter, MdOutlineFastfood } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
const Sidebar = React.memo(({ show }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(() => {
    const pathName = location.pathname.substring(1);
    return pathName ? pathName.toLowerCase() : "dashboard";
  });

  const menuJson = useMemo(
    () => [
      { name: "dashboard", icon: <RxDashboard size={20} /> },
      { name: "analytics", icon: <SiSimpleanalytics size={20} /> },
      { name: "catalog", icon: <MdOutlineFastfood size={25} /> },
      { name: "employee", icon: <MdOutlineBusinessCenter size={25} /> },
    ],
    []
  );

  const handleNavigation = (name) => {
    setActiveItem(name);
    navigate(`/${name.toLowerCase()}`);
  };

  const renderTooltip = function (name) {
    return function (props) {
      if (show) {
        return <></>;
      }
      return (
        <Tooltip id="button-tooltip" {...props}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Tooltip>
      );
    };
  };
  const getItemClasses = (itemName) => `
    d-flex align-items-center gap-2 px-3 py-2 mx-2 rounded-3 mb-2 transition-all duration-300 cursor-pointer
    ${activeItem === itemName ? "bg-primary text-white fw-bold" : "text-dark"}
    ${show ? "justify-content-start" : "justify-content-center button-tooltip"}
  `;

  const renderMenuItem = (item) => (
    <OverlayTrigger
      key={item.name}
      placement="right"
      delay={{ show: 700, hide: 0 }}
      overlay={renderTooltip(item.name)}
    >
      <Nav.Item
        as="li"
        className={getItemClasses(item.name)}
        onClick={() => handleNavigation(item.name)}
      >
        <span>{item.icon}</span>
        {show && (
          <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
        )}
      </Nav.Item>
    </OverlayTrigger>
  );

  return (
    <div
      className="d-flex flex-column vh-100 bg-light"
      style={{
        width: show ? "180px" : "80px",
        transition: "width 0.3s",
        boxShadow: "0px 0 10px rgba(0, 0, 0, 0.2)",
        minWidth: show ? "180px" : "80px",
      }}
    >
      <p
        className={`d-flex align-items-center gap-2 px-3 fs-5 my-3 cursor-pointer`}
        onClick={() => handleNavigation("dashboard")}
      >
        {show && <LuSquareStack size={20} />}
        <span className="fw-bold text-dark">Billing</span>
      </p>
      <div className="d-flex flex-column justify-content-between flex-grow-1">
        <Nav as="ul" className="flex-column w-100">
          {menuJson.map(renderMenuItem)}
        </Nav>
        <Nav as="ul" className="flex-column w-100">
          {renderMenuItem({
            name: "Settings",
            icon: <IoSettingsOutline size={20} />,
          })}
        </Nav>
      </div>
    </div>
  );
});

export default Sidebar;
