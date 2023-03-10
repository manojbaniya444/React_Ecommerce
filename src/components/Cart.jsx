import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Error } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/productContext";
import SingleCartItem from "./SingleCartItem";

const Cart = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const { finalCartProducts } = useGlobalContext();

  useEffect(() => {
    let timer = setTimeout(() => {
      setDisplayModal(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [displayModal]);

  if (finalCartProducts.length === 0) {
    return (
      <>
        <div className="loading">No items in your cart</div>
        <Link to="/products">
          <button className="btn">Go to shopping</button>
        </Link>
      </>
    );
  }
  return (
    <CartDiv>
      {displayModal && (
        <div className="modal">
          <h3>Service currently unavailable : (</h3>
          <h4>Thank you for your understanding.</h4>
        </div>
      )}

      <Link to="/products">
        <button className="btn">Go to shopping</button>
      </Link>
      <div className="item-container">
        {finalCartProducts?.map((item, index) => {
          const { amount } = item;
          return <SingleCartItem key={index} item={item} total={amount} />;
        })}
      </div>
      <h3 className="h3">Checkout through</h3>
      <div className="payment-method">
        <a href="#" onClick={() => setDisplayModal(true)}>
          Esewa
        </a>
        <a href="#" onClick={() => setDisplayModal(true)}>
          Fonepay
        </a>
        <a href="#" onClick={() => setDisplayModal(true)}>
          Khalti
        </a>
        <a href="https://connectips.com/">ConnectIPS</a>
      </div>
    </CartDiv>
  );
};

const CartDiv = styled.div`
  .modal {
    background-color: #ccc1c1;
    padding: 2rem 3rem;
    width: 300px;
    margin-left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: 2rem;
    z-index: 3;
    border-radius: 10px;
    h3 {
      text-align: center;
    }
    h4 {
      text-align: center;
    }
  }
  .h3 {
    text-align: center;
    margin-top: 2rem;
  }
  a {
    text-decoration: none;
    font-size: 1.3rem;
    transition: ease 0.3s;
    &:hover {
      color: ${({ theme }) => theme.color.blue2};
    }
  }
  .payment-method {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 30%;
  }

  h1 {
    padding-left: 10%;
    margin-top: 2rem;
    font-weight: 900;
    color: ${({ theme }) => theme.color.blue2};
  }
  .item-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    h1 {
      padding-left: 1rem;
    }
    .payment-method {
      padding: 1rem 10%;
    }
  }
`;
export default Cart;
