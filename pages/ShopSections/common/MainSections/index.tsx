"use client";

import ButtonSections from "@/components/Shared/Button/ButtonSections";
import ProductsCart from "@/pages/HomeSections/common/ProductsCart";
import MinusIcon from "@/public/Icon/MinusIcon";
import PlusIcon from "@/public/Icon/PlusIcon";
import React, {useState} from "react";
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
  alt: "Node.js Advanced Course",
  title: "دوره Node.js پیشرفته",
  price: "2000000",
  offPrice: "3000000",
  hashTag: ["وب دیزاین", "برنامه‌نویسی"],
  description: "آموزش کامل Node.js به همراه پروژه‌های عملی",
  range: 3,
 },
 {
  id: 5,
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
  id: 6,
  image: "/Home/homeBaner.jpg",
  alt: "Vue.js Comprehensive Guide",
  title: "دوره Vue.js جامع",
  price: "1800000",
  offPrice: "3000000",
  hashTag: ["وب دیزاین", "برنامه‌نویسی"],
  description: "آموزش Vue.js همراه با پروژه عملی",
  range: 5,
 },
];
const filterData = {
 title: "دسته بندی",
 options: [
  {id: 1, label: "New Arrivals", value: "new-arrivals"},
  {id: 2, label: "Sale", value: "sale"},
  {id: 3, label: "Travel", value: "travel"},
  {id: 4, label: "Organization", value: "organization"},
  {id: 5, label: "Accessories", value: "accessories"},
 ],
};
export default function MainSections() {
 const [isOpen, setIsOpen] = useState(false);

 const toggleFilter = () => {
  setIsOpen(!isOpen);
 };
 return (
  <div className="grid grid-cols-12 gap-4 h-auto">
   {/* Sidebar */}
   <div className="col-span-3 order-2 md:order-1 border-2 rounded-md p-4 min-h-0 max-h-screen overflow-auto bg-gray-50">
    <div className="px-4 py-6">
     <h3 className="-mx-2 -my-3 flow-root border-2 rounded-md">
      <button
       type="button"
       onClick={toggleFilter}
       className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
       aria-controls="filter-section-mobile-1"
       aria-expanded={isOpen}
      >
       <span className="font-medium text-gray-900">{filterData.title}</span>
       <span className="ml-6 flex items-center">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
      </button>
     </h3>
     {isOpen && (
      <div className="pt-6" id="filter-section-mobile-1">
       <div className="space-y-6">
        {filterData.options.map((option) => (
         <div key={option.id} className="flex gap-3 items-center">
          <input
           id={`filter-mobile-category-${option.id}`}
           name="category[]"
           value={option.value}
           type="checkbox"
           className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor={`filter-mobile-category-${option.id}`} className="ml-3 min-w-0 flex-1 text-gray-500">
           {option.label}
          </label>
         </div>
        ))}
       </div>
      </div>
     )}
    </div>
   </div>
   <div className="col-span-9 order-1 md:order-2 p-4">
    <ProductsCart data={fakeData} TypeCard="shop" />
    <ButtonSections Title="مشاهده بیشتر">مشاهده بیشتر</ButtonSections>
   </div>
  </div>
 );
}
