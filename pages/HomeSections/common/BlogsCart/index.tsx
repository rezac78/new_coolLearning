import React, {useEffect} from "react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import HeaderTitle from "@/components/Shared/HeaderTitle";
import Aos from "aos";
const fakeData = [
 {
  id: 1,
  image: "/Home/homeBaner.jpg",
  alt: "Node.js Advanced Course",
  title: "دوره Node.js پیشرفته",
  hashTag: ["وب دیزاین", "برنامه‌نویسی"],
  description:
   "آموزش جامع و عمیق Node.js با پروژه‌های کاربردی واقعی. این دوره شما را با مفاهیم پیشرفته مانند Async/Await، Express.js و بانک‌های داده NoSQL آشنا می‌کند. دوره‌ای برای توسعه‌دهندگانی که به دنبال تسلط بر Node.js در محیط‌های تولید هستند. مدت دوره: 10 هفته.",
 },
 {
  id: 2,
  image: "/Home/homeBaner.jpg",
  alt: "React Beginner to Advanced",
  title: "دوره React پیشرفته",
  hashTag: ["وب دیزاین", "برنامه‌نویسی"],
  description:
   "یادگیری React از مبتدی تا پیشرفته با تمرکز بر Hooks، Context و Redux. برنامه‌سازی SPA به سبک حرفه‌ای‌ها و آموزش تکنیک‌های بهینه‌سازی برنامه‌های واقعی. این دوره شامل سشن‌های زنده و حل مسئله است. مدت دوره: 12 هفته.",
 },
 {
  id: 3,
  image: "/Home/homeBaner.jpg",
  alt: "Vue.js Comprehensive Guide",
  title: "دوره Vue.js جامع",
  hashTag: ["وب دیزاین", "برنامه‌نویسی"],
  description:
   "آموزش از ابتدا تا پیشرفته Vue.js با پروژه‌های عملی. کشف اکوسیستم Vue و استفاده از Vuex و Vue Router برای ساخت برنامه‌های تک‌صفحه‌ای. کار با API‌های واقعی و آموزش داده‌های پویا. مدت دوره: 8 هفته.",
 },
];

export default function BlogsCart() {
 useEffect(() => {
  Aos.init();
 }, []);
 return (
  <div className="container mx-auto py-10">
   <HeaderTitle Title="آخرین بلاگ ها" Button="مشاهده بیشتر" />
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    {fakeData.map((item) => (
     <Card
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      key={item.id}
      className="max-w-sm rounded overflow-hidden shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
     >
      <Image className="w-full h-48 object-cover" src={item.image} alt={item.alt} width={500} height={500} />
      <CardContent className="px-6 py-4">
       <div className="font-bold text-lg md:text-xl mb-2">{item.title}</div>
       <p className="text-gray-700 text-base text-justify">{item.description}</p>
      </CardContent>
      <CardFooter className="px-6 py-4">
       <div className="flex items-center gap-2">
        {item.hashTag.map((tag, index) => (
         <Badge key={index} className="px-3 py-1 rounded-full text-xs bg-gray-100" variant="outline">
          {tag}
         </Badge>
        ))}
       </div>
      </CardFooter>
     </Card>
    ))}
   </div>
  </div>
 );
}
