import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Navlink>
      <div className={`${openMenu ? "links-mv" : "links-mv--false links-ds"}`}>
        <Link className="li" to="/" onClick={() => setOpenMenu(false)}>
          <li>Home</li>
        </Link>
        <Link className="li" to="/about" onClick={() => setOpenMenu(false)}>
          <li>About</li>
        </Link>
        <Link className="li" to="/products" onClick={() => setOpenMenu(false)}>
          <li>Products</li>
        </Link>
        <Link className="li" to="/contact" onClick={() => setOpenMenu(false)}>
          <li>Contact</li>
        </Link>
        <Link className="li" onClick={() => setOpenMenu(false)}>
          <BsCart3 />
        </Link>
      </div>

      <AiOutlineMenu className="openMenu" onClick={() => setOpenMenu(true)} />
      <AiOutlineClose
        className={`${openMenu ? "closeMenu-mv" : "hide-closemenu-ds"}`}
        onClick={() => setOpenMenu(false)}
      />
    </Navlink>
  );
};

// Styled Component
const Navlink = styled.ul`
  font-family: "Signika Negative", sans-serif;
  display: flex;
  align-items: baseline;
  gap: 2rem;
  padding: 1.3rem 0;
  .links-ds {
    display: flex;
    gap: 2rem;
  }
  li {
    list-style: none;
    color: white;
    font-size: 1.5rem;
    text-transform: uppercase;
    &:hover {
      color: ${({ theme }) => theme.color.blue2};
    }
  }
  .li {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
  }
  .openMenu {
    display: none;
    color: white;
  }
  .hide-closemenu-ds {
    display: none;
  }

  /* For mobile */
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    .links-mv--false {
      display: none;
    }

    .links-mv {
      flex-direction: column;
      position: absolute;
      z-index: 99;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.color.grey};
      width: 100vw;
      height: 100vh;
      text-align: center;
      padding-top: 3rem;
      li {
        color: black;
        margin-bottom: 2rem;
        font-size: 3rem;
        &:hover {
          color: ${({ theme }) => theme.color.blue2};
        }
      }
      .li {
        color: black;
        font-size: 3rem;
        transition: 0.3s linear;
        &:hover {
          color: ${({ theme }) => theme.color.blue2};
        }
      }
    }
    .closeMenu-mv {
      display: block;
      position: absolute;
      font-size: 3rem;
      top: 1rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: rotate(200deg);
      }
    }
    .openMenu {
      display: block;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;
export default Navbar;
