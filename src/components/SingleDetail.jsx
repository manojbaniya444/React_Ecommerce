import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/productContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFindReplace } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import Image from "./Image";
import AddCart from "./AddCart";
import axios from "axios";

const SingleDetail = () => {
  const [singleData, setSingleData] = useState({});
  const [color, setColor] = useState();
  const { id } = useParams();
  const { isLoading, isError } = useGlobalContext();

  const fetchingSingleData = async () => {
    const res = await axios.get(
      `https://api.pujakaitem.com/api/products?id=${id}`
    );
    const data = await res.data;
    // console.log(data, "single product detau");
    setSingleData(data);
  };
  useEffect(() => {
    fetchingSingleData();
  }, []);

  const {
    category,
    company,
    description,
    id:unid,
    image,
    name,
    colors,
    price,
    stars,
    stock,
    reviews,
    shipping,
  } = singleData;
  // console.log(colors)
  if (!image?.length || isLoading) {
    return (
      <div>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return <div>{isError}</div>;
  }
  return (
    <Detail>
      <div className="image-section">
        <Image image={image} />
      </div>
      <div className="info-section">
        <h2 className="name">{name}</h2>
        <p>({reviews} reviews)</p>
        <h2 className="price">
          Price: <del>{price}</del>
        </h2>
        <h3 className="deal">Deal of the Day: Rs{price - 3000}</h3>
        <p className="description">{description}</p>
        <div className="logo-container">
          <div className="one">
            <TbTruckDelivery className="logo-item" />
            <p className="common">Free Delivery</p>
          </div>
          <div className="two">
            <MdOutlineFindReplace className="logo-item" />
            <p className="common">10 Days Replacement</p>
          </div>
          <div className="three">
            <AiOutlineSafetyCertificate className="logo-item" />
            <p className="common">Manoj Express</p>
          </div>
          <div className="four">
            <SiExpress className="logo-item" />
            <p className="common">1 Year Warranty</p>
          </div>
        </div>
        <hr />
        <p className="stock">
          Available: <span>{stock ? "In stock" : "Out of stock"}</span>
        </p>
        <p className="id">
          ID: <span>Manoj Baniya</span>
        </p>
        <p className="brand">
          Brand: <span>{company}</span>
        </p>
        <hr />

        <div className="color">
          <p className="colors">Color: </p>
          {colors?.map((item, index) => {
            return (
              <div
                key={index}
                className="color-box"
                style={{ backgroundColor: item }}
                onClick={() => setColor(item)}
              >
                <TiTick
                  className={`${color === item ? "tick active" : "tick"}`}
                />
              </div>
            );
          })}
        </div>
        <AddCart stock={stock} color={color?color:colors[0]} image={image[0].url} name={name} price={price} id={id}/>
      </div>
    </Detail>
  );
};
const Detail = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 2rem;
  padding: 0 1rem;

  .color {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    .tick {
      color: white;
      opacity: 0;
    }
    .active {
      opacity: 1;
    }
    .colors {
      margin-right: 0.6rem;
    }
    .color-box {
      display: inline-block;
      border-radius: 50%;
      padding: 0.2rem 0.4rem;
      margin-right: 0.2rem;
      opacity: 0.6;
      transition: 0.2s ease;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  .image-section {
    /* width: 50%; */
  }
  .name {
    font-size: 2rem;
    margin-bottom: 0.9rem;
  }
  .price {
    margin: 1rem 0;
  }
  .deal {
    margin-bottom: 1rem;
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.color.blue2};
  }
  .description {
    font-size: 1.2rem;
  }
  .stock {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  .id {
    font-size: 1.2rem;
  }
  .brand {
    font-size: 1.2rem;
  }
  span {
    font-weight: 700;
  }
  .logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 900;
    .logo-item {
      font-size: 1.98rem;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    flex-direction: column;
    padding: 1rem;
  }
`;
export default SingleDetail;
