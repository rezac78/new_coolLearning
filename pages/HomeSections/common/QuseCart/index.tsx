import React from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import HeaderTitle from "@/components/Shared/HeaderTitle";
import ButtonSections from "@/components/Shared/Button/ButtonSections";
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

export default function QuseCart() {
 return (
  <div className="container mx-auto py-10">
   <HeaderTitle Title="آخرین آزمون ها" Button="مشاهده بیشتر" typeHeader="medal" />
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    {fakeData.map((item) => (
     <Card key={item.id} className="bg-white text-gray-700 w-full rounded-md overflow-hidden shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
      <Image className="w-full h-48 object-cover" src={item.image} alt={item.alt} width={500} height={500} />
      <CardHeader className="p-4 flex flex-col gap-3">
       <div className="flex items-center gap-2">
        {item.hashTag.map((tag, index) => (
         <Badge key={index} className="px-3 py-1 rounded-full text-xs bg-gray-100" variant="outline">
          {tag}
         </Badge>
        ))}
       </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
       <h2 className="font-semibold text-lg overflow-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h2>
       <p className="text-sm text-gray-500 mt-2">{item.description}</p>
      </CardContent>
      <CardFooter className="px-4 py-2 flex gap-3">
       <ButtonSections Title="مشاهده آزمون"  >مشاهده آزمون</ButtonSections>
      </CardFooter>
     </Card>
    ))}
   </div>
  </div>
 );
}
