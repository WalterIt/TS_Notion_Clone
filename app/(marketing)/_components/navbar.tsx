'use client'

import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
    const scrolled = useScrollTop();


    return ( 
        <div className={cn("dark:bg-[#1F1F1F] fixed top-0 flex items-center p-6 w-full bg-background z-50", scrolled && "border-b  shadow-md")}>
            <Logo />
            <div className="justify-between flex items-center gap-x-2 md:ml-auto md:justify-end">
                <ModeToggle />
            </div>
        </div>
     );
}
 
export default Navbar;