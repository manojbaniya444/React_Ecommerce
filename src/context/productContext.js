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
  cartProducts: [],
  finalCartProducts: [],
  cartDet: {},
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

  const submitHandler = (cartDetails) => {
    dispatch({ type: "SET_CART_DETAILS", payload: cartDetails });
  };

  const removeHandler = (id ,color) =>
  {
    console.log("hello" + id)
    dispatch({type:"REMOVE_ITEM_CART",payload: id + color})
  }
  useEffect(() => {
    getProducts(API);
  }, []);

  //Test

  useEffect(() => {
    dispatch({ type: "DUPLICATE_ITEM_FILTER", payload: state.cartProducts });
  }, [state.cartProducts]);

  return (
    <AppContext.Provider value={{ ...state, submitHandler,removeHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
