import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper";

import StyledButton from "../../atoms/Button";

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
        modules={[Autoplay, Navigation, Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Slide1 />
          <MottoContainer>
            <Motto>Makeup for every mood, every style, every you</Motto>
            <StyledButton text="Shop" />
          </MottoContainer>
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
          <MottoContainer>
            <Motto>
              Transform your look and express yourself with our makeup products
            </Motto>
            <StyledButton text="Shop" />
          </MottoContainer>
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
          <MottoContainer>
            <Motto>
              Indulge in luxury with the best quality makeup from top brands
            </Motto>
            <StyledButton text="Shop" />
          </MottoContainer>
        </SwiperSlide>
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
`;

const Slide1 = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(/assets/images/slides/makeup-slide-1.webp);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Slide2 = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(/assets/images/slides/makeup-slide-2.webp);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Slide3 = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(/assets/images/slides/makeup-slide-3.webp);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MottoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 20px;
`;

const Motto = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
