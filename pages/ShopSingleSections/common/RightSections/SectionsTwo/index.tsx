"use client";
import React, {useState} from "react";
const courseData = [
 {
  id: 1,
  title: "معرفی دوره",
  duration: "00:11:07",
  description: "این دوره شامل مباحث پایه و پیشرفته برنامه‌نویسی است.",
  link: "#",
 },
 {
  id: 2,
  title: "مفاهیم اولیه",
  duration: "00:08:15",
  description: "در این بخش با مفاهیم پایه‌ای برنامه‌نویسی آشنا می‌شوید.",
  link: "#",
 },
 {
  id: 3,
  title: "پروژه عملی",
  duration: "00:20:30",
  description: "ساخت پروژه عملی برای تمرین و یادگیری بهتر.",
  link: "#",
 },
 {
  id: 4,
  title: "پیشرفته‌تر",
  duration: "00:15:45",
  description: "بررسی مباحث پیشرفته و تکنیک‌های حرفه‌ای.",
  link: "#",
 },
 {
  id: 5,
  title: "جمع‌بندی و سوالات",
  duration: "00:10:00",
  description: "جمع‌بندی مباحث و پاسخ به سوالات پرتکرار.",
  link: "#",
 },
];

export default function SectionsTwo() {
 const [openItemId, setOpenItemId] = useState<number | null>(null);
 const toggleDetails = (id: number) => {
  setOpenItemId(openItemId === id ? null : id);
 };
 return (
  <div className="border-2 border-gray-200 rounded-md px-4 bg-white relative mb-5">
   {courseData.map((item) => (
    <div key={item.id} className="border-2 border-dashed border-gray-300 rounded-md px-4 py-2 my-6 relative">
     <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
       <div className="w-6 h-6 flex items-center justify-center border-2 bg-white border-SecondaryColor rounded-full absolute -right-3">
        <span className="text-SecondaryColor font-medium">{item.id}</span>
       </div>
       <span className="text-gray-800 text-sm font-medium mr-1">{item.title}</span>
      </div>
      <div className="flex items-center gap-4">
       <span className="text-gray-500 text-sm">{item.duration}</span>
       <button
        onClick={() => toggleDetails(item.id)}
        className="w-8 h-8 flex items-center justify-center border-2 border-green-400 rounded-full focus:outline-none"
       >
        {openItemId === item.id ? (
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
         >
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
         </svg>
        ) : (
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
         >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
         </svg>
        )}
       </button>
      </div>
     </div>
     {openItemId === item.id && (
      <div className="mt-4 px-4 py-2 border-t border-gray-200">
       <p className="text-gray-600 text-sm">{item.description}</p>
       <a href={item.link} className="text-blue-500 hover:underline text-sm mt-2 inline-block">
        دانلود فایل دوره
       </a>
      </div>
     )}
    </div>
   ))}
  </div>
 );
}
