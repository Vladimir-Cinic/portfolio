import React, { useState, useContext, useEffect, useReducer } from 'react';
import { data } from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const reducer = (state, action) => {
    if (action.type === 'OPENED') {
      return {
        isModalOpen: true,
        modalContent: action.payload,
      };
    }
    if (action.type === 'CLOSED') {
      return {
        isModalOpen: false,
        modalContent: {},
      };
    }
    return state;
  };
  const defaultState = {
    isModalopen: false,
    modalContent: '',
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleOpenModal = (id) => {
    const [clickedProject] = data.filter((item) => item.id === id);
    dispatch({
      type: 'OPENED',
      payload: { ...clickedProject },
    });
  };

  const handleCloseModal = () => {
    dispatch({
      type: 'CLOSED',
    });
  };
  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
        state,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
