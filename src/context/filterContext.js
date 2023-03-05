import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../filterReducer";
import { useGlobalContext } from "./productContext";

const AppContextFilter = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  sortingValue: "",
  filters: {
    text:"",
  }
};

const AppProviderFilter = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useGlobalContext();

  const sortProducts = (e) => {
    dispatch({ type: "SORT", payload: `${e.target.value}` });
  };

  const inputTextHandler = (e)=>
  {
    let name = e.target.value;
    dispatch({type:"SET_FILTER_TEXT",payload:name})

  }

  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sortingValue]);

  useEffect(()=>
  {
    dispatch({type:"FILTER_PRODUCTS"})
  },[state.filters])

  return (
    <AppContextFilter.Provider
      value={{ ...state, sortProducts, inputTextHandler }}
    >
      {children}
    </AppContextFilter.Provider>
  );
};

export const useGlobalContextFilter = () => {
  return useContext(AppContextFilter);
};

export { AppContextFilter, AppProviderFilter };
