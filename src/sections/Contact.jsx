import {Mail} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
    return <section id="contact" className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            {/*Heading */}
            <h1 className="font-bold text-5xl font-space-grotesk">
                Contact Me
            </h1>
            
            <div className="mt-5">
                {/*Email */}
                <p className="font-space-grotesk text-2xl inline-flex items-center gap-2">
                    <Mail size={40}/> tranthanhtai023@gmail.com
                </p>
            </div>

            <div className="flex flex-wrap gap-5 mt-5">
                <a
                    href="https://github.com/KaiSwinburne?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg font-medium text-xl bg-black text-white hover:bg-black/60 transition font-space-grotesk"
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg"/> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/thanh-tai-tran-998104258/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg font-medium text-xl bg-linkedin text-white hover:bg-linkedin/60 transition font-space-grotesk"
                    >
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
            </div>
        </div>
    </section>
}