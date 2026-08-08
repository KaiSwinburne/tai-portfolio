import IntroImage from "../assets/rm378-02.jpg";
import DALogo from "../assets/DA-logo.png";
import { Button } from "../components/button";
import {ChevronRight,Download} from "lucide-react";
import { HashLink as Link} from "react-router-hash-link"

export const Hero = () => {
    return <section className="relative flex min-h-screen">
        {/*Background */}
        <div className="absolute inset-0">
            <img src={IntroImage} 
             alt="Intro Image"
             className="absolute inset-0 w-full h-full object-cover opacity-30" />
        </div>
        
        {/*Content */}
        <div className="container mx-auto px-6 py-20 relative z-20 min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/*Left Column - Text*/}
                <div className="space-y-8 lg:col-span-1 order-2 lg:order-1">
                    <div>
                        {/*Headline */}
                        <h1 className="font-space-grotesk text-6xl lg:text-7xl font-bold">Hi, I'm Tai</h1>
                        {/*Description */}
                        <p className="font-space-grotesk text-xl lg:text-2xl max-w-full lg:max-w-2xl">
                            A computer science graduate at Swinburne who is passionate in applying analytical thinking in data manipulation with 
                            software development skills to present clients solution to real-world problem.
                        </p>
                        <br></br>
                        <p className="font-space-grotesk text-xl lg:text-2xl max-w-full lg:max-w-2xl">
                            I am currently seeking junior Data Analyst/Data Engineer positions.
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5">
                        <Link to="/#projects" className="relative flex items-center justify-center gap-2 text-xl bg-highlight hover:bg-highlight/90 shadow-lg shadow-highlight/25 rounded-[8px] px-4 py-2" 
                                           >Explore my work <ChevronRight/></Link>
                        <a 
                            className="relative flex items-center justify-center gap-2 text-xl bg-transparent border-2 border-highlight text-highlight rounded-[8px] hover:bg-highlight hover:text-foreground px-4 py-2"
                            href="https://drive.google.com/uc?export=download&id=1yCebbB6BLPiPcZ5dwyZu-vTSxmdAukx6" 
                                           ><Download/> View my CV</a>
                    </div>
                </div>

                {/*Right Column - Image*/}
                <div className="flex justify-center order-1 lg:order-2">
                    <img src={DALogo} className="w-auto object-contain max-w-xs max-h-120" alt="DA Logo" />
                </div>
            </div>
        </div>
    </section>
}