import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  console.log(products);
  return (
    <List>
      {products.map((item) => {
        const { id, image, name, description, price } = item;
        return (
          <div className="wrapper" key={id}>
            <div className="img">
              <img src={image} alt={name} />
            </div>
            <div className="info">
              <h3 className="name">{name}</h3>
              <p className="price">Rs.{price}</p>
              <p className="description">{description.slice(0, 100)}...</p>
              <Link to={`/singleProduct/${id}`}>
                <button>More Info</button>
              </Link>
            </div>
          </div>
        );
      })}
    </List>
  );
};
const List = styled.div`
  padding: 1rem 2rem;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2px solid grey;
    padding: 1rem 2rem;
    margin-bottom: 2rem;

    .img {
      width: 100%;
      display: flex;
      justify-content: center;
      opacity: 0.9;
      transition: 1s ease;
      &:hover {
        opacity: 1;
      }
      img {
        height: 100%;
        width: 70%;
        cursor: pointer;
      }
    }
    .info {
      margin-top: 1.2rem;
      margin-bottom: 2rem;
      .name {
        font-size: 1.7rem;
        margin-bottom: 1em;
      }
      .price {
        color: grey;
        font-size: 1.1em;
      }
      .description {
        color: grey;
        font-size: 1.2em;
        margin-top: 1em;
      }
      button {
        border: 1.3px solid ${({ theme }) => theme.color.blue2};
        font-size: 1.3em;
        border-radius: 3px;
        color: ${({ theme }) => theme.color.blue2};
        padding: 1em 1.2em;
        font-weight: 800;
        margin-top: 0.8em;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: ${({ theme }) => theme.color.blue2};
          color: white;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
      flex-direction: column;
    }
  }
`;
export default ListView;
