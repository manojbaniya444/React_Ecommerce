const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        filteredProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    case "SORT": {
      // let userSortValue = document.getElementById("product");
      // let sortvalue = userSortValue.options[userSortValue.selectedIndex].value;
      let sortvalue = action.payload;
      return {
        ...state,
        sortingValue: sortvalue,
      };
    }

    case "SORTING_PRODUCTS": {
      let sortedData;
      let tempSortData = [...action.payload];
      if (state.sortingValue === "z-a") {
        sortedData = tempSortData
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
      }
      if (state.sortingValue === "a-z") {
        sortedData = tempSortData
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
      }
      if (state.sortingValue === "price-low") {
        sortedData = tempSortData.slice().sort((a, b) => a.price - b.price);
      }
      if (state.sortingValue === "price-high") {
        sortedData = tempSortData.slice().sort((a, b) => b.price - a.price);
      }
      if (state.sortingValue === "") {
        sortedData = action.payload;
      }
      return {
        ...state,
        filteredProducts: sortedData,
      };
    }

    case "SET_FILTER_TEXT": {
      return {
        ...state,
        filters: { text: action.payload },
      };
    }

    case "FILTER_PRODUCTS": {
      let newProduct = [...state.allProducts];
      const { text } = state.filters;

      if(text){
        newProduct = newProduct.filter((item)=>
        {
          return item.name.toLowerCase().includes(text);
        })
      }
      return {
        ...state,
        filteredProducts:newProduct,
      };
    }
    default:
      return state;
  }
};

export default reducer;
