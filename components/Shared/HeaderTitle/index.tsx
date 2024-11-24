import BlogIcon from "@/public/Icon/BlogIcon";
import CodeIcon from "@/public/Icon/CodeIcon";
import MedalIcon from "@/public/Icon/MedalIcon";
import ButtonSections from "../Button/ButtonSections";

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
   <ButtonSections Title={props.Button} Type="" />
  </div>
 );
}
