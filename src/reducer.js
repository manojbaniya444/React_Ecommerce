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
  if (action.type === "SET_CART_DETAILS") {
    return {
      ...state,
      cartProducts: [...state.finalCartProducts, action.payload],
      cartDet: action.payload,
    };
  }
  if (action.type === "DUPLICATE_ITEM_FILTER") {
    const temp = action.payload;
    const uniqueItem = [...new Set(temp.map(JSON.stringify))].map(JSON.parse);
    return {
      ...state,
      finalCartProducts: uniqueItem,
    };
  }
  if (action.type === "REMOVE_ITEM_CART") {
    let temp = state.finalCartProducts;

    let updated = temp.filter((item) => item.id + item.color !== action.payload);
    console.log(updated);
    return {
      ...state,
      finalCartProducts: updated,
    };
  }

  return state;
};

export default reducer;
