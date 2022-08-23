import React, { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const SwiperImage = ({ data }) => {
  const ref = useRef(null);

  const [imageList, setImageList] = useState(data);
	console.log(imageList);

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
    <SwiperContainer>
      <div
        className="overflow-hidden max-w-[480px] min-w-[280px] w-full bg-black"
      >
        <div ref={ref} style={style} className="swiper-img-container">
          {data?.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item}
                className={'w-auto h-auto object-contain'}
              />
            );
          })}
        </div>
      </div>
      <div className="swiper-btn">
        <button onClick={prevSlide}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
	position: relative;
	height: 60vh;
	max-height: 80vh;
	padding-bottom: 20px;
	overflow: hidden;
	display: flex;
	align-content: center;
`;

export default SwiperImage;
