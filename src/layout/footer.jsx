import {Copyright} from "lucide-react"

export const Footer = () => {
    return <footer className="py-4 px-4 bg-secondary/50">
        <div className="flex flex-wrap items-center justify-center gap-2">
            <Copyright className="opacity-80"/>
            <p className="font-space-grotesk text-xl opacity-80"> Thanh Tai Tran</p>
        </div>
        
    </footer>
}