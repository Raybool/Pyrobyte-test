'use client';

import { Box } from '@/components/atoms/Box';
import { NavButton } from '@/components/atoms/buttons/NavButton';
import { SliderElement } from '@/components/molecules/Slider/SliderElement';
import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

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
  sliderElementType: 'default' | 'grey';
  navigation?: boolean;
  autoplay?: boolean;
};

export const Slider: React.FC<Props> = ({
  data,
  spaceBetween,
  slidesPerView,
  sliderElementType,
  navigation,
  autoplay,
}) => {
  const ref = useRef<SwiperRef>(null);

  return (
    <div className={styles.container}>
      <Box visible={!!navigation}>
        <NavButton
          position="left"
          onClick={() => ref.current?.swiper.slidePrev()}
        />
      </Box>

      <div className={styles.sliderBox}>
        <Swiper
          ref={ref}
          modules={[Autoplay]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          loop
          autoplay={
            autoplay && {
              delay: 2500,
              pauseOnMouseEnter: true,
            }
          }
        >
          {data.map(({ src, alt, height, width }, index) => (
            <SwiperSlide key={`${alt} ${index}`} virtualIndex={index}>
              <SliderElement
                src={src}
                alt={alt}
                height={height}
                width={width}
                type={sliderElementType}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Box visible={!!navigation}>
        <NavButton
          position="right"
          onClick={() => ref.current?.swiper.slideNext()}
        />
      </Box>
    </div>
  );
};
