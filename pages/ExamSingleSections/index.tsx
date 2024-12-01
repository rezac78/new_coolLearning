"use client";
import React from "react";
import BreadcrumbPart from "@/components/Shared/Breadcrumb";
import Image from "next/image";
interface BreadcrumbItemType {
 type: "link" | "separator" | "page";
 label?: string;
 href?: string;
}
interface BreadcrumbData {
 items: BreadcrumbItemType[];
}
const breadcrumbData: BreadcrumbData = {
 items: [
  {type: "link", label: "خانه", href: "/"},
  {type: "separator"},
  {type: "link", label: "آزمون ها", href: "/exam"},
  {type: "separator"},
  {type: "link", label: "آزمون 1", href: "/shop/1"},
  {type: "separator"},
  {type: "page", label: "آزمون 1"},
 ],
};
export default function ExamSingle() {
 return (
  <div className="container mx-auto px-4 py-6">
   <div className=" mb-5">
    <BreadcrumbPart data={breadcrumbData} />
   </div>
   <div className="flex">
   <Image
      className="w-full h-48 object-cover"
      src="/Home/homeBaner.jpg"
      alt="/Home/homeBaner.jpg"
      width={500}
      height={500}
     />
     <div className="">reza</div>
   </div>
   {/* <div className="flex flex-col md:flex-row items-center justify-between bg-white border rounded-lg shadow-lg p-6">
    <div className="flex items-center space-x-4">
     <Image
      className="w-full h-48 object-cover"
      src="/Home/homeBaner.jpg"
      alt="/Home/homeBaner.jpg"
      width={500}
      height={500}
     />
     <h3 className="text-lg font-semibold text-gray-700">آزمون سراسری ماده درسی زبان و ادبیات فارسی داخل 1400</h3>
     <p className="text-sm text-gray-500">
      گروه آزمایشی: <span className="font-semibold">تجربی</span>
     </p>
     <p className="text-sm text-gray-400">ثبت شده در 13 تیر 1400</p>
    </div>
   </div>
   <div className="flex flex-col items-center md:items-start space-y-2 mt-4 md:mt-0">
    <div className="flex items-center space-x-2">
     <span className="text-gray-500 text-sm">نوع آزمون:</span>
     <span className="font-semibold text-gray-700">آزمون جامع</span>
    </div>
    <div className="flex items-center space-x-2">
     <span className="text-gray-500 text-sm">تعداد سوال:</span>
     <span className="font-semibold text-gray-700">25 سوال</span>
    </div>
    <div className="flex items-center space-x-2">
     <span className="text-gray-500 text-sm">سطح دشواری:</span>
     <span className="font-semibold text-gray-700">متوسط</span>
    </div>
    <div className="flex items-center space-x-2">
     <span className="text-gray-500 text-sm">شامل مباحث:</span>
     <span className="font-semibold text-gray-700">زبان و ادبیات فارسی</span>
    </div>
   </div>
   <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
    <div className="flex items-center space-x-2 text-red-500">
     +<span className="text-lg font-semibold">۰ تومان</span>
    </div>
    <div className="flex space-x-4 mt-4">
     <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
      ورود/ثبت نام
     </button>
     <button className="px-6 py-2 border border-red-500 text-red-500 rounded-lg shadow hover:bg-red-50 transition">
      مشاهده آزمون
     </button>
    </div>
   </div> */}
  </div>
 );
}
