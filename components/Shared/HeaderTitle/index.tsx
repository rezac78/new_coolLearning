import {Button} from "@/components/ui/button";
import BlogIcon from "@/public/Icon/BlogIcon";
import CodeIcon from "@/public/Icon/CodeIcon";
import MedalIcon from "@/public/Icon/MedalIcon";

interface AlertProps {
 Title?: string;
 Button?: string;
 typeHeader?: string;
}
export default function HeaderTitle(props: AlertProps) {
 return (
  <div className="flex justify-between mt-10 relative">
   <div className="flex">
    <h2>
     {props.typeHeader === "course" ? <CodeIcon /> : props.typeHeader === "medal" ? <MedalIcon /> : <BlogIcon />}
    </h2>
    <h2 className="text-2xl font-bold text-PrimaryColor mb-6 text-center">{props.Title}</h2>
   </div>
   <Button
    variant="ghost"
    className="px-6 py-3 text-[#ffffff] hover:text-[#ffffff] bg-SecondaryColor hover:bg-DarkerGreen transition duration-300"
   >
    {props.Button}
   </Button>
  </div>
 );
}
