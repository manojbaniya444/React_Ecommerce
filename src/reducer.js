const reducer = (state, action) => {
  if (action.type === "SET_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
      featuredProducts: state.products.filter((item) => item.featured === true),
      isLoading: false,
    };
  }
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "SET_SINGLE_PRODUCT") {
    return {
      ...state,
      singleProduct: action.payload,
      isLoading: false,
    };
  }



  return state;
};

export default reducer;
