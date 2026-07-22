import { Button } from "@/components/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
const navLinks = [
    {href: "#skills", label: "Skills"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpened] = useState(false);

    return <header className="fixed top-0 left-0 right-0 z-50 bg-background pt-5 md:py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-4xl font-bold tracking-tight font-space-grotesk cur">THANH TAI TRAN</a>

            {/*Desktop View Nav Items*/}
            <div className="hidden md:flex items-center gap-1">
                <div className="px-2 py-1 flex items-center gap-1">
                    {/* Map the links label in the navLinks object into <a> */}
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-2xl font-space-grotesk 
                                                        text-foreground hover:text-nav-items-blurred">
                            {link.label}
                        </a>
                    ))}                   
                </div>
            </div>
            {/*Contact Button */}
            <div className="hidden md:block">
                <Button className="text-2xl bg-highlight hover:bg-highlight/90 shadow-lg shadow-highlight/25 rounded-full" px="px-4" py="py-2">Contact Me</Button>
            </div>

            {/*Mobile Hamburger logo*/}
            <button className="md:hidden p-2 text-foreground hover:cursor-pointer" 
                    onClick={() => setIsMobileMenuOpened((prev) => !prev)}>
                {/* ? is tenerary function, opens "X" if true, Menu if false */}
                {isMobileMenuOpen ? <X/> : <Menu size={24}/>} 
            </button>
        </nav>

        {/*Mobile View Items*/}
        {/*In this context, && is the conditional rendering operator, renders the right-side code if true, empty if false */}
        {isMobileMenuOpen && (
            <div className="md:hidden glass animation-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <a href={link.href} 
                            key={index} 
                            className="text-xl font-space-grotesk py-2
                                    text-foreground hover:text-nav-items-blurred">
                            {link.label}
                        </a>
                    ))}
                    <Button className="text-xl bg-highlight hover:bg-highlight/90 shadow-lg shadow-highlight/25 rounded-full" px="px-4" py="py-2">Contact Me</Button>
                </div>    
            </div>
        )}
    </header>
}