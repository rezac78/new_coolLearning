"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Parallax, Autoplay, Pagination, Navigation} from "swiper/modules";
import Image from "next/image";
import HeaderTitle from "@/components/Shared/HeaderTitle";

const commentsData = [
 {
  id: 1,
  avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  name: "علی محمدی",
  time: "2 ساعت پیش",
  comment: "مقاله‌ها بسیار مفید و کاربردی هستند. سپاس از زحمات شما.",
 },
 {
  id: 2,
  avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  name: "زهرا رحیمی",
  time: "5 ساعت پیش",
  comment: "دوره‌ها خیلی عالی بودند، مخصوصاً دوره جاوااسکریپت!",
 },
 {
  id: 3,
  avatar: "https://randomuser.me/api/portraits/men/88.jpg",
  name: "حسین کاظمی",
  time: "1 روز پیش",
  comment: "آزمون‌ها خیلی چالشی و جذاب بودن. پیشنهاد می‌کنم امتحان کنید.",
 },
 {
  id: 4,
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  name: "مریم عباسی",
  time: "3 روز پیش",
  comment: "مقالات شما واقعا کاربردی و به‌روز هستند. ادامه بدید!",
 },
 {
  id: 5,
  avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  name: "محمد نوری",
  time: "4 روز پیش",
  comment: "دوره پایتون خیلی مفید بود. الان شاغل شدم!",
 },
 {
  id: 6,
  avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  name: "سارا رضایی",
  time: "6 روز پیش",
  comment: "بخش آزمون‌ها خیلی به من کمک کرد نقاط ضعفعم رو پیدا کنم.",
 },
];

export default function CommentSections() {
 return (
  <div className="py-32">
   <HeaderTitle Title="نظرات برتر" Button="" typeHeader="comment" />
   <Swiper
    speed={600}
    spaceBetween={20}
    slidesPerView={3}
    breakpoints={{
     370: {
      slidesPerView: 1,
     },
     570: {
      slidesPerView: 2,
     },
     768: {
      slidesPerView: 3,
     },
    }}
    autoplay={{
     delay: 1500,
     disableOnInteraction: false,
    }}
    centeredSlides={false}
    modules={[Parallax, Autoplay, Pagination, Navigation]}
    className="mySwiper w-full"
   >
    {commentsData.map((comment) => (
     <SwiperSlide key={comment.id} className="border w-1/2  rounded-lg shadow-sm bg-white">
      <div className="max-w-lg mx-auto border px-6 py-4 rounded-lg h-60">
       <div className="flex gap-3 items-center mb-6">
        <Image src={comment.avatar} alt={comment.name} width={80} height={80} className="w-12 h-12 rounded-full mr-4" />
        <div>
         <div className="text-lg font-medium text-gray-800">{comment.name}</div>
         <div className="text-gray-500">{comment.time}</div>
        </div>
       </div>
       <p className="text-lg leading-relaxed mb-6">{comment.comment}</p>
      </div>
     </SwiperSlide>
    ))}
   </Swiper>
  </div>
 );
}
