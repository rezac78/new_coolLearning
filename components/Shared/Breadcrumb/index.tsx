import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemType {
 type: "link" | "separator" | "page";
 label?: string;
 href?: string;
}
interface BreadcrumbData {
 items: BreadcrumbItemType[];
}

interface BreadcrumbProps {
 data: BreadcrumbData;
}
export default function BreadcrumbPart(props: BreadcrumbProps) {
 return (
  <Breadcrumb>
   <BreadcrumbList>
    {props.data.items.map((item, index) => {
     if (item.type === "link") {
      return (
       <BreadcrumbItem className="text-LightBlue" key={index}>
        <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
       </BreadcrumbItem>
      );
     }
     if (item.type === "separator") {
      return <BreadcrumbSeparator key={index} />;
     }
     if (item.type === "page") {
      return (
       <BreadcrumbItem key={index}>
        <BreadcrumbPage>{item.label}</BreadcrumbPage>
       </BreadcrumbItem>
      );
     }
     return null;
    })}
   </BreadcrumbList>
  </Breadcrumb>
 );
}
