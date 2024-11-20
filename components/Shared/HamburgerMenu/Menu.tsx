import UserIcon from "@/public/Icon/UserIcon";
import Links from "../Link/Link";
interface HeaderProps {
        isMenuOpen: boolean;
        Role: string | undefined;
}
const navbar = [
        {id: 1, name: "Home", Link: "/"},
        {id: 2, name: "Courses", Link: "/courses"},
        {id: 3, name: "Blog", Link: "/blog"},
        {id: 4, name: "About Us", Link: "/about"},
       ];
export default function Menu(props: HeaderProps) {
        return (
                <>
                        {props.isMenuOpen && (
                                <>
                                        <div className="">
                                                <div className="text-base">
                                                        {navbar.map((e) => (
                                                                <Links IdName={e.name} type="icon" Href={e.Link} key={e.id} className="text-light-color-Font flex justify-center dark:text-dark-color-Font hover:text-light-color-Font-hover dark:hover:text-dark-color-Font-hover m-4">
                                                                        {e.name}
                                                                </Links>
                                                        ))}
                                                </div>
                                        </div>
                                        <div className="flex justify-center mt-5">
                                                <Links
                                                        type="icon"
                                                        Href={props.Role === 'admin' ? '/admin/dashboard' : props.Role === 'user' ? '/user/dashboard' : '/login'}
                                                        key={'Search'}
                                                        className="mr-4"
                                                        IdName={'Search'}>
                                                        <UserIcon/>
                                                </Links>
                                                {/* <Links
                                                        type="icon"
                                                        Href={'/Cart'}
                                                        key={'Shopping'}
                                                        className="mr-4"
                                                        IdName={'Shopping'}>
                                                        <ShoppingCartIcon className="h-6 w-6 text-light-color-Font dark:text-dark-color-Font" />
                                                        {cartItems.length > 0 && (
                                                                <span className="-mt-10 bg-dark-red dark:bg-light-red text-dark-color-Font rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                                                        {cartItems.length}
                                                                </span>
                                                        )}
                                                </Links> */}
                                        </div>
                                </>
                        )}
                </>
        )
}