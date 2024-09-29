import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <section className="bg-primary-50 py-5 bg-dotted-pattern bg-contain md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
           <div className="flex flex-col justify-center gap-8">
             <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
             <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
              <Button size='lg'  asChild className="w-full md:w-36 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:bg-indigo-700 transition-transform transform duration-200 ease-in-out hover:scale-105 shadow-lg">
                <Link href='#events'>
                    Explore now
                </Link>
              </Button>
           </div>
           <Image 
            src='/assets/images/hero.png'
            alt="hero image"
            width={1000}
            height={1000} 
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"/>
        </div>
     </section>
     <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Trusted by <br/> Thousands of Events</h2>
      <div className="flex flex-col w-full gap-5 md:flex-row">
        Search 
        CategoryFilter
      </div>
     </section>
    </>
  );
}
