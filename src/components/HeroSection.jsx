import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeroSection = ({ title, image }) => {
  return (
    <Hero>
      <div className="areaA">
        <p className="p">WELCOME TO</p>
        <h1>{title}</h1>
        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eum
          cumque omnis, cupiditate aliquam eius, itaque reiciendis, voluptates
          facere dolore tempora ipsum.
        </p>
        
        <Link to="/products"><Button>SHOP NOW</Button></Link>
      </div>
      <div className="areaB">
        <img src={image} alt="shopping"/>
      </div>
    </Hero>
  );
};

const Hero = styled.main`
  display: grid;
  grid-gap: 80px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem 0 1rem;
  .areaA {
    padding: 1rem 1rem;
    .p {
      color: ${({ theme }) => theme.color.blue2};
    }
    h1 {
      font-size: 3.7rem;
      margin: 0.7rem 0;
      color: ${({ theme }) => theme.color.blue2};
    }
    .text {
      letter-spacing: 1px;
      margin-bottom: 0.9rem;
    }
  }
  .areaB {
    display: flex;
    place-content: center;
    img {
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    grid-template-columns: 1fr;
    img {
      width: 90%;
      height: auto;
    }
  }
`;
const Button = styled.button`
  padding: 1.5em 1.9em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.blue1};
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.color.blue2};
  }
`;
export default HeroSection;
