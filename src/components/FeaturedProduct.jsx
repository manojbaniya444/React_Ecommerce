import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/productContext";
import SingleFeaturedItem from "./SingleFeaturedItem";

const FeaturedProduct = () => {
  const { featuredProducts, isLoading, products } = useGlobalContext();
  // console.log(products);
  // console.log(featuredProducts);
  if (isLoading) {
    return <div className="loading">...Loading</div>;
  }
  return (
    <Featured>
      <h1>Our Featured Products</h1>
      <Wrapper>
        {featuredProducts.map((item, index) => {
          return <SingleFeaturedItem key={index} item={item} />;
        })}
      </Wrapper>
      ;
    </Featured>
  );
};

const Featured = styled.div`
  background-color: ${({ theme }) => theme.color.grey};
  margin-top: 2rem;
  padding-top: 1rem;
  h1{
    text-align: center;
  }
`;
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  margin-top: 3rem;
  .loading {
    text-align: center;
    font-size: 3rem;
    padding: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    flex-direction: column;
  }
`;

export default FeaturedProduct;
