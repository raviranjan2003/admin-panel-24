import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Footer, Sidebar } from './components';
import { Domains, Events, Sponsers, Workshops } from './pages';
import Home from './pages/Home';
import Users from './pages/Users';
import Domainadd from './pages/Domainadd';
import Eventadd from './pages/Eventadd';
import Eventedit from './pages/Eventedit.jsx';
import Workshopadd from './pages/Workshopadd';
import Workshop from './pages/Workshop';
import Sponseradd from './pages/Sponseradd';
import Signup from './components/Signup/Signup.jsx';
import Signin from './components/Signin/Signin.jsx';
import './App.css';
import Eventdomain from './pages/Eventdomain';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu, coordinatorLoggedIn, role } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div> */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white " style={{background: "rgb(0,14,14)",
            background: "linear-gradient(90deg, rgba(0,14,14,1) 100%, rgba(22,217,0,1) 100%)", zIndex:"10"}}>
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {/* {themeSettings && (<ThemeSettings />)} */}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Signup />)} />
                {coordinatorLoggedIn && role == 892348 && <Route path="home" element={(<Home />)} />}
                <Route path="/sign-in" element={(<Signin />)} />
                <Route path="/workshop/:id" element={<Workshop />} />
                {/* pages  */}
                {coordinatorLoggedIn && <Route path="/domains" element={<Domains />} />}
                {coordinatorLoggedIn && <Route path="/events" element={<Events />} />}
                {coordinatorLoggedIn && role == 892348 && <Route path="/sponsers" element={<Sponsers />} />}
                {coordinatorLoggedIn && role == 892348 && <Route path="/workshops" element={<Workshops />} />}
                {coordinatorLoggedIn && role == 892348 && <Route path="/domainadd" element={<Domainadd />} />}
                {coordinatorLoggedIn && role == 948759 &&<Route path="/eventadd" element={<Eventadd />} />}
                {coordinatorLoggedIn && role == 948759  && <Route path="/eventedit/:id" element={<Eventedit />} />}
                {coordinatorLoggedIn && role == 892348 && <Route path="/workshopadd" element={<Workshopadd />} />}
                {coordinatorLoggedIn && role == 892348 && <Route path="/sponseradd" element={<Sponseradd />} />}
                {coordinatorLoggedIn && role == 892348 && <Route path="/users" element={<Users />} />}
                {coordinatorLoggedIn && (role == 948759 || role == 3924875) && <Route path="/events/domain/:domain" element={<Eventdomain />} />}

                {/* charts  */}

              </Routes>
            </div>
            {coordinatorLoggedIn && role == 892348 && (<Footer />)}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
