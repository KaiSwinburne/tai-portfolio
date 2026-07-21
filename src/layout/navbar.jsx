import { Button } from "@/components/button"
const navLinks = [
    {href: "#skills", label: "Skills"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
]

export const Navbar = () => {
    return <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-4xl font-bold tracking-tight font-space-grotesk cur">THANH TAI TRAN</a>

            {/*Desktop View Nav Items*/}
            <div className="flex items-center gap-1">
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
            <div>
                <Button className="text-2xl bg-highlight hover:bg-highlight/90 shadow-lg shadow-highlight/25" px="px-4" py="py-2 hover:cursor-pointer">Contact Me</Button>
            </div>
        </nav>
    </header>
}