import React, { useState } from "react";
import styled from "styled-components";

const Image = ({image}) => {
  //image object auta nested object ho jun refresh garda available nahuna sakxa tesaile initially empty paryo vane paxi undefined vanne error + aaudaina
    const [imageDisplay,setImageDisplay] = useState(image[0]);
  return (
    <Wrapper>
      <div className="image-four">
        {image?.map((item, index) => {
          // console.log(item, "image item")
          const { url, id } = item;
          return (
            <figure key={index}>
              <img src={url} alt={id} onClick={()=>setImageDisplay(item)} />
            </figure>
          );
        })}
      </div>
      <div className="image-one">
        <img src={imageDisplay?.url } alt="main-image" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  .image-four {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    img {
      width: 200px;
    }
  }
  .image-one {
    img {
      width: 400px;
    }
  }
  @media (max-width: ${({theme})=> theme.responsive.mobile}){
    flex-direction: column;
    .image-four{
        flex-direction: row;
        width: 100%;
        img{
            width: 100%;
        }
    }
    .image-one{
        width: 100%;

        img{
            width: 100%;
        }
    }
  }
`;
export default Image;
