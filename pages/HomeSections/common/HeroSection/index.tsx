"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Parallax, Pagination, Navigation} from "swiper/modules";
import Image from "next/image";
import {Button} from "@/components/ui/button";
export default function HeroSection() {
 return (
  <>
   <Swiper
    style={{
     "--swiper-navigation-color": "#fff",
     "--swiper-pagination-color": "#fff",
    }}
    speed={600}
    spaceBetween={30}
    centeredSlides={true}
    parallax={true}
    pagination={{
     clickable: true,
    }}
    navigation={true}
    modules={[Parallax, Pagination, Navigation]}
    className="mySwiper"
   >
    <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div>
    <SwiperSlide>
     <Image
      className="rounded-3xl object-fit"
      src="/Home/Jowhareh_galleries_8_poster_d18d (2).jpg"
      alt="Hero"
      width={1600}
      height={1600}
     />
     <div className="absolute bottom-0 bg-[#1e3a8a] rounded-b-xl text-white w-full p-2">
      <div className="subtitle" data-swiper-parallax="-200">
       برنامه‌نویسی را از خانه شروع کنید!
      </div>
      <div className="text text-sm flex justify-between gap-3 md:gap-2" data-swiper-parallax="-100">
       <p>
        بدون نیاز به حضور در کلاس، مهارت‌های برنامه‌نویسی خود را در خانه بیاموزید. با دوره‌های آموزشی ما، یادگیری آسان،
        عملی و متناسب با زمان شماست.
       </p>
       <Button className="p-3 rounded-lg -mt-4 text-white hover:text-white bg-SecondaryColor hover:bg-DarkerGreen transition duration-300 cursor-pointer">
        مشاهده
       </Button>
      </div>
     </div>
    </SwiperSlide>
    <SwiperSlide>
     <Image
      className="rounded-3xl object-fit"
      src="/Home/Jowhareh_galleries_8_poster_d18d (2).jpg"
      alt="Hero"
      width={1600}
      height={1600}
     />
     <div className="absolute bottom-0 bg-[#1e3a8a] rounded-b-xl text-white w-full p-4">
      <div className="subtitle" data-swiper-parallax="-200">
       برنامه‌نویسی را از خانه شروع کنید!
      </div>
      <div className="text text-sm flex justify-between" data-swiper-parallax="-100">
       <p>
        بدون نیاز به حضور در کلاس، مهارت‌های برنامه‌نویسی خود را در خانه بیاموزید. با دوره‌های آموزشی ما، یادگیری آسان،
        عملی و متناسب با زمان شماست.
       </p>
       <Button className="p-3 rounded-lg text-white hover:text-white bg-SecondaryColor hover:bg-DarkerGreen transition duration-300">
        مشاهده
       </Button>
      </div>
     </div>
    </SwiperSlide>
    <SwiperSlide>
     <Image
      className="rounded-3xl object-fit"
      src="/Home/Jowhareh_galleries_8_poster_d18d (2).jpg"
      alt="Hero"
      width={1600}
      height={1600}
     />
     <div className="absolute bottom-0 bg-[#1e3a8a] rounded-b-xl text-white w-full p-3">
      <div className="subtitle" data-swiper-parallax="-200">
       برنامه‌نویسی را از خانه شروع کنید!
      </div>
      <div className="text text-sm flex justify-between" data-swiper-parallax="-100">
       <p>
        بدون نیاز به حضور در کلاس، مهارت‌های برنامه‌نویسی خود را در خانه بیاموزید. با دوره‌های آموزشی ما، یادگیری آسان،
        عملی و متناسب با زمان شماست.
       </p>
       <Button className="p-3 rounded-lg text-white hover:text-white bg-SecondaryColor hover:bg-DarkerGreen transition duration-300">
        مشاهده
       </Button>
      </div>
     </div>
    </SwiperSlide>
   </Swiper>
   {/* <Swiper
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
     clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper h-[530px]"
   >
    <SwiperSlide>
     <Image
      className="rounded-3xl object-fit"
      src="/Home/Jowhareh_galleries_8_poster_d18d (2).jpg"
      alt="Hero"
      width={1600}
      height={1600}
     />
    </SwiperSlide>
    <SwiperSlide>
     <Image
      className="rounded-3xl object-cover w-full"
      src="/Home/Web_Programmer_01_generated (1).jpg"
      alt="Hero"
      width={1600}
      height={1600}
     />
    </SwiperSlide>
    <SwiperSlide>
     <Image
      className="rounded-3xl object-cover w-full"
      src="/Home/programming-background-with-pers.jpg"
      alt="Hero"
      width={1600}
      height={1600}
     />
    </SwiperSlide>
   </Swiper> */}
  </>
 );
}
