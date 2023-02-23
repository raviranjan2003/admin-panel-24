import React, { createContext, useContext, useState } from 'react';

let resetLogoutTimer;

const StateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
  token: '',
  isCoordinatorLoggedIn: false,
  coordinatorRole: '',
  login: () => {},
  logout: () => {},
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const localToken = localStorage.getItem('token');
  // const localExpiryDate = localStorage.getItem('expiry');
  // const coordinatorId = localStorage.getItem('coordinatorId');
  const [token, setToken] = useState(localToken);
  // const [expiryDate, setExpiryDate] = useState(localExpiryDate);
  let coordinatorLoggedIn = !!token;

  const calculateRemainingTime = (expiry) => {
    const currentTime = new Date().getTime();
    const adjExpiryDate = new Date(expiry).getTime();
    const remainingTime = adjExpiryDate - currentTime;
    return remainingTime;
  };

  const logOutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('coordinatorId');
    localStorage.removeItem('coordinatorRole');
    localStorage.removeItem('expiry');
    if (resetLogoutTimer) {
      clearTimeout(resetLogoutTimer);
    }
  };
  const loginHandler = (coordinator) => {
    localStorage.setItem('token', coordinator.token);
    localStorage.setItem('coordinatorId', coordinator.coordinatorId);
    const remainingMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const expiry = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem('expiry', expiry.toISOString());
    setToken(coordinator.token);
    coordinatorLoggedIn = true;
    const remainingTime = calculateRemainingTime(expiry);
    resetLogoutTimer = setTimeout(logOutHandler, remainingTime);
  };

  // const authContextValue = {
  //   token,
  //   login: loginHandler,
  //   isCoordinatorLoggedIn: coordinatorLoggedIn,
  //   logout: logOutHandler,
  // };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ activeMenu, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, localToken, token, setToken, calculateRemainingTime, logOutHandler, loginHandler, coordinatorLoggedIn }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
