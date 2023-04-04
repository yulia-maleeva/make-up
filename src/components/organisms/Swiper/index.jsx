import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import StyledButton from "../../atoms/Button";

import slides from "../../../constants/slides";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default () => {
  return (
    <SwiperSection>
       <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <Slide
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            <MottoContainer>
              <Motto>{slide.motto}</Motto>
              <CustomLink to={ROUTES.PRODUCTS}>
                <StyledButton text="Shop" />
              </CustomLink>
            </MottoContainer>
          </SwiperSlide>
        ))}
      </Swiper> 
    </SwiperSection>
  );
};

const SwiperSection = styled.section`
  width: 80%;

  .swiper-button-prev,
  .swiper-button-next {
    color: #000000;

    &:hover {
      color: ${orangeColor};
    }
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 600px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MottoContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 20px;
  left: 20px;

  @media (max-width: 769px) {
    width: 90%;
    align-items: center;
  }
`;

const CustomLink = styled(Link)`
  width: 150px;
  text-decoration: none;
`;

const Motto = styled.p`
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 769px) {
    font-size: 18px;
    text-align: center;
  }
`;
