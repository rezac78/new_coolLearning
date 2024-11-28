"use client";

import React from "react";
import Links from "../Shared/Link/Link";
import ImagePart from "../Shared/ImgPart/Image";

export default function Footer() {
 return (
  <footer className="bg-DarkBlue text-[#ffffff] py-8">
   <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
     <div>
      <Links Href={"/"} type={"icon"}>
       <ImagePart Src="/Logo1.png" className="w-16 h-16" width={180} height={180} />
       <h3 className="text-lg font-semibold mb-4">یادگیری باحال</h3>
      </Links>
      <p className="text-sm text-gray-300">
       ما در تلاشیم تا بهترین دوره‌های آموزشی را برای علاقه‌مندان به برنامه‌نویسی و تکنولوژی فراهم کنیم. با ما همراه
       باشید تا مسیر رشد خود را پیدا کنید.
      </p>
     </div>
     <div>
      <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
      <ul className="space-y-2">
       <li>
        <a href="#" className="text-gray-400 hover:text-AccentColor transition duration-300">
         خانه
        </a>
       </li>
       <li>
        <a href="#" className="text-gray-400 hover:text-AccentColor transition duration-300">
         دوره‌ها
        </a>
       </li>
       <li>
        <a href="#" className="text-gray-400 hover:text-AccentColor transition duration-300">
         مقالات
        </a>
       </li>
       <li>
        <a href="#" className="text-gray-400 hover:text-AccentColor transition duration-300">
         تماس با ما
        </a>
       </li>
      </ul>
     </div>
     <div>
      <h3 className="text-lg font-semibold mb-4">ما را دنبال کنید</h3>
      {/* <div className="flex space-x-4">
       <a href="#" className="text-gray-400 hover:text-[#3b82f6] transition duration-300" aria-label="Facebook">
        <i className="fab fa-facebook-f"></i>
       </a>
       <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition duration-300" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
       </a>
       <a href="#" className="text-gray-400 hover:text-[#E1306C] transition duration-300" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
       </a>
       <a href="#" className="text-gray-400 hover:text-[#0A66C2] transition duration-300" aria-label="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
       </a>
      </div> */}
     </div>
    </div>
    <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
     <p className="text-sm text-gray-400">© 2024 Your Company Name. All rights reserved.</p>
     <div className="mt-4 md:mt-0">
      <a href="#" className="text-gray-400 hover:text-AccentColor mx-2 text-sm transition duration-300">
       Privacy Policy
      </a>
      <a href="#" className="text-gray-400 hover:text-AccentColor mx-2 text-sm transition duration-300">
       Terms of Service
      </a>
     </div>
    </div>
   </div>
  </footer>
 );
}
