import React from 'react';
import { Link } from 'react-router-dom';
// import { SiShopware } from "react-icons/si";
// import { MdOutlineCancel } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import { Domains, Events, Sponsers, Workshops } from "../pages";
import './Sidebar.css';
import logo from './logo.png';
// import { links } from "../data/dummy";
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { coordinatorLoggedIn } = useStateContext();

  return (
    <div className="containerSidebar">
      <div className="sidebarItems">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="techFEST'23" />
          </Link>
        </div>

        {coordinatorLoggedIn && (
        <div className="item">
          <Link to="/home">Home</Link>
        </div>
        )}
        {coordinatorLoggedIn && (
        <div className="item">
          <Link to="/domains">Domains</Link>
        </div>
        )}
        {coordinatorLoggedIn && (
        <div className="item">
          <Link to="/events">Events</Link>
        </div>
        )}
        {coordinatorLoggedIn && (
        <div className="item">
          <Link to="/workshops">Workshops</Link>
        </div>
        )}
        {coordinatorLoggedIn && (
        <div className="item">
          <Link to="/sponsers">Sponsers</Link>
        </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
