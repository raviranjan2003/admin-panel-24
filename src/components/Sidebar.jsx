import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { SiShopware } from "react-icons/si";
// import { MdOutlineCancel } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import { Domains, Events, Sponsers, Workshops } from "../pages";
import './Sidebar.css';
import logo from './logo.png';
// import { links } from "../data/dummy";
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const navigate = useNavigate();
  const { coordinatorLoggedIn, logOutHandler, role } = useStateContext();

  return (
    <div className="containerSidebar">
      <div className="sidebarItems">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="techFEST'23" />
          </Link>
        </div>

        {coordinatorLoggedIn && role == 892348 && (
        <div className="item">
          <Link to="/home">Admin</Link>
        </div>
        )}
        {coordinatorLoggedIn && role == 892348 && (
        <div className="item">
          <Link to="/users">Users</Link>
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
        {coordinatorLoggedIn && role == 892348 && (
        <div className="item">
          <Link to="/workshops">Workshops</Link>
        </div>
        )}
        {coordinatorLoggedIn && role == 892348 && (
        <div className="item">
          <Link to="/sponsers">Sponsers</Link>
        </div>
        )}
        {
        coordinatorLoggedIn ?
          (
            <div className="item logOut" onClick={logOutHandler}>
              <Link to="/">Log Out</Link>
            </div>
          )
          :
          (
            <div className="item logOut">
              <Link to="/sign-in">Log In</Link>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Sidebar;
