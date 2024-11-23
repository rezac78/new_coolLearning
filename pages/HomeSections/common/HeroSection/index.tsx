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
    <SwiperSlide>
     <Image
      className="rounded-3xl w-full h-full object-fit"
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
      className="rounded-3xl w-full h-full object-fit"
      src="/Home/Web_Programmer_01_generated (1).jpg"
      alt="Hero"
      width={1600}
      height={1600}
     />
     <div className="absolute bottom-0 bg-[#1e3a8a] rounded-b-xl text-white w-full p-2">
      <div className="subtitle" data-swiper-parallax="-200">
       با مطالعه مقالات تخصصی، دانش خود را ارتقا دهید!
      </div>
      <div className="text text-sm flex justify-between gap-3 md:gap-2" data-swiper-parallax="-100">
       <p>
        در دنیای برنامه‌نویسی و تکنولوژی، به‌روز ماندن کلید موفقیت است. با مطالعه مقالات تخصصی ما، می‌توانید با جدیدترین
        روش‌ها، ابزارها و نکات مهم برنامه‌نویسی آشنا شوید. از مفاهیم پایه تا موضوعات پیشرفته، تمامی مقالات به زبان ساده
        و کاربردی برای شما آماده شده‌اند.
       </p>
       <Button className="p-3 rounded-lg -mt-4 text-white hover:text-white bg-SecondaryColor hover:bg-DarkerGreen transition duration-300 cursor-pointer">
        مشاهده مقالات
       </Button>
      </div>
     </div>
    </SwiperSlide>
    <SwiperSlide>
     <Image
      className="rounded-3xl w-full h-full object-fit"
      src="/Home/programming-background-with-pers.jpg"
      alt="Hero"
      width={1600}
      height={1600}
     />
     <div className="absolute bottom-0 bg-[#1e3a8a] rounded-b-xl text-white w-full p-2">
      <div className="subtitle" data-swiper-parallax="-200">
       مهارت‌های خود را با آزمون‌های تخصصی بسنجید!
      </div>
      <div className="text text-sm flex justify-between gap-3 md:gap-2" data-swiper-parallax="-100">
       <p>
        آزمون‌های تخصصی برنامه‌نویسی به شما این امکان را می‌دهند که توانایی‌ها و دانش خود را در زبان‌ها و تکنولوژی‌های
        مختلف ارزیابی کنید. از سوالات مبتدی تا چالش‌های پیشرفته، این آزمون‌ها برای هر سطح از برنامه‌نویسان طراحی
        شده‌اند. با نتایج دقیق و بازخوردهای تخصصی، مسیر پیشرفت خود را شفاف‌تر کنید.
       </p>
       <Button className="p-3 rounded-lg -mt-4 text-white hover:text-white bg-SecondaryColor hover:bg-DarkerGreen transition duration-300 cursor-pointer">
        شروع آزمون
       </Button>
      </div>
     </div>
    </SwiperSlide>
   </Swiper>
  </>
 );
}
