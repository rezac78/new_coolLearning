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
  <div className="flex flex-col md:flex-row gap-10 py-10 md:py-40" style={{direction: Dir}}>
   <Image
    data-aos={Dir === "right" ? "fade-left" : "fade-right"}
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    src={ImagePart}
    alt="تصویر مربوط به برنامه‌نویسی"
    width={400}
    height={400}
    className=" flex m-auto md:hidden w-3/4 md:w-full"
   />
   <div
    data-aos={Dir === "left" ? "fade-right" : "fade-left"}
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    style={{direction: "rtl"}}
   >
    <h1 className="text-2xl font-bold mb-4">{Title}</h1>
    <p className="text-DarkGray mb-6 text-justify">{Description}</p>
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
    className="hidden md:flex"
   />
  </div>
 );
}
