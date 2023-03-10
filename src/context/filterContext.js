import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../filterReducer";
import { useGlobalContext } from "./productContext";

const AppContextFilter = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  sortingValue: "",
  color: null,
  filters: {
    text: "",
    category: "all",
    colored: "all",
    company: "all",
  },
};

const AppProviderFilter = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useGlobalContext();
  const sortProducts = (e) => {
    dispatch({ type: "SORT", payload: `${e.target.value}` });
  };
  //Input Text Handler
  const inputTextHandler = (e) => {
    let name = e.target.value;
    dispatch({ type: "SET_FILTER_TEXT", payload: name });
  };
  //Category Handler
  const categoryHandler = (e) => {
    e.preventDefault();
    const categoryPayload = e.target.textContent;
    dispatch({ type: "SET_CATEGORY_TEXT", payload: categoryPayload });
  };
  //Color Handler
  const setColor = (item) => {
    dispatch({ type: "SET_COLOR", payload: item });
  };
  const setAllColor = (e) => {
    dispatch({ type: "SET_COLOR_ALL", payload: e.target.textContent });
  };
  //Company Handler
  const companyHandler = (e) => {
    // console.log(e.target.value)
    dispatch({ type: "SET_COMPANY", payload: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters, state.sortingValue]);

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sortingValue, state.filters]);

  return (
    <AppContextFilter.Provider
      value={{
        ...state,
        sortProducts,
        inputTextHandler,
        categoryHandler,
        setColor,
        setAllColor,
        companyHandler,
      }}
    >
      {children}
    </AppContextFilter.Provider>
  );
};

export const useGlobalContextFilter = () => {
  return useContext(AppContextFilter);
};

export { AppContextFilter, AppProviderFilter };
