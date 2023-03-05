import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleFeaturedItem = ({ item }) => {
  const { id, category, company, image, name, price } = item;
  return (
    <SingleItem>
      <Link to={`/singleProduct/${id}`}>
        <div className="image">
          <img src={image} alt={name} />
          <p className="category">{category}</p>
        </div>
      </Link>

      <div className="info">
        <p className="name">{name}</p>
        <p className="price">Rs.{price}</p>
      </div>
    </SingleItem>
  );
};

const SingleItem = styled.div`
  background-color: white;
  margin-top: 2.2rem;

  .image {
    cursor: pointer;
    width: 90%;
    margin-left: 50%;
    padding-top: 1rem;
    transform: translateX(-50%);
    transition: 0.21s ease-in;
    &:hover {
      scale: 1.03;
      opacity: 0.7;
    }
  }
  img {
    width: 100%;
  }
  .category {
    position: absolute;
    /* color: ${({ theme }) => theme.color.blue2}; */
    top: 10%;
    left: 70%;
    font-size: 1.1rem;
    background-color: ${({ theme }) => theme.color.grey};
    padding: 0.2em 0.8em;
    border: none;
    border-radius: 4px;
  }

  .info {
    margin-top: 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
`;

export default SingleFeaturedItem;
