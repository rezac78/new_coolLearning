"use client";
import React from "react";
import HashtagIcon from "@/public/Icon/HashTagIcon";

export default function SectionTow() {
 const tags = [
  "آموزش رایگان آژور",
  "آموزش آژور",
  "Azure DevOps",
  "آموزش DevOps",
  "یادگیری Azure DevOps",
  "آموزش رایگان Azure",
 ];
 return (
  <div className="w-full mx-auto border rounded-md p-4 bg-white shadow-sm mb-5">
   <div className="text-right mb-3">
    <p className="flex items-center gap-2">
     <HashtagIcon width="1rem" height="1rem" />
     <span>برچسب‌ها:</span>
    </p>
   </div>
   <div className="flex flex-wrap gap-2">
    {tags.map((tag, index) => (
     <span
      key={index}
      className="px-3 py-1 text-sm text-gray-600 bg-gray-100 border rounded-md cursor-pointer hover:bg-gray-200"
     >
      {tag}
     </span>
    ))}
   </div>
  </div>
 );
}
