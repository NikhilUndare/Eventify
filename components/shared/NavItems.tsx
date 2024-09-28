 "use client"

import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"


const NavItems = () => {
    const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5
      md:flex-row">
        {headerLinks.map((link) => {
            const isActive = pathname == link.route
            return (
            <li key={link.route} className={`${isActive && 'bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-3xl px-4 py-2 text-white '} 
             flex-center p-medium-16 whitespace-nowrap `}>
               <Link href={link.route}>{link.label}</Link>
             </li>
            )
        })}
    </ul>
  )
}

export default NavItems