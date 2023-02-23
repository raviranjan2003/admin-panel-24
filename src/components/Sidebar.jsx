import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Domains, Events, Sponsers, Workshops } from '../pages';
import './Sidebar.css'
import logo from './logo.png'
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <>

    <div className="containerSidebar">


      <div className="sidebarItems">
    <div className="logo">
          <Link to="/home">
            <img src={logo} alt="techFEST'23" />
          </Link>
        </div>
          <div className='techfestHeader item'><Link to="/home">Home</Link></div>
        <div className='item'><Link to="/domains" >Domains</Link></div>
        <div className='item'><Link to="/events" >Events</Link></div>
        <div className='item'><Link to="/workshops" >Workshops</Link></div>
        <div className='item'><Link to="/sponsers" >Sponsers</Link></div>

      </div>

    </div>
    </>
  );
};

export default Sidebar;
