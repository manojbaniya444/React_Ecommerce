import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContextFilter } from "../context/filterContext";
import { TiTick } from "react-icons/ti";

const FilterSection = () => {
  // const [color, setColor] = useState(null);

  const {
    inputTextHandler,
    allProducts,
    categoryHandler,
    color,
    setColor,
    setAllColor,
    companyHandler,
    filters: { text,category:categoryRename },
  } = useGlobalContextFilter();

  //category list
  const tempCategory = allProducts?.map((item) => {
    return item.category;
  });

  const category = ["all", ...new Set(tempCategory)];
  //company list
  const tempCompanyList = allProducts?.map((item) => {
    return item.company;
  });

  const companyList = ["all", ...new Set(tempCompanyList)];

  //color list
  const tempColors = allProducts?.map((item) => {
    return item.colors;
  });

  const colors = [...new Set([].concat(...tempColors))];
  return (
    <Filter>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="search here..."
          onChange={inputTextHandler}
        />
      </form>

      {/* //all three flex display items */}
      <div className="more-filters">
        <div className="category-filter">
          <h3 className="title">ByCategory</h3>
          <div className="categories">
            {category?.map((item, index) => {
              return (
                <p
                  className={`${item===categoryRename?"category-item active-category":"category-item"}`}
                  onClick={(e)=>categoryHandler(e)}
                  key={index}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="color-filter-container">
          <h3 className="title">By Colors</h3>
          <div className="color-filter">
            <p className="all" onClick={(e)=> setAllColor(e)}>
              all
            </p>
            <div className="color-container">
              {colors?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="color-box"
                    value={item}
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
          </div>
        </div>
        <div className="company-filter-container">
          <h3 className="title">By Company</h3>
          <form action="#">
            <label htmlFor="company"></label>
            <select name="company" id="company" onClick={(e)=>companyHandler(e)}>
              {companyList?.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
      <hr />
    </Filter>
  );
};

const Filter = styled.div`
  h3 {
    display: block;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    justify-content: center;
    input {
      padding: 0.7em 1em;
      width: 400px;
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
  .more-filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 1em;
    padding: 0 1rem;
    .category-filter {
      .categories {
        display: flex;
        justify-content: space-between;
        gap: 0.82rem;
        margin-top: 0.4rem;
        .active-category{
          color:  ${({theme})=> theme.color.blue2};
        }
        .category-item {
          cursor: pointer;
          border: 0.3px solid ${({ theme }) => theme.color.blue2};
          padding: 2px 3px;
          border-radius: 3px;
          &:hover {
            color: ${({ theme }) => theme.color.blue2};
          }
        }
        @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
          /* flex-direction: column; */
          display: grid;
          grid-template-columns: 1fr;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
      align-items: baseline;
      justify-content: space-around;
      /* justify-content: space-around; */
    }
    /* This is inside color filter container */
    .title {
      @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        text-align: center;
      }
    }
    .color-filter {
      display: flex;
      align-items: center;
      gap: 1rem;
      .all {
        cursor: pointer;
        border: 1px dotted black;
        padding: 8px 13px;
        border-radius: 50%;
      }
      .color-container {
        display: flex;
        .color-box {
          /* display: flex; */
          margin-right: 0.3em;
          padding: 8px 13px;
          border-radius: 50%;
          opacity: 0.7;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
          .tick {
            color: white;
            opacity: 0;
          }
          .active {
            opacity: 1;
          }
        }
        @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
          /* flex-direction: column; */
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.82rem;
        }
      }
      @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        flex-direction: column;
      }
    }
  }
`;

export default FilterSection;
