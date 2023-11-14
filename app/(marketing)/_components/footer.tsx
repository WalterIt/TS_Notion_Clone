'use client'

import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
    return ( 
        <div className="flex w-full items-center p-6 bg-background z-50 dark:bg-[#1F1F1F] ">
            <Logo />
            <div className="flex items-center gap-x-2 w-full justify-between text-muted-foreground md:ml-auto md:justify-end">
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>

                <Button variant="ghost" size="sm">
                    Terms & Conditions
                </Button>

            </div>
        </div>
     );
}
 
export default Footer;