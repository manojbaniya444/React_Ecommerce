import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2>Find us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3561.479367488857!2d87.29016991500211!3d26.792860983179267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1677259975016!5m2!1sen!2snp"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen="yes"
        loading="lazy"
        title="map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <form action="https://formspree.io/f/xoqzdzob" method="POST">
        <input
          type="text"
          name="Username"
          placeholder="Enter your name"
          required
          autoComplete="off"
        />
        <input
          type="email"
          name="Email"
          required
          autoComplete="off"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          required
          autoComplete="off"
          placeholder="type here..."
        ></textarea>
        <h3>Your message will be received by manojbaniya444@gmail.com</h3>
        <input type="submit" value="Submit" className="button" />
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 3rem 0 2rem 0;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    h3 {
      color: #bfbebe;
      margin-top: .3rem;
      text-align: center;
    }
  }
  input {
    padding: 1rem;
    margin-top: 0.9rem;
    max-width: 800px;
    width: 70%;
    border-radius: 4px;
    font-size: 1.52rem;
    font-weight: 700;
  }
  textarea {
    margin-top: 1rem;
    max-width: 800px;
    width: 70%;
    border: 2px solid black;
    border-radius: 4px;
    padding: 5px;
    font-size: 1.3rem;
    letter-spacing: 0.7px;
  }
  .button {
    width: 100px;
    background-color: ${({ theme }) => theme.color.blue1};
    color: white;
    border: none;
    border-radius: 3px;
    transition: 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.color.blue2};
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 0.7rem;
    color: ${({ theme }) => theme.color.blue2};
  }
`;
export default Contact;
