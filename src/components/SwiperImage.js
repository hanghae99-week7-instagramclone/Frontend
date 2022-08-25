import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const SwiperImage = ({ data, maxWidth, minHeight }) => {
  const ref = useRef(null);

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const [style, setStyle] = useState({
    transform: `translateX(-${currentImgIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  const nextSlide = () => {
    setCurrentImgIndex(currentImgIndex + 1);
    setStyle({
      transform: `translateX(-${currentImgIndex + 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  const prevSlide = () => {
    setCurrentImgIndex(currentImgIndex - 1);
    setStyle({
      transform: `translateX(-${currentImgIndex - 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  return (
    <SwiperContainer maxWidth={maxWidth}>
      <SwiperShowContainer ref={ref} style={style}>
        {data?.map((item, idx) => {
          return <SwipeImage key={idx} src={item} minHeight={minHeight}/>;
        })}
      </SwiperShowContainer>

      {currentImgIndex !== 0 ? (
        <SwiperBtn location="prev" onClick={prevSlide}>
          <IoIosArrowBack size="20"/>
        </SwiperBtn>
      ) : null}

      {currentImgIndex !== data.length - 1 ? (
        <SwiperBtn location="next" onClick={nextSlide}>
          <IoIosArrowForward size="20"/>
        </SwiperBtn>
      ) : null}
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
	width: 100%;
  max-width: ${(props) => props.maxWidth};
	height: 100%;
  position: relative;
  overflow: hidden;
	display: flex;
	justify-content: center;
`;

const SwiperShowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

const SwipeImage = styled.img`
  width: 100%;
	min-width: 100%;
  min-height: ${(props) => props.minHeight};
  height: auto;
  object-fit: contain;
  background-color: black;
`;

const SwiperBtn = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: ${(props) => (props.location === "prev" ? "10px" : null)};
  right: ${(props) => (props.location === "next" ? "10px" : null)};
  border: none;
  border-radius: 15px;
  opacity: 0.6;
	display: flex;
	justify-content: center;
	align-items: center;

  &:hover {
    opacity: 1;
  }
`;

export default SwiperImage;
