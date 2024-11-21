"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import Image from "next/image";
export default function HeroSection() {
 return (
  <>
   <Swiper
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
     clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
   >
    <SwiperSlide>
     <Image
      className="shadow-2xl rounded-3xl object-cover w-full"
      src="/Home/banernew.jpg"
      alt="Hero"
      width={500}
      height={200}
     />
    </SwiperSlide>
    <SwiperSlide>
     <Image
      className="shadow-2xl rounded-3xl object-cover w-full"
      src="/Home/banernew.jpg"
      alt="Hero"
      width={500}
      height={200}
     />
    </SwiperSlide>
    <SwiperSlide>
     <Image
      className="shadow-2xl rounded-3xl object-cover w-full"
      src="/Home/banernew.jpg"
      alt="Hero"
      width={500}
      height={200}
     />
    </SwiperSlide>
   </Swiper>
  </>
 );
}
