import IMG1 from "@/assets/sd_img_1.jpg";
import IMG2 from "@/assets/sd_img_2.jpg";
import IMG3 from "@/assets/sd_img_3.jpg";
import DESCIMG1 from "@/assets/sd_desc_img_1.jpg";
import DESCIMG2 from "@/assets/sd_desc_img_2.jpg";
import DESCIMG3 from "@/assets/sd_desc_img_3.jpg";
import DESCIMG4 from "@/assets/sd_desc_img_4.jpg";
import DESCIMG5 from "@/assets/sd_desc_img_5.jpg";

import { Navbar } from "@/layout/navbar";
import { Footer } from "@/layout/footer";
import { Carousel } from "@/components/coursel";
import { useEffect } from "react";
import { HashLink as Link} from "react-router-hash-link";
import { ImageModal } from "@/components/image-modal";
import {ArrowLeft, UserCog, CalendarCheck, Goal, CircleUserRound} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectTags = ["C#","Unity"];
const liveDemoLink = "https://kaiswinburne.itch.io/supply-drop";

const imgDict = [
    {
        image: IMG1,
        subtitle: "Supply Drop main menu"
    },
    {
        image: IMG2,
        subtitle: "Supply Drop 2D level"
    },
    {
        image: IMG3,
        subtitle: "Supply Drop 3D level"
    }
]

const developmentJournal = [
    {
        heading: "1. Context",
        description: "The game was created to promote United Nation's Sustainable Develop Goals (SDG), particularly, the Zero Hunger initiative. The main idea for the game was to have supplies delivered to impoverished areas, the more supplies are delivered the more points players receives.",
        image: DESCIMG1,
        alt: "UN Sustainable Develop Goal"
    },
    {
        heading: "2. Gameplay Conceptualization",
        description: `The gameplay was conceptualized and tested using drawings. This allowed the team to dicuss the features that can be realistically implemented, while ensuring an engaging experience for casual players.`,
        image: DESCIMG2,
        alt: "Gameplay concept art"
    },
    {
        heading: "3. Working on Main Gameplay Systems",
        description: `With the game concepts finalized, I programmed the main gameplay mechanics such as player movement's and action, game objects' properties and systems such as spawners, physics interaction, etc.\n\nFurthermore, Object Oriented Programming was the main design framework for how the game architecture was built.`,
        image: DESCIMG3,
        alt: "Game Core system (SuppliesManager) code snippet"
    },
    {
        heading: "4. UI Development",
        description: `In addition to core system programming, I also handled the UI & UX design of the game. I worked on the menu UI, player's HUD using Unity Canvas system incrementally using teammates' feedback and other games' UI as reference.`,
        image: DESCIMG4,
        alt: "UI & UX development"
    },
    {
        heading: "5. Release",
        description: `Leveraged Unity’s WebGL export pipeline to deploy the game on itch.io, ensuring cross-browser compatibility and seamless accessibility for all players regardless of hardware limitations.`,
        image: DESCIMG5,
        alt: "Itch.io game homepage"
    },
];

