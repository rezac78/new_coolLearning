import React, {useEffect} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import HeaderTitle from "@/components/Shared/HeaderTitle";
import Aos from "aos";
import ClockIcon from "@/public/Icon/ClockIcon";
import CommentIcon from "@/public/Icon/CommentIcon";
const fakeData = [
 {
  id: 1,
  image: "/Home/homeBaner.jpg",
  alt: "Node.js Advanced Course",
  title: "دوره Node.js پیشرفته",
  hashTag: "وب دیزاین",
  description:
   "آموزش جامع و عمیق Node.js با پروژه‌های کاربردی واقعی. این دوره شما را با مفاهیم پیشرفته مانند Async/Await، Express.js و بانک‌های داده NoSQL آشنا می‌کند. دوره‌ای برای توسعه‌دهندگانی که به دنبال تسلط بر Node.js در محیط‌های تولید هستند. مدت دوره: 10 هفته.",
 },
 {
  id: 2,
  image: "/Home/homeBaner.jpg",
  alt: "React Beginner to Advanced",
  title: "دوره React پیشرفته",
  hashTag: "وب دیزاین",
  description:
   "یادگیری React از مبتدی تا پیشرفته با تمرکز بر Hooks، Context و Redux. برنامه‌سازی SPA به سبک حرفه‌ای‌ها و آموزش تکنیک‌های بهینه‌سازی برنامه‌های واقعی. این دوره شامل سشن‌های زنده و حل مسئله است. مدت دوره: 12 هفته.",
 },
 {
  id: 3,
  image: "/Home/homeBaner.jpg",
  alt: "Vue.js Comprehensive Guide",
  title: "دوره Vue.js جامع",
  hashTag: "وب دیزاین",
  description:
   "آموزش از ابتدا تا پیشرفته Vue.js با پروژه‌های عملی. کشف اکوسیستم Vue و استفاده از Vuex و Vue Router برای ساخت برنامه‌های تک‌صفحه‌ای. کار با API‌های واقعی و آموزش داده‌های پویا. مدت دوره: 8 هفته.",
 },
];

export default function QuseCart() {
 useEffect(() => {
  Aos.init();
 }, []);
 return (
  <div className="container mx-auto py-10">
   <HeaderTitle Title="آخرین آزمون ها" Button="مشاهده بیشتر" typeHeader="medal" />
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    {fakeData.map((course) => (
     <Card
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      key={course.id}
      className="rounded  flex flex-col bg-white overflow-hidden shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
     >
      <div className="relative">
       <Image className="w-full h-48 object-cover" src={course.image} alt={course.alt} width={500} height={500} />
       <CardHeader className="text-xs absolute top-0 right-0 bg-white px-4 py-2 text-DarkerGreen mt-3 mr-3">
        {course.hashTag}
       </CardHeader>
      </div>
      <CardContent className="px-6 py-4 mb-auto">
       <h2 className="font-medium text-lg transition duration-500 ease-in-out mb-2">
        {course.title}
       </h2>
       <p className="text-gray-500 text-sm">{course.description}</p>
      </CardContent>
      <CardFooter className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
       <span className="py-1 text-xs font-regular text-gray-900 flex flex-row items-center">
        <ClockIcon />
        <span>مدت دوره: {course.id === 1 ? "10 هفته" : course.id === 2 ? "12 هفته" : "8 هفته"}</span>
       </span>
       <span className="py-1 text-xs font-regular text-gray-900 flex flex-row items-center">
        <CommentIcon />
        <span>{course.id === 1 ? "15 نظر" : course.id === 2 ? "20 نظر" : "5 نظر"}</span>
       </span>
      </CardFooter>
     </Card>
    ))}
   </div>
  </div>
 );
}
