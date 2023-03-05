import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContextFilter } from "../context/filterContext";
import GridView from "./GridView";
import FilterSection from "./FilterSection";
import ListView from "./ListView";
import { MdGridView } from "react-icons/md";
import { MdViewList } from "react-icons/md";
import { useGlobalContext } from "../context/productContext";
const Products = () => {
  const [gridView, setGridview] = useState(true);
  const { isLoading } = useGlobalContext();
  const { filteredProducts, sortProducts } = useGlobalContextFilter();

  // const tempCategory = filteredProducts?.map((item) => {
  //   return item.category;
  // });

  // const category = ["all", ...new Set(tempCategory)];

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  if (filteredProducts.length === 0) {
    return (
      <>
        <FilterSection />
        <p className="loading">No products matched</p>
      </>
    );
  }
  return (
    <ProductWrapper>
      <FilterSection />
      <div className="double-flex">
        <div className="filter">
          <div className="listGrid">
            <MdGridView
              className={`${gridView ? "active icons" : "icons"}`}
              onClick={() => setGridview(true)}
            />
            <MdViewList
              className={`${gridView ? " icons" : "icons active"}`}
              onClick={() => setGridview(false)}
            />
          </div>
          <div className="total-items">
            <p className="total">{filteredProducts.length} items total</p>
          </div>
          <div className="sort">
            <form action="#">
              <label htmlFor="product">Sort products</label>
              <select name="product" id="product" onClick={sortProducts}>
                <option value="#" disabled></option>
                <option value="a-z">name a-z</option>
                <option value="z-a">name z-a</option>
                <option value="price-low">lowest to highest</option>
                <option value="price-high">highest to lowest</option>
              </select>
            </form>
          </div>
        </div>

        {gridView ? (
          <GridView products={filteredProducts} />
        ) : (
          <ListView products={filteredProducts} />
        )}
      </div>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  .filter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
  }
  .listGrid {
  }
  .icons {
    font-size: 2rem;

    color: black;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.color.blue2};
    }
  }
  .active {
    color: ${({ theme }) => theme.color.blue2};
  }
`;

export default Products;
