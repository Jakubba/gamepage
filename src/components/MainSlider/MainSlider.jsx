import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './MainSlider.module.scss';

export const MainSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className='mySwiper'
    >
      <SwiperSlide>
        <div className='sliderCard'>
          <h3 className='sliderCardTitle'></h3>
          <p className='sliderCardDesc'></p>
          <button className='sliderCardBtn'></button>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};
