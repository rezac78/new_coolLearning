import {Button} from "@/components/ui/button";
interface ButtonProps {
 Title?: string;
 className?: string;
 children?: React.ReactNode;
 Type: string;
 IdName?: string;
 Click?: () => void;
}
export default function ButtonSections(props: ButtonProps) {
 return (
  <Button
   aria-label={props.Title}
   className="relative p-3 rounded-lg text-sm font-medium hover:text-white bg-SecondaryColor hover:bg-DarkerGreen transition duration-300 shadow-lg transform"
  >
   {props.Type === "child" ? props.children : props.Title}
  </Button>
 );
}
