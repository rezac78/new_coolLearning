import React from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import {Button} from "@/components/ui/button";

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
  alt: "Angular for Professionals",
  title: "دوره Angular حرفه‌ای",
  price: "2200000",
  offPrice: "3000000",
  hashTag: ["وب دیزاین", "برنامه‌نویسی"],
  description: "آموزش Angular برای توسعه‌دهندگان حرفه‌ای",
  range: 1,
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

export default function QuseCart() {
 return (
  <div className="container mx-auto py-10">
   <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">محصولات برتر برنامه‌نویسی</h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {fakeData.map((item) => (
     <Card key={item.id} className="bg-white text-gray-700 w-full shadow-lg rounded-md overflow-hidden">
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
      <CardContent className="px-4">
       <h2 className="font-semibold text-lg overflow-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h2>
       <p className="text-sm text-gray-500 mt-2">{item.description}</p>
      </CardContent>
      <CardFooter className="px-4 flex gap-3">
       <Button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">مشاهده محصول</Button>
      </CardFooter>

      <CardFooter className="px-4 flex gap-3 ">
       <p className="text-sm text-gray-500 mt-2">{item.description}</p>
      </CardFooter>
     </Card>
    ))}
   </div>
   <div className="flex justify-center mt-10">
    <Button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600">مشاهده بیشتر</Button>
   </div>
  </div>
 );
}
