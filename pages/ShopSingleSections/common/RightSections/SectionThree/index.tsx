"use client";
import HeaderTitle from "@/components/Shared/HeaderTitle";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Parallax, Autoplay, Pagination, Navigation} from "swiper/modules";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import ButtonSections from "@/components/Shared/Button/ButtonSections";
export default function SectionThree() {
 const fakeData = [
  {
   id: 1,
   image: "/Home/homeBaner.jpg",
   alt: "Node.js Advanced Course",
   title: "دوره Node.js پیشرفته",
   price: "2000000",
   offPrice: "3000000",
   hashTag: ["وب دیزاین", "برنامه‌نویسی"],
   description: "آموزش کامل Node.js به همراه پروژه‌های عملی",
   range: 3,
  },
  {
   id: 2,
   image: "/Home/homeBaner.jpg",
   alt: "React Beginner to Advanced",
   title: "دوره React پیشرفته",
   price: "2500000",
   offPrice: "3000000",
   hashTag: ["وب دیزاین", "برنامه‌نویسی"],
   description: "یادگیری React از مبتدی تا پیشرفته",
   range: 4,
  },
  {
   id: 3,
   image: "/Home/homeBaner.jpg",
   alt: "Vue.js Comprehensive Guide",
   title: "دوره Vue.js جامع",
   price: "1800000",
   offPrice: "3000000",
   hashTag: ["وب دیزاین", "برنامه‌نویسی"],
   description: "آموزش Vue.js همراه با پروژه عملی",
   range: 5,
  },
  {
   id: 4,
   image: "/Home/homeBaner.jpg",
   alt: "Node.js Advanced Course",
   title: "دوره Node.js پیشرفته",
   price: "2000000",
   offPrice: "3000000",
   hashTag: ["وب دیزاین", "برنامه‌نویسی"],
   description: "آموزش کامل Node.js به همراه پروژه‌های عملی",
   range: 3,
  },
  {
   id: 5,
   image: "/Home/homeBaner.jpg",
   alt: "React Beginner to Advanced",
   title: "دوره React پیشرفته",
   price: "2500000",
   offPrice: "3000000",
   hashTag: ["وب دیزاین", "برنامه‌نویسی"],
   description: "یادگیری React از مبتدی تا پیشرفته",
   range: 4,
  },
  {
   id: 6,
   image: "/Home/homeBaner.jpg",
   alt: "Vue.js Comprehensive Guide",
   title: "دوره Vue.js جامع",
   price: "1800000",
   offPrice: "3000000",
   hashTag: ["وب دیزاین", "برنامه‌نویسی"],
   description: "آموزش Vue.js همراه با پروژه عملی",
   range: 5,
  },
 ];

 const renderStars = (rating: number) => {
  const totalStars = 5;
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
   stars.push(
    <span key={i} className={`text-xl ${i <= rating ? "text-yellow-500" : "text-gray-300"}`}>
     ★
    </span>
   );
  }
  return stars;
 };
 return (
  <div className="border-2 border-gray-200 rounded-md px-4 bg-white relative mb-5 py-3">
   <HeaderTitle Title="دوره های دیگر مدرس" Button="مشاهده دوره" typeHeader="course" />
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
     {fakeData.map((item) => (
      <SwiperSlide key={item.id}>
       <Card className="bg-white text-gray-700 w-full rounded-md overflow-hidden shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
        <Image className="w-full h-48 object-cover" src={item.image} alt={item.alt} width={500} height={500} />
        <CardHeader className="p-4 flex flex-col gap-3">
         <div className="flex items-center gap-2">
          {item.hashTag.map((tag, index) => (
           <Badge key={index} className="px-3 py-1 rounded-full text-xs text-[#2563EB] bg-[#E0F2FE]" variant="outline">
            {tag}
           </Badge>
          ))}
         </div>
        </CardHeader>
        <CardContent className="px-4 py-2">
         <h2 className="font-semibold text-lg overflow-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h2>
         <p className="text-sm text-gray-500 mt-2">{item.description}</p>
        </CardContent>
        <CardFooter className="px-4 py-2 flex justify-between items-center">
         <div className="flex items-center">{renderStars(item.range)}</div>
         <span className="text-sm text-gray-500">20k مشاهده</span>
        </CardFooter>
        <CardFooter className="px-4 py-2 flex justify-between gap-3">
         <ButtonSections Title="مشاهده محصولات">مشاهده</ButtonSections>
         <div className="flex flex-col">
          <span className="text-lg font-bold text-green-600">{item.price} تومان</span>
          <span className="text-sm line-through opacity-50 text-[#9CA3AF]">{item.offPrice} تومان</span>
         </div>
        </CardFooter>
       </Card>
      </SwiperSlide>
     ))}
    </div>
   </Swiper>
  </div>
 );
}