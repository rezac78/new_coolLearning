"use client";

import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
interface SectionsPartProps {
 Title: string;
 Description: string;
 ButtonTitle: string;
 ImagePart: string;
 Dir: string;
}
export default function SectionsPart({Title, Description, ButtonTitle, ImagePart, Dir}: SectionsPartProps) {
 return (
  <div
   className="flex flex-col md:flex-row justify-between items-center md:items-start md:p-8 py-40"
   style={{direction: Dir}}
  >
   <div
    className="flex flex-col items-center lg:items-start justify-center text-center lg:text-right md:p-4 lg:p-8"
    style={{direction: "rtl"}}
   >
    <h1 className="text-2xl font-bold mb-4">{Title}</h1>
    <p className="text-DarkGray max-w-3xl mb-6 text-justify">{Description}</p>
    <Button
     variant="ghost"
     className="px-6 py-3 text-white hover:text-white bg-SecondaryColor hover:bg-DarkerGreen transition duration-300"
    >
     {ButtonTitle}
    </Button>
   </div>
   <Image
    src={ImagePart}
    alt="تصویر مربوط به برنامه‌نویسی"
    width={400}
    height={400}
    className="w-1/2 md:w-full lg:w-auto h-auto mt-6 lg:mt-0"
   />
  </div>
 );
}
