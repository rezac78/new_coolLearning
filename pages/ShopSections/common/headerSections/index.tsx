"use client";

import BreadcrumbPart from "@/components/Shared/Breadcrumb";
import Search from "@/components/Shared/Search";
import React from "react";

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
  {type: "link", label: "فروشگاه", href: "/shop"},
  {type: "separator"},
  {type: "page", label: "فروشگاه"},
 ],
};
const selectOptions = {
 items: [
  {value: "apple", label: "Apple"},
  {value: "banana", label: "Banana"},
  {value: "blueberry", label: "Blueberry"},
  {value: "grapes", label: "Grapes"},
  {value: "pineapple", label: "Pineapple"},
 ],
};
import SelectPart from "@/components/Shared/Select";
export default function HeaderSections() {
 return (
  <div>
   <div className="flex justify-between">
    <span>آموزش باحال (25)</span>
    <BreadcrumbPart data={breadcrumbData} />
   </div>
   <div className="flex justify-between my-12 p-4 border-2 rounded-xl shadow-xl">
    <Search className="w-[400px]"/>
    <SelectPart className="w-[250px] py-6" data={selectOptions} title="انتخاب دسته بندی" />
   </div>
  </div>
 );
}
