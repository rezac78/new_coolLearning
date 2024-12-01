"use client";

import React from "react";
interface Filter {
 id: string;
 type: "select" | "text";
 label: string;
 options?: {value: string; text: string}[];
 placeholder?: string;
}
const filters: Filter[] = [
 {
  id: "dropdown1",
  type: "select",
  label: "نوع آزمون",
  options: [
   {value: "default", text: "انتخاب کنید"},
   {value: "written", text: "کتبی"},
   {value: "oral", text: "شفاهی"},
  ],
 },
 {
  id: "dropdown2",
  type: "select",
  label: "وضعیت آزمون",
  options: [
   {value: "default", text: "انتخاب کنید"},
   {value: "passed", text: "قبول شده"},
   {value: "failed", text: "رد شده"},
   {value: "pending", text: "در انتظار"},
  ],
 },
 {
  id: "input1",
  type: "text",
  label: "نام دانش‌آموز",
  placeholder: "نام دانش‌آموز را وارد کنید...",
 },
 {
  id: "input2",
  type: "text",
  label: "کد آزمون",
  placeholder: "کد آزمون را وارد کنید...",
 },
];
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/Input";
import ButtonSections from "@/components/Shared/Button/ButtonSections";
export default function SectionOne() {
 const handleApplyFilters = () => {
  alert("فیلترها اعمال شدند!");
 };
 return (
   <div className="flex flex-wrap items-center justify-center gap-10 p-6 border-2 rounded-xl shadow-xl">
    {filters.map((filter) => (
     <div key={filter.id} className="flex flex-col">
      {filter.type === "select" ? (
       <Select>
        <SelectTrigger className="w-[180px] focus:outline-none focus:ring-SecondaryColor focus:border-SecondaryColor">
         <SelectValue placeholder={filter.label} />
        </SelectTrigger>
        <SelectContent style={{direction: "rtl"}}>
         <SelectGroup>
          {filter.options?.map((option) => (
           <SelectItem key={option.value} value={option.value}>
            {option.text}
           </SelectItem>
          ))}
         </SelectGroup>
        </SelectContent>
       </Select>
      ) : (
       <Input
        type={filter.type}
        placeholder={filter.placeholder}
        className="mt-1 block w-full p-4 border rounded-md shadow-sm focus:outline-none focus:ring-SecondaryColor focus:border-SecondaryColor sm:text-sm"
       />
      )}
     </div>
    ))}

    <ButtonSections Click={handleApplyFilters} Title="اعمال فیلتر">
     اعمال فیلتر
    </ButtonSections>
   </div>
 );
}
