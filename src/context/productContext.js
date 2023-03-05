import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer";
import axios from "axios";
const API = "https://api.pujakaitem.com/api/products";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  filteredProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const res = await axios.get(url);
      const data = await res.data;
      dispatch({ type: "SET_PRODUCTS", payload: data });
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
