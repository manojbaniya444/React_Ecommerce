import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";

const AddCart = ({ stock }) => {
  const [amount, setAmount] = useState(1);
  const increaseHandler = () => {
    if (amount <= stock) setAmount(amount + 1);
  };
  const decreaseHandler = () => {
    if (amount > 1) setAmount(amount - 1);
  };
  return (
    <Wrapper>
      <div className="control">
        <button className="decrease" onClick={decreaseHandler}>
          <GrSubtract />
        </button>
        <p>{amount}</p>
        <button className="increase" onClick={increaseHandler}>
          <GrAdd />
        </button>
      </div>

      <Link to="/cart">
        <button className="cart-btn">Add to cart</button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cart-btn {
    background-color: ${({ theme }) => theme.color.blue1};
    color: white;
    border: none;
    border-radius: 9px;
    padding: 1em 1.3em;
    margin-top: 1rem;
    transition: ease 0.19s;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.color.blue2};
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
`;
export default AddCart;
