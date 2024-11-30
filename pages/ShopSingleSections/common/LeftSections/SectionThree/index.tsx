"use client";
import React from "react";

export default function SectionThree() {
 const courses = [
  {
   title: "کمپ کارورزی و پروژه محور Asp.Net Core (اجرای پروژه واقعی)",
   type: "اصلی",
  },
  {
   title: "آموزش جامع فریم ورک جنگو (Django)",
   type: "اصلی",
  },
  {
   title: "آموزش سطح متوسط جاوا اسکریپت",
   type: "اصلی",
  },
  {
   title: "دوره ۸ Asp.net core",
   type: "اصلی",
  },
  {
   title: "بوت کمپ Asp.net core Web Api",
   type: "اصلی",
  },
  {
   title: "کمپ آموزشی و پروژه محور Asp.Net Core (اجرای پروژه واقعی)",
   type: "اصلی",
  },
  {
   title: "برنامه نویسی پایتون",
   type: "اصلی",
  },
  {
   title: "بوت کمپ برنامه نویس شو",
   type: "اصلی",
  },
 ];
 return (
  <div className="w-full max-w-2xl mx-auto bg-white border rounded-lg shadow-md p-5 mb-5">
   <h2 className="text-right text-lg mb-4 border-b pb-2">دوره‌های جدید</h2>
   <ul className="space-y-4">
    {courses.map((course, index) => (
     <li key={index} className="flex items-center justify-between border-b pb-2 last:border-none">
      <div className="flex items-center gap-2">
       <span className="text-SecondaryColor text-lg">0</span>
       <span className="text-gray-800">{course.title}</span>
      </div>
      <span className="px-2 py-1 text-sm bg-gray-100 text-SecondaryColor border border-blue-300 rounded-full">
       {course.type}
      </span>
     </li>
    ))}
   </ul>
  </div>
 );
}
