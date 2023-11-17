'use client';

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
    const { user } = useUser();

    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4 ">
            <Image src="/empty.png" width="300" height="300" alt="Empty" className="dark:hidden" />
            <Image src="/empty-dark.png" width="300" height="300" alt="Empty" className="dark:block hidden" />
            <h2 className="text-lg font-medium">
                Welcome to <b>{user?.username?.toUpperCase()}&apos;s</b> MNotion!
            </h2>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create a Note
            </Button>
        </div>
     );
}
 
export default DocumentsPage;