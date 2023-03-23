import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper";

import styled from "styled-components";
import { orangeColor } from "../../../constants/colorPalette";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Autoplay, Navigation, Scrollbar]}
      navigation
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Slide src="/assets/images/slides/makeup-slide-1.webp" alt="brush" />
        <MottoContainer>
          <Motto>Makeup for every mood, every style, every you</Motto>
        </MottoContainer>
      </SwiperSlide>
      <SwiperSlide>
        <Slide src="/assets/images/slides/makeup-slide-2.webp" alt="brush" />
        <MottoContainer>
          <Motto>
            Transform your look and express yourself with our makeup products
          </Motto>
        </MottoContainer>
      </SwiperSlide>
      <SwiperSlide>
        <Slide src="/assets/images/slides/makeup-slide-3.webp" alt="brush" />
        <MottoContainer>
          <Motto>
            Indulge in luxury with the best quality makeup from top brands
          </Motto>
        </MottoContainer>
      </SwiperSlide>
    </Swiper>
  );
};

const Slide = styled.img`
  width: 100%;
  filter: brightness(50%);
  position: relative;
`;

const MottoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
`;

const Motto = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: ${orangeColor};
`;
