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
import { useState } from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const { coordinatorLoggedIn, logOutHandler, role, domain } = useStateContext();
  const [dom, setDom] = useState(domain);
  return (
    <div className="containerSidebar" style={(coordinatorLoggedIn && role == 892348) ? {} : {background: 'rgb(5, 79, 17)',
    background: 'linear-gradient(135deg,rgba(5, 79, 17, 0.99) 9%,rgba(0, 0, 0, 1) 50%,rgba(5, 62, 15, 1) 93%)', height:'600px', marginTop:
    "40px"}}>
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

        {coordinatorLoggedIn && (role == 948759 || role == 3924875) && (
        <div className="item">
        <Link to={`/events/domain/${domain}`}>Events</Link>
        </div>
        )}
        {coordinatorLoggedIn && role == 892348 && (
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
            <div className="item logOut" onClick= {() => {
              logOutHandler();
              window.location.reload(false);
            }}>
              <Link to="/">Log Out</Link>
            </div>
          )
          :
          (
            // <div className="item logOut">
            //   <Link to="/sign-in">Log In</Link>
            // </div>
            <div></div>
          )
        }
      </div>
    </div>
  );
};

export default Sidebar;