export const SupplyDropProject = () => {
    //Make sure the page starts at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const projectLink = "/#projects"

    return(
        <div className="min-h-svh overflow-x-hidden">
            <Navbar />
            <main className="pt-24 md:pt-26">

                {/*Overview Section */}
                <section className="relative overflow-hidden">
                    <div className="container mx-auto px-3 relative z-10">
                        {/*Return to Projects*/}
                        <div>
                            <Link to={projectLink} className="flex flex-row gap-2 font-space-grotesk text-gray-400 hover:underline transition-all duration-200">
                                <ArrowLeft/> Return to projects
                            </Link>
                        </div>

                        {/*Overview grid*/}
                        <div className="py-8 grid lg:grid-cols-[3fr_1fr] gap-5 lg:gap-20 w-full ">
                            {/*Heading - Left Column*/}
                            <div className="flex flex-col justify-center gap-4">
                                <h1 className="font-bold text-4xl md:text-5xl font-space-grotesk">Supply Drop</h1>
                                <p className="font-space-grotesk text-[18px] md:text-xl">Developed with Unity, this project is a puzzle game focusing on planes providing humanitarian aid by giving supply crates.</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {projectTags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-[16px] rounded-full text-xs border border-highlight/30 bg-white/5 font-space-grotesk">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/*Infos - Right Column */}
                            <div className="flex flex-row md:flex-col gap-10">
                                <div>
                                    <h2 className="font-space-grotesk text-2xl font-bold flex flex-row gap-2 items-center"><UserCog/> Discipline</h2>
                                    <p className="font-space-grotesk">Game Development</p>
                                </div>

                                <div>
                                    <h2 className="font-space-grotesk text-2xl font-bold flex flex-row gap-2 items-center"> <CalendarCheck/> Completion Date</h2>
                                    <p className="font-space-grotesk">November 2025</p>
                                </div>
                            </div>
                        </div>

                        {/*Redirection Buttons */}
                        <div className="flex flex-wrap gap-3 mb-3">
                            <a
                                href={liveDemoLink}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-lg bg-white text-black font-medium text-xl hover:bg-white/70 transition font-space-grotesk"
                            >
                                Live Demo
                            </a>
                        </div>

                        {/*Goal & Roles*/}
                        <div className="relative grid gap-2 lg:gap-6 lg:grid-cols-2">
                            {/*Goal*/}
                            <div className="glass p-6 rounded-2xl border-2 border-highlight/40 hover:border-highlight/60 transition-all duration-500">
                                <h2 className="font-space-grotesk text-2xl lg:text-3xl font-bold flex flex-row items-center gap-2 "> <Goal size={30}/> Goal</h2>
                                <p className="font-space-grotesk"> 
                                    The project is a puzzle game, developed using Unity which allows players to drop supplies to designated zone to score. The project is developed
                                    with OOP principles and data-driven designs.
                                </p>
                            </div>

                            {/*Roles*/}
                            <div className="glass p-6 rounded-2xl border-2 border-highlight/40 hover:border-highlight/60 transition-all duration-500">
                                <h2 className="font-space-grotesk text-2xl lg:text-3xl font-bold flex flex-row items-center gap-2 "> <CircleUserRound size={30}/> My Role</h2>
                                <p className="font-space-grotesk"> 
                                    As team lead for a four-person group, I coordinated workflows, delegated tasks, and facilitated regular team meetings. Serving as tech lead, I directed 2D gameplay programming, oversaw QA testing, and developed the game UI and menu systems.
                                </p>
                            </div>
                        </div>

                        {/*Gallery Carousel*/}
                        <Carousel img_dict={imgDict}/>

                    </div>
                </section>

                {/*Development Section */}
                <section className="relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        {/*Heading */}
                        <div className="flex flex-col py-4">
                            <h2 className="font-bold text-3xl md:text-4xl font-space-grotesk">Project Development</h2>
                            {/*Underline */}
                            <div className="mt-2 h-1 w-40 bg-highlight" />
                            <p className="font-space-grotesk text-xl whitespace-pre-wrap">How the project was conceptualized and developed.</p>
                        </div>

                        {/*Contents */}
                        <div >
                            {developmentJournal.map((dev,index) => (
                                <div id={index} className="flex flex-col lg:flex-row lg:items-center py-4">
                                    <div className={`flex flex-col gap-4 lg:basis-3/5 ${index % 2 === 0 ? "lg:order-1":"lg:order-2"}`}>
                                        <h3 className="font-space-grotesk text-2xl lg:text-3xl font-bold">{dev.heading}</h3>
                                        <p className="font-space-grotesk whitespace-pre-wrap lg:text-xl">{dev.description}</p>
                                    </div>

                                    <div className={`flex flex-col items-center px-4 lg:basis-3/5 ${index % 2 === 0 ? "lg:order-2":"lg:order-1"}`}>
                                        <ImageModal img={dev.image} alt={dev.alt}/>
                                        <p className="font-space-grotesk text-[14px] lg:text-[16px] italic text-gray-300">{dev.alt}</p>
                                    </div> 
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}