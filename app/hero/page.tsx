"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Poppins, Roboto_Condensed } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-condensed',
})

export default function HeroPage() {
  const pathname = usePathname()
  const router = useRouter()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/competition", label: "Competition" },
    { href: "/social-media", label: "Social media" },
  ]

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <li className="links" key={link.href}>
          <Link
            href={link.href}
            className={`hover:text-primary transition-colors ${
              pathname === link.href ? "underline font-semibold" : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  )

  const handleApplyClick = () => {
    router.push('/#connect-and-chat')
  }

  return (
    <div className={` hero__container  h-screen bg-[#6C360C] text-white relative overflow-hidden flex flex-col ${poppins.className} ${robotoCondensed.className} font-sans`}>
      <div className="relative z-10 flex flex-col h-full">
        <header className="header__container container mx-auto px-4 flex justify-between items-center py-4">
          <Image
            src="/logo-removebg-preview.png"
            alt="Bean You Logo"
            width={120}
            height={60}
            className="object-contain"
          />
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-lg">
              <NavLinks />
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-grow container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
          <div className="hero__coffee absolute top-14 z-0 md:w-1/2 left-0 -bottom-12">
            <Image
              src="/image-coffee.png"
              alt="Coffee splash background"
              layout="fill"
              objectFit="cover"
              className="hero__coffee__image object-contain"
            />
          </div>
          <div className="hero__girl md:w-1/2 relative z-10 h-full flex items-center justify-center order-2 md:order-1">
            <Image
              src="/image-girl.png"
              alt="Smiling person enjoying coffee"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left pl-6 mt-16 md:mt-0 order-1 md:order-2 relative z-20">
            <div className="hero__text__wrapper md:mt-[-20%]">
              <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4">
                <span className=" itsnotjust__text text-[#F86A4A]">Its not Just </span>
                <span className="coffee__text text-black">coffee,</span>
              </h1>
              <h2 className="expression__text text-2xl md:text-4xl text-[#F98824] font-semibold mb-6 font-poppins">
                Its an expression of yourself.
              </h2>
              <p className="hero__description text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-8 font-roboto-condensed">
                Be the Face of Change with Bean You: Join Our Gen Z Revolution
                and Represent Us on the Boldest conversations
              </p>
              <Button 
                className="apply__button bg-[#F86A4A] hover:bg-[#F86A4A] text-white font-bold py-4 px-8 rounded-full text-sm"
                onClick={handleApplyClick}
              >
                Apply Here
              </Button>
            </div>
          </div>
        </main>

        <div className="absolute bottom-4 right-4 w-24 h-24">
          <Image
            src="/coffee-cup.png"
            alt="Bean You coffee cup"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}