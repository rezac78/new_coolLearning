"use client";
import React from "react";
import RightSections from "./common/RightSections";

export default function ShopSingle() {
 return (
  <div className="container mx-auto px-4 py-6">
   <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
    <div className="col-span-12 md:col-span-3 order-2 md:order-1 border-2 border-gray-200 rounded-md p-4 overflow-auto bg-white shadow-sm">
     <h2 className="text-lg font-semibold mb-4">سایدبار</h2>
     <ul>
      <li className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer mb-2">لینک ۱</li>
      <li className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer mb-2">لینک ۲</li>
      <li className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer mb-2">لینک ۳</li>
     </ul>
    </div>
    <div className="col-span-12 md:col-span-9 order-1 md:order-2">
     <RightSections />
    </div>
   </div>
  </div>
 );
}
