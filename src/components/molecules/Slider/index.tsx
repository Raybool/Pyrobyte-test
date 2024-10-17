'use client';

import { SliderElement } from '@/components/molecules/Slider/SliderElement';
import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.css';

export type SliderDataType = {
  src: string;
  alt: string;
  height: number;
  width: number;
}[];

type Props = {
  spaceBetween: number;
  slidesPerView: number;
  data: SliderDataType;
};

export const Slider: React.FC<Props> = ({
  data,
  spaceBetween,
  slidesPerView,
}) => (
  <div className={styles.container}>
    <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
      }}
    >
      {data.map(({ src, alt, height, width }, index) => (
        <SwiperSlide key={`${alt} ${index}`} virtualIndex={index}>
          <SliderElement
            src={src}
            alt={alt}
            index={index}
            height={height}
            width={width}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
