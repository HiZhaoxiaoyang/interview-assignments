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
        autoplay={{delay: 5000}}
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
          <div>
            <span>xPhone</span>
            <p>Lots to love. Less to spend.</p>
            Starting at $399.
            <img src={require('./assets/slide1_p.png')} alt="s1"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>Tablet</span>
            <p>Just the right amount of everything.</p>
            <img src={require('./assets/slide2_p.png')} alt="s1"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>Buy a tablet of xPhone for college.
              <br/>Get arPods
            </span>
            <img src={require('./assets/slide3_p.png')} alt="s1"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>;
}

export default App;
