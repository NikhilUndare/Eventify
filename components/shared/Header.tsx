import Image from "next/image"
import Link from "next/link"
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href='/' className="w-36">
         <Image 
          src='/assets/images/eventify_logo.svg' 
          alt="Eventify logo"
          width={134}
          height={38}
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
            <SignedIn>
                <UserButton afterSwitchSessionUrl="/" />
            </SignedIn>
           <SignedOut>
             <Button className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:bg-indigo-700 transition-transform transform duration-200 ease-in-out hover:scale-105 shadow-lg" asChild>
              <Link href='/sign-in'>
                Login
              </Link>   
             </Button>
           </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header