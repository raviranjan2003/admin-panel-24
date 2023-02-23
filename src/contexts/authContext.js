import React, { createContext, useState } from 'react';

let resetLogoutTimer;

const AuthContext = createContext({
  token: '',
  isCoordinatorLoggedIn: false,
  coordinatorRole: '',
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
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

  const authContextValue = {
    token,
    login: loginHandler,
    isCoordinatorLoggedIn: coordinatorLoggedIn,
    logout: logOutHandler,
  };

  return (
    <AuthContextProvider value={authContextValue}>
      { props.children }
    </AuthContextProvider>
  );
};
export default AuthContext;
