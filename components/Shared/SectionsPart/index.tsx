"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import ButtonSections from "../Button/ButtonSections";

interface SectionsPartProps {
 Title: string;
 Description: string;
 ButtonTitle: string;
 ImagePart: string;
 Dir?: any;
}
export default function SectionsPart({Title, Description, ButtonTitle, ImagePart, Dir}: SectionsPartProps) {
 return (
  <div
   className="flex flex-col md:flex-row justify-between items-center md:items-start py-10 md:py-40"
   style={{direction: Dir}}
  >
   <div
    data-aos={Dir === "left" ? "fade-right" : "fade-left"}
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    className="flex flex-col items-center lg:items-start justify-center text-center lg:text-right md:p-4 lg:p-8"
    style={{direction: "rtl"}}
   >
    <h1 className="text-2xl font-bold mb-4">{Title}</h1>
    <p className="text-DarkGray max-w-3xl mb-6 text-justify">{Description}</p>
    <ButtonSections Title={ButtonTitle}>{ButtonTitle}</ButtonSections>
   </div>
   <Image
    data-aos={Dir === "right" ? "fade-left" : "fade-right"}
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    src={ImagePart}
    alt="تصویر مربوط به برنامه‌نویسی"
    width={400}
    height={400}
    className="w-2/3 md:w-5/12 h-auto mt-6 lg:mt-0"
   />
  </div>
 );
}
