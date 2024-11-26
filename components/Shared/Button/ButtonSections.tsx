import { Button } from "@/components/ui/button";
import ArrowLeftIcon from "@/public/Icon/ArrowLeftIcon";

interface ButtonProps {
        Title?: string;
        className?: string;
        children?: React.ReactNode;
        Type?: string;
        Click?: () => void;
}

export default function ButtonSections({
        Title = "Default Title",
        Type = "button",
        className = "",
        children,
        Click,
}: ButtonProps) {
        return (
                <div className="flex justify-center">
                        {Type === "button" ?
                                <Button
                                        aria-label={Title}
                                        className={`relative p-4 overflow-hidden font-medium text-sm text-SecondaryColor bg-gray-100 border border-gray-100 rounded-lg shadow-inner group hover:bg-unset ${className}`}
                                        onClick={Click}
                                >
                                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-SecondaryColor group-hover:w-full"></span>
                                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-SecondaryColor group-hover:w-full"></span>
                                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-SecondaryColor group-hover:h-full"></span>
                                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-SecondaryColor group-hover:h-full"></span>
                                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-SecondaryColor opacity-0 group-hover:opacity-100"></span>
                                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white">
                                                {children}
                                        </span>
                                </Button>
                                : <div className="flex justify-center">
                                        <Button
                                                aria-label={Title}
                                                onClick={Click}
                                                className={`flex items-center space-x-2 hover:text-SecondaryColor transition duration-300  ${className}`}
                                                variant={"link"}
                                        >
                                                <span>{children}</span>
                                                <ArrowLeftIcon/> 
                                        </Button>
                                </div>
                        }
                </div>
        );
}
