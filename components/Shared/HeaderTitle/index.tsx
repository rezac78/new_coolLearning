import BlogIcon from "@/public/Icon/BlogIcon";
import CodeIcon from "@/public/Icon/CodeIcon";
import MedalIcon from "@/public/Icon/MedalIcon";
import ButtonSections from "../Button/ButtonSections";
import CommentIcon from "@/public/Icon/CommentIcon";

interface AlertProps {
 Title?: string;
 Button?: string;
 typeHeader?: string;
}
export default function HeaderTitle(props: AlertProps) {
 return (
  <div className="flex justify-between mt-10 relative">
   <div className="flex gap-2 items-baseline">
    <h2>
     {props.typeHeader === "course" ? (
      <CodeIcon width="1em" height="1em" />
     ) : props.typeHeader === "medal" ? (
      <MedalIcon width="1em" height="1em" />
     ) : props.typeHeader === "comment" ? (
      <CommentIcon width="1em" height="1em" />
     ) : (
      <BlogIcon width="1em" height="1em" />
     )}
    </h2>
    <h2 className="text-md md:text-2xl font-bold text-PrimaryColor mb-6 text-center">{props.Title}</h2>
   </div>
   {props.Button !== "" && (
    <ButtonSections Title={props.Button} Type="linkButton">
     {props.Button}
    </ButtonSections>
   )}
  </div>
 );
}
