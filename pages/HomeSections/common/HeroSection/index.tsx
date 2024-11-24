"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Parallax, Pagination, Navigation} from "swiper/modules";
import Image from "next/image";
import ButtonSections from "@/components/Shared/Button/ButtonSections";
const slides = [
 {
  id: 1,
  image: "/Home/Jowhareh_galleries_8_poster_d18d (2).jpg",
  title: "برنامه‌نویسی را از خانه شروع کنید!",
  description:
   "بدون نیاز به حضور در کلاس، مهارت‌های برنامه‌نویسی خود را در خانه بیاموزید. با دوره‌های آموزشی ما، یادگیری آسان، عملی و متناسب با زمان شماست.",
  buttonTitle: "مشاهده",
  buttonLink: "#",
 },
 {
  id: 2,
  image: "/Home/Web_Programmer_01_generated (1).jpg",
  title: "با مطالعه مقالات تخصصی، دانش خود را ارتقا دهید!",
  description:
   "در دنیای برنامه‌نویسی و تکنولوژی، به‌روز ماندن کلید موفقیت است. با مطالعه مقالات تخصصی ما، می‌توانید با جدیدترین روش‌ها، ابزارها و نکات مهم برنامه‌نویسی آشنا شوید.",
  buttonTitle: "مشاهده مقالات",
  buttonLink: "#",
 },
 {
  id: 3,
  image: "/Home/programming-background-with-pers.jpg",
  title: "مهارت‌های خود را با آزمون‌های تخصصی بسنجید!",
  description:
   "آزمون‌های تخصصی برنامه‌نویسی به شما این امکان را می‌دهند که توانایی‌ها و دانش خود را در زبان‌ها و تکنولوژی‌های مختلف ارزیابی کنید.",
  buttonTitle: "شروع آزمون",
  buttonLink: "#",
 },
];
export default function HeroSection() {
 return (
  <>
   <Swiper
    style={{height: "500px"}}
    speed={600}
    spaceBetween={30}
    centeredSlides={true}
    parallax={true}
    navigation={true}
    modules={[Parallax, Pagination, Navigation]}
    className="mySwiper"
   >
    <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div>
    {slides.map((slide) => (
     <SwiperSlide key={slide.id}>
      <Image
       className="rounded-3xl w-full h-full object-fit"
       src={slide.image}
       alt={slide.title}
       width={1600}
       height={1600}
      />
      <div className="hidden md:block absolute top-10 left-14 bg-DarkBlue rounded-xl text-white w-1/3 p-4">
       <h2 className="subtitle" data-swiper-parallax="-200">
        {slide.title}
       </h2>
       <div className="text text-sm flex justify-between gap-3 md:gap-2" data-swiper-parallax="-100">
        <span>{slide.description}</span>
       </div>
       <div className="flex justify-end mt-3">
        <ButtonSections Title={slide.buttonTitle} Type="" />
       </div>
      </div>
     </SwiperSlide>
    ))}
   </Swiper>
  </>
 );
}
