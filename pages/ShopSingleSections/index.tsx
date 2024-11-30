"use client";
import React from "react";
import RightSections from "./common/RightSections";
import LeftSections from "./common/LeftSections";
import BreadcrumbPart from "@/components/Shared/Breadcrumb";
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
  {type: "link", label: "دوره nodeJS", href: "/shop/1"},
  {type: "separator"},
  {type: "page", label: "دوره NodeJS"},
 ],
};
export default function ShopSingle() {
 return (
  <div className="container mx-auto px-4 py-6">
   <div className=" mb-5">
    <h1 className="text-xl my-5">دوره nodeJs</h1>
    <BreadcrumbPart data={breadcrumbData} />
   </div>
   <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
    <div className="col-span-12 md:col-span-4 order-1">
     <LeftSections />
    </div>
    <div className="col-span-12 md:col-span-8 order-2">
     <RightSections />
    </div>
   </div>
  </div>
 );
}
