import "./Testimonial.css";
import avatar from './Images/avatar.png';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <h1 style={{fontFamily: "serif", color: "purple", textAlign: "center"}}>TESTIMONIALS</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="container" style={{borderRadius:"20px"}}>
            <a href="https://www.linkedin.com/in/vinhluong1702/"><img src="https://media.licdn.com/dms/image/D4E03AQEkTLng2S8pmA/profile-displayphoto-shrink_800_800/0/1696667952615?e=1704326400&v=beta&t=-gT3yNj-5gnXB4J9j5R6cjM_WeETYzYkEY0YPMHPtUg" alt="avatar" style={{width: "7vw",borderRadius:"50px"}}/></a>
            <div className="content"><p style={{fontStyle: "italic"}}>" I absolutely love this product! It has completely changed the way I work and has made my life so much easier. I can't imagine going back to the old way of doing things " <br/> <i style={{color: "purple", margin: "20px"}} class="bi bi-quote"></i> - Vinh Lương</p></div>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container" style={{borderRadius:"20px"}}>
            <a href="https://www.facebook.com/nghiem.le.1044186"><img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/339635277_898418938036075_7141209870649096687_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ucIzHycP2ckAX837SmD&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBQUlXmPz7QNrW90yhcxZTCNrVwReAc_5fEt3bo_2CfPw&oe=65495ADC" alt="avatar" style={{width: "7vw",borderRadius:"50px"}}/></a>
            <div className="content"><p style={{fontStyle: "italic"}}>" I've been using this service for a while now, and I can't believe I didn't start sooner. It's saved me so much time and effort, and the results speak for themselves. I'm a satisfied customer. " <br/> <i style={{color: "blue", margin: "20px"}} class="bi bi-quote"></i> - Lê Gia Nghiêm</p></div>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-half"></i>
            <i style={{color: "yellow"}} class="bi bi-star"></i>          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container" style={{borderRadius:"20px"}}>
            <a href="https://www.facebook.com/NiroKiraPika"><img src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/387791299_2435837946623329_3949863372106085914_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-iSRpTRKu9oAX-v13mZ&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfCrKb2o_WFV0MplR4K24YBIXiDV59L9ok2tKfSJLAO-7A&oe=654A3E3D" alt="avatar" style={{width: "7vw",borderRadius:"50px"}}/></a>
            <div className="content"><p style={{fontStyle: "italic"}}>" This app is a game-changer. It's user-friendly, intuitive, and has all the features I need. I've become so much more productive since I started using it. " <br/> <i style={{color: "green", margin: "20px"}} class="bi bi-quote"></i> - Nguyễn Quốc Phi</p></div>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star-fill"></i>
            <i style={{color: "yellow"}} class="bi bi-star"></i>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}