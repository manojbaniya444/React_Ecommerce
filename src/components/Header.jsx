import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <MainHeader>
      <Link to="/" className="logo">
        <h2>Manojj Store</h2>
      </Link>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  font-family: "Signika Negative", sans-serif;
  background-color: ${({theme})=> theme.color.blue1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10%;

  .logo {
    text-decoration: none;
    color: ${({theme})=>theme.color.blue2};
  }
`;

export default Header;
