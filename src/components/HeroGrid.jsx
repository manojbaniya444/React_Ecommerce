import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { IoLogoApple } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io";

const HeroGrid = () => {
  return (
    <>
      <Grid>
        <div className="one box">
          <TbTruckDelivery className="icon" />
          <p>Super Fast and Free Delivery</p>
        </div>
        <div className="two box">
          <MdSecurity className="icon" />
          <p>Non-contact Shipping</p>
        </div>
        <div className="three box">
          <GiPayMoney className="icon" />
          <p>Money-back Guaranteed</p>
        </div>
        <div className="four box">
          <MdPayment className="icon" />
          <p>Super Secure Payment System</p>
        </div>
      </Grid>
      <Flex>
        <h3>Trusted By 1000+ Companies</h3>
        <div className="flexbox">
          <IoLogoApple className="logo" />
          <IoLogoAndroid className="logo" />
          <IoLogoFacebook className="logo" />
          <IoLogoGoogle className="logo" />
        </div>
      </Flex>
      <Modal>
        <p>
          {" "}
          Ready to get started?
          <br />
          Talk to us today
        </p>
        <button>GET STARTED</button>
      </Modal>
    </>
  );
};
const Modal = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.color.grey};
  padding: 2rem;
  margin-left: 50%;
  margin-top: 4rem;
  transform: translateX(-50%);
  border-radius: 9px;
  width: 80%;
  p {
    font-size: 1.4rem;
  }
  button {
    padding: 1.5em 1.9em;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.blue1};
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
    margin-top: 1.4rem;
    &:hover {
      background-color: ${({ theme }) => theme.color.blue2};
    }
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {

  }
`;
const Flex = styled.div`
  padding: 4rem 0 4rem 0;
  background-color: ${({ theme }) => theme.color.grey};
  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .flexbox {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
    .logo {
      font-size: 4em;
    }
  }
`;
const Grid = styled.div`
  display: grid;
  padding: 0 1rem;
  gap: 40px;
  margin: 2.8rem 0 2rem 0;
  grid-template-areas:
    "one two three"
    "one four three";
  .icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.blue1};
  }
  p {
    font-size: 1.4rem;
  }

  .box {
    padding: 40px;
    background-color: ${({ theme }) => theme.color.grey};
    border-radius: 20px;
  }
  .one {
    grid-area: one;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .two {
    grid-area: two;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      display: inline;
    }
  }
  .three {
    grid-area: three;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .four {
    grid-area: four;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      display: inline;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    grid-template-areas:
      "one"
      "one"
      "two"
      "three"
      "four"
      "four";
  }
`;
export default HeroGrid;
