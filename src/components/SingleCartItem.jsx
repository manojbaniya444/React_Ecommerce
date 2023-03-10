import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/productContext";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";

const SingleCartItem = ({ item, total }) => {
  const [amount, setAmount] = useState(total);
  const [maxStock, setMaxStock] = useState(false);
  const { color, image, name, price, stock, id } = item;
  const { removeHandler } = useGlobalContext();
  const decreaseHandler = () => {
    if (amount === stock) {
      setMaxStock(false);
    }
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const increaseHandler = () => {
    if (amount === stock) {
      setMaxStock(true);
    }
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };
  return (
    <SingleCart>
      <div className="flexbox">
        <div className="image">
          <img src={image} alt={color} />
        </div>
        <div className="details">
          <p className="name">{name}</p>
          <p className="price">Rs.{price}</p>
          <p className="amount">No. of item: {amount}</p>
          {maxStock && <p className="max-stock">Max stock reached</p>}
          {!maxStock && <p className="in-stock">In stock</p>}

          <p className="color-title">Color:</p>

          <span className="color" style={{ backgroundColor: color }}></span>
          <button className="button" onClick={() => removeHandler(id, color)}>
            Remove Item
          </button>
        </div>
        <div className="control">
          <button className="decrease" onClick={decreaseHandler}>
            <GrSubtract />
          </button>
          <p>{amount}</p>
          <button className="increase" onClick={increaseHandler}>
            <GrAdd />
          </button>
        </div>
        <div className="price-calculate">
          <p>Subtotal: Rs.{amount * price}</p>
        </div>
      </div>
    </SingleCart>
  );
};

const SingleCart = styled.div`
  padding: 1rem 12%;
  background-color: #f5f4f4;
  .flexbox {
    display: grid;
    gap: 1rem;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .image {
    width: 200px;
    img {
      width: 100%;
    }
  }
  .details {
    .max-stock {
      color: red;
      margin-bottom: 5px;
    }
    .in-stock {
      color: green;
      margin-bottom: 5px;
    }
    button {
      display: block;
      margin-top: 1rem;
      background-color: ${({ theme }) => theme.color.blue2};
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0.3rem 0.7rem;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.color.blue1};
      }
    }
    .name {
      font-size: 1.3rem;
      font-weight: 800;
      margin-bottom: 5px;
    }
    .price {
      color: grey;
      margin-bottom: 5px;
    }
    .amount {
      font-weight: 600;
      margin-bottom: 5px;
    }
    .color-title {
      display: inline-block;
    }
    .color {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-left: 9px;
    }
  }
  .control {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-left: 0.79rem;
    button {
      border: none;
      background: none;
      cursor: pointer;
      /* font-size: 2rem; */
    }
    p {
      color: blue;
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 1rem;
  }
`;

export default SingleCartItem;
