"use client";

import React from "react";
import ImagePart from "@/components/Shared/ImgPart/Image";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

export default function HeroSection() {
 return (
  <div className="flex justify-center my-20">
   <div className="relative group">
    <div className="absolute inset-0  rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>
    <div className="relative rounded-lg shadow-xl transform  transition duration-500">
     <ImagePart className="shadow-2xl rounded-lg" Src="/Home/homeBaner.jpg" alt="Hero" width={900} height={500} />
     <Badge className="absolute top-6 -right-12 px-4 py-6 bg-gray-400 rounded-lg" variant="outline">
      به دنیای برنامه‌نویسی خوش آمدید!
     </Badge>
     <Badge className="absolute top-72 -left-16 p-2 bg-gray-400 rounded-lg" variant="outline">
      مسیر یادگیری و خرید <br /> ابزارهای برنامه‌نویسی را با ما تجربه کنی.
     </Badge>
     <Button className="absolute bottom-4 right-4 p-3 bg-gray-400 rounded-lg">مشاهده محصولات برنامه‌نویسی</Button>
     <Button className="absolute bottom-4 right-96 p-3 bg-gray-400 rounded-lg">شرکت در آزمون مهارتی</Button>
     <Button className="absolute bottom-4 left-4 p-3 bg-gray-400 rounded-lg">مشاهده دوره‌های تخصصی</Button>
    </div>
   </div>
  </div>
 );
}
