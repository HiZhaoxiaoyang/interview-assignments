import React from "react";
import "./App.css";
import "./App.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function App() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return <div className="App">
      {/* write your component here */}
      {/* test */}
      <Swiper
        spaceBetween={500}
        slidesPerView={1}
        // navigation
        // autoHeight={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onInit={
          (swiper) => {
            console.log('swiper initialized');
          }
        }
        onSwiper={(swiper) => {
          console.log(swiper)
        }}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          xPhone
        </SwiperSlide>
        <SwiperSlide>
          Slide 2
        </SwiperSlide>
        <SwiperSlide>
          Slide 3
        </SwiperSlide>
      </Swiper>
    </div>;
}

export default App;
