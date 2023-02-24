import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Footer, Sidebar } from './components';
import { Domains, Events, Sponsers, Workshops } from './pages';
import Home from './pages/Home';
import Domainadd from './pages/Domainadd';
import Eventadd from './pages/Eventadd';
import Workshopadd from './pages/Workshopadd';
import Sponseradd from './pages/Sponseradd';
import Signup from './components/Signup/Signup.jsx';
import Signin from './components/Signin/Signin.jsx';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu, coordinatorLoggedIn } = useStateContext();

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
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
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
                {coordinatorLoggedIn && <Route path="home" element={(<Home />)} />}
                <Route path="/sign-in" element={(<Signin />)} />

                {/* pages  */}
                {coordinatorLoggedIn && <Route path="/domains" element={<Domains />} />}
                <Route path="/events" element={<Events />} />
                <Route path="/sponsers" element={<Sponsers />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/domainadd" element={<Domainadd />} />
                <Route path="/eventadd" element={<Eventadd />} />
                <Route path="/workshopadd" element={<Workshopadd />} />
                <Route path="/sponseradd" element={<Sponseradd />} />

                {/* charts  */}

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
