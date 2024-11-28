import SearchIcon from "@/public/Icon/SearchIcon";
interface SearchProps {
 className?: string;
}
export default function Search({className}: SearchProps) {
 return (
  <div className="flex justify-center items-center">
   <form action="/search" className={className}>
    <div className="relative flex items-center">
     <span className="absolute left-4 text-gray-500">
      <SearchIcon />
     </span>
     <input
      type="text"
      name="q"
      className="w-full border h-12 shadow pl-12 pr-5 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
      placeholder="جست و جو ..."
     />
    </div>
   </form>
  </div>
 );
}
