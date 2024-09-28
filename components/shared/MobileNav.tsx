import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"


const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet >
                <SheetTrigger className="align-middle">
                   <Image
                    src='/assets/icons/menu.svg'
                    alt="menu logo"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                   />
                </SheetTrigger>
                <SheetContent className="bg-white flex flex-col gap-6 md:hidden">
                    <Image 
                      src='/assets/images/eventify_logo.svg'
                      alt="logo image"
                      width={138}
                      height={38}
                    />
                    <Separator className="border border-gray-100" />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>


    )
}

export default MobileNav