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
        filteredProducts: [...sortedData],
      };
    }

    //setting the filter value start
    case "SET_FILTER_TEXT": {
      return {
        ...state,
        filters: { ...state.filters, text: action.payload },
      };
    }
    case "SET_CATEGORY_TEXT": {
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    }
    case "SET_COLOR": {
      return {
        ...state,
        color: action.payload,
        filters: { ...state.filters, colored: action.payload },
      };
    }

    case "SET_COLOR_ALL": {
      return {
        ...state,
        color: null,
        filters: {
          ...state.filters,
          colored: action.payload,
        },
      };
    }
    case "SET_COMPANY": {
      return {
        ...state,
        filters: { ...state.filters, company: action.payload },
      };
    }
    //setting filter value end

    case "FILTER_PRODUCTS": {
      let newProduct = [...state.allProducts];
      // console.log(state.allProducts);
      const { text, category, colored, company } = state.filters;
      // console.log(company);

      if (text) {
        newProduct = newProduct.filter((item) => {
          return item.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        newProduct = newProduct.filter((item) => item.category === category);
      }
      if (colored !== "all") {
        newProduct = newProduct.filter((item) => item.colors.includes(colored));
      }
      if (company !== "all") {
        newProduct = newProduct.filter((item) => item.company === company);
      }
      return {
        ...state,
        filteredProducts: newProduct,
      };
    }
    default:
      return state;
  }
};

export default reducer;
