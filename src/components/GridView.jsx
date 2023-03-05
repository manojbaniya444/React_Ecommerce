import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const GridView = ({ products }) => {
  return (
    <>
      <Grid>
        {products.map((item, index) => {
          const { id, image, name, category, price } = item;
          return (
            <div className="grid" key={index}>
              <Link to={`/singleProduct/${id}`}>
                <div className="image">
                  <img src={image} alt={name} />
                  <p className="category">{category}</p>
                </div>
              </Link>

              <div className="info">
                <p className="name">{name}</p>
                <p className="price">Rs.{price}</p>
              </div>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

const Grid = styled.div`
  background-color: ${({ theme }) => theme.color.grey};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 2rem 1rem;
  /* margin-top: 3rem; */
  .loading {
    text-align: center;
    font-size: 3rem;
    padding: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
  .grid {
    background-color: white;
    /* margin-top: 2.2rem; */

    .image {
      cursor: pointer;
      width: 90%;
      margin-left: 50%;
      padding-top: 1rem;
      transform: translateX(-50%);
      transition: 0.21s ease-in;
      &:hover {
        scale: 1.03;
        opacity: 0.7;
      }
    }
    img {
      width: 100%;
      height: 240px;
    }
    .category {
      position: absolute;
      /* color: ${({ theme }) => theme.color.blue2}; */
      top: 10%;
      left: 54%;
      font-size: 1.1rem;
      background-color: ${({ theme }) => theme.color.grey};
      padding: 0.2em 0.8em;
      border: none;
      border-radius: 4px;
    }

    .info {
      margin-top: 1.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
      img {
        height: 200px;
      }
      .category {
        left: 40%;
      }
    }
  }
`;
export default GridView;
