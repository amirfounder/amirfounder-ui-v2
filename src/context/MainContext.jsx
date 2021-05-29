import React, { createContext, useContext, useState } from 'react';

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [currentMousePosition, setCurrentMousePosition] = useState({});

  return(
    <MainContext.Provider
      value={{
        currentMousePosition,
        setCurrentMousePosition
      }}
    >
      { children }
    </MainContext.Provider>
  )
}

const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("There was a problem accessing MainContext")
  }
  return context;
}

export {MainProvider, useMainContext};