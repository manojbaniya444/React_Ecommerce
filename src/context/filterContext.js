import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../filterReducer";
import { useGlobalContext } from "./productContext";

const AppContextFilter = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  sortingValue: '',  //default value chainxa chainxa
};

const AppProviderFilter = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useGlobalContext();
  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  }, [products]);

  const sortProducts = (e) => {
    dispatch({ type: "SORT",payload: `${e.target.value}` });
  };

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sortingValue]);

  return (
    <AppContextFilter.Provider value={{ ...state, sortProducts }}>
      {children}
    </AppContextFilter.Provider>
  );
};

export const useGlobalContextFilter = () => {
  return useContext(AppContextFilter);
};

export { AppContextFilter, AppProviderFilter };
