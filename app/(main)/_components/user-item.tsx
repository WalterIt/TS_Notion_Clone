'use client';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { ChevronsLeftRight } from "lucide-react";


const UserItem = () => {
    const { user } = useUser();

    return ( 
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5 ">
                    <div className="gap-x-2 flex items-center max-w-[150px] ">
                        <Avatar className="w-6 h-6" >
                            <AvatarImage src={user?.imageUrl} alt="User Avatar" />
                        </Avatar>
                        <span className="text-start foment-medium line-clamp-1">{user?.username?.toUpperCase()}&apos;s MNotion</span>
                    </div>
                    <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="start" alignOffset={11} forceMount >
                <div className="flex flex-col space-y-4 p-2">
                    <p className="text-xs font-medium leading-none text-muted-foreground"> 
                        {user?.emailAddresses[0]?.emailAddress}
                    </p>
                    <div className="flex items-center gap-x-2">
                        <div className="rounded-md bg-secondary p-1">
                            <Avatar className="w-8 h-8" >
                                <AvatarImage src={user?.imageUrl} alt="User Avatar" />
                            </Avatar>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm line-clamp-1">
                                <b>{user?.username?.toUpperCase()}&apos;s</b> MNotion
                            </p>

                        </div>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground" >
                    <SignOutButton >Log out</SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default UserItem;