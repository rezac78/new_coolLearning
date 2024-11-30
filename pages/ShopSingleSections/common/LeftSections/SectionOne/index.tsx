"use client";
import ButtonSections from "@/components/Shared/Button/ButtonSections";
import DollarIcon from "@/public/Icon/DollarIcon";
import React from "react";

export default function SectionOne() {
 const courseData = {
  price: {
   discounted: "۲۱۰,۰۰۰ تومان",
   original: "۴۰۰,۰۰۰ تومان",
  },
  teacher: {
   name: "ایمان مدائنی",
   resume: "رزومه",
  },
  videoCount: "۷۲ ویدیو",
  duration: "۱۴:۴۰:۰۰",
  level: "متوسط",
  status: "در حال برگزاری",
  lastUpdate: "۱۴۰۲/۰۹/۰۸",
 };
 return (
  <div className="border-2 border-gray-200 rounded-md px-4 py-12 bg-white shadow-sm relative mb-5">
   <div className="text-right">
    <p className="flex text-lg ">
     <div className="text-SecondaryColor flex items-center">
      <DollarIcon width={"1.2rem"} height={"1.2rem"} />
     </div>
     قیمت این دوره:
     <span className="text-SecondaryColor mx-2">{courseData.price.discounted}</span>
     <span className="text-gray-200 line-through">{courseData.price.original}</span>
    </p>
   </div>
   <hr className="my-4" />
   <div className="text-right space-y-3">
    <p className="flex items-center gap-2">
     <span className="text-gray-500">مدرس دوره:</span>
     <span className="text-gray-900 ">{courseData.teacher.name}</span>
     <span className="text-SecondaryColor">({courseData.teacher.resume})</span>
    </p>
    <p className="flex items-center gap-2">
     <span className="text-gray-500">تعداد ویدیوها:</span>
     <span className="text-gray-900 ">{courseData.videoCount}</span>
    </p>
    <p className="flex items-center gap-2">
     <span className="text-gray-500">مدت زمان دوره:</span>
     <span className="text-gray-900 ">{courseData.duration}</span>
    </p>
    <p className="flex items-center gap-2">
     <span className="text-gray-500">سطح دوره:</span>
     <span className="text-gray-900 ">{courseData.level}</span>
    </p>
    <p className="flex items-center gap-2">
     <span className="text-gray-500">وضعیت دوره:</span>
     <span className="text-blue-500 ">{courseData.status}</span>
    </p>
    <p className="flex items-center gap-2">
     <span className="text-gray-500">تاریخ آخرین بروزرسانی:</span>
     <span className="text-gray-900 ">{courseData.lastUpdate}</span>
    </p>
   </div>
   <div className="mt-6">
    <ButtonSections className="w-full py-6" Title="ثبت نام در این دوره">
     ثبت نام در این دوره
    </ButtonSections>
   </div>
  </div>
 );
}
