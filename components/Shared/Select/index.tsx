"use client";
import React from "react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
interface SelectItemType {
 value: string;
 label: string;
}

interface SelectDataType {
 items: SelectItemType[];
}

interface SelectPartProps {
 data: SelectDataType;
 title?: string;
 className?: string;
}
export default function SelectPart({data, title, className}: SelectPartProps) {
 return (
  <Select>
   <SelectTrigger className={className}>
    <SelectValue placeholder={title} />
   </SelectTrigger>
   <SelectContent>
    <SelectGroup>
     {data.items.map((item) => (
      <SelectItem key={item.value} value={item.value}>
       {item.label}
      </SelectItem>
     ))}
    </SelectGroup>
   </SelectContent>
  </Select>
 );
}
