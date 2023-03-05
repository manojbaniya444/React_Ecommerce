import React from "react";
import styled from "styled-components";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
// const fblink = "https://www.facebook.com/manoj.baniya.754";
const Footer = () => {
  return (
    <>
      <Foot>
        <div className="one">
          <h3>Manoj Electronics</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aliquid quibusdam blanditiis earum?
          </p>
        </div>
        <div className="two">
          <p>Subscribe to get important updates</p>
          <input type="email" placeholder="YOUR-EMAIL" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="three">
          <p>Follow us</p>
          <div className="logo">
            <a
              href="https://www.google.com/search?q=facebook&oq=facebook&aqs=chrome.0.0i271j46i10i131i199i433i465i512j35i39l2j69i60l4.4391j0j7&sourceid=chrome&ie=UTF-8"
              className="icons"
            >
              <AiOutlineFacebook />
            </a>
            <AiOutlineInstagram className="icons" />
            <FaTiktok className="icons" />
          </div>
        </div>
        <div className="four">
          <p>Call Us</p>
          <p>+977 9824095815</p>
        </div>
      </Foot>
      <Foot2>
        <p className="copyright">
          @2023 Manoj Kumar Baniya. All Right Reserved
        </p>
        <p>PRIVACY POLICY</p>
        <p>TERMS & CONDITION</p>
      </Foot2>
    </>
  );
};
const Foot2 = styled.footer`
  background-color: ${({ theme }) => theme.color.blue1};
  margin-top: 0.3rem;
  color: white;
  padding: 1rem 0 4rem 1rem;
  .copyright {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  p {
    font-size: 1.1rem;
  }
`;
const Foot = styled.footer`
  background-color: ${({ theme }) => theme.color.blue1};
  color: white;
  margin-top: 3rem;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  a {
    text-decoration: none;
    color: white;
  }
  div {
    width: 20%;
    height: 300px;
  }
  input {
    padding: 1em;
    border-radius: 4px;
  }
  button {
    padding: 1em;
    background-color: ${({ theme }) => theme.color.blue2};
    color: white;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    display: inline;
    transition: all .3s;
    &:hover {
      background-color: ${({theme})=> theme.color.grey};
      color: black;
    }
  }
  .logo {
    margin-top: 1rem;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* display: flex;
    color: white;
    flex-direction: row; */
  }
  .icons {
    font-size: 3rem;
    margin-right: 2rem;
    transition: all 0.3s;
    &:hover {
      color: ${({ theme }) => theme.color.blue2};
    }
  }
  p {
    padding-top: 1rem;
    font-size: 1.2rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    padding: 2rem 20% 1rem 1rem;
    gap: 2rem;

    flex-direction: column;
    align-items: start;
    width: 100%;
    div {
      width: auto;
      height: auto;
    }
    input {
      padding: 1em;
      border-radius: 4px;
    }
    /* button {
      padding: 1em;
      background-color: ${({ theme }) => theme.color.blue1};
      color: white;
      border-radius: 4px;
      cursor: pointer;
      border: none;
      &:hover {
        background-color: ${({theme})=> theme.color.blue2};
      }
    } */
  }
`;
export default Footer;
