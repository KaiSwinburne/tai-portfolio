import IMG1 from "@/assets/enfrc_img_1.jpg";
import IMG2 from "@/assets/enfrc_img_2.jpg";
import IMG3 from "@/assets/enfrc_img_3.jpg";
import DESCIMG1 from "@/assets/enfrc_desc_img_1.jpg";
import DESCIMG2 from "@/assets/enfrc_desc_img_2.jpg";
import DESCIMG3 from "@/assets/enfrc_desc_img_3.jpg";
import DESCIMG4 from "@/assets/enfrc_desc_img_4.jpg";
import DESCIMG5 from "@/assets/enfrc_desc_img_5.jpg";

import { Navbar } from "@/layout/navbar";
import { Footer } from "@/layout/footer";
import { Carousel } from "@/components/coursel";
import { HashLink as Link} from "react-router-hash-link";
import { ImageModal } from "@/components/image-modal";
import {ArrowLeft, UserCog, CalendarCheck, Goal, CircleUserRound} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectTags = ["JavaScript","KNIME","Python"];
const liveDemoLink = "https://kaiswinburne.github.io/COS30045-Data-Visualisation-Project";
const gitHubLink = "https://github.com/KaiSwinburne/COS30045-Data-Visualisation-Project";

const imgDict = [
    {
        image: IMG1,
        subtitle: "Line chart visualisation"
    },
    {
        image: IMG2,
        subtitle: "Bar chart visualisation"
    },
    {
        image: IMG3,
        subtitle: "Heatmap visualisation"
    }
]

const developmentJournal = [
    {
        heading: "1. Context",
        description: "The raw data was retrieved from Australian Government Bureau of Infrastructure and Transport Research Economics (BITRE) website from this link https://www.bitre.gov.au/publications/2024/road-safety-enforcement-data. This project focuses primarily on mobile phone use while driving offences in all Australian jurisdictions in 2024",
        image: DESCIMG1,
        alt: "Raw dataset website"
    },
    {
        heading: "2. Data Cleaning & Transformation",
        description: `I used KNIME as the main tool for cleaning the raw data, such as handling missing values, filtering data of mobile phone use incidents and removing duplications. I also handled data transformation with techniques such as: Categorical Standardisation, Feature Extraction, Data Separation and Aggregation.\n\nThis resulted in consistent aggregated data for mobile phone fines in all jurisidictions from 2008-2023.`,
        image: DESCIMG2,
        alt: "KNIME workflow"
    },
    {
        heading: "3. Visualisation Prototypes",
        description: `To test the visualisations that provide the best insights into the mobile phone fines trend. Excel was used as the main prototyping tool, taking transformed data and make visualisations and gather feedback for further improvements.`,
        image: DESCIMG3,
        alt: "Line chart prototype"
    },
    {
        heading: "4. Programming Interactive Visualisations",
        description: `Visualisations were programmed with JavaScript using D3 library. I created the Line chart and the Heatmap with custom aggregated data in JavaScript. Furthermore, interactions such as tooltip, years and jurisdictions selectors were created to allow users freedom to explore the data better.`,
        image: DESCIMG4,
        alt: "Code Snippet of Line Chart"
    },
    {
        heading: "5. Deployment",
        description: `GitHub was used as the main Version Control tool, as well as the site deployment. All the data was saved as CSV files and saved on GitHub.`,
        image: DESCIMG5,
        alt: "Project GitHub page"
    },
];

export const MobileDataProject = () => {
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
                                <h1 className="font-bold text-4xl md:text-5xl font-space-grotesk">Explore data of enforcement on mobile phone use while driving across Australia jurisdictions</h1>
                                <p className="font-space-grotesk text-[18px] md:text-xl">This project is an interactive dashboard provides insights into mobile phone fines while driving across Australian jurisdictions.</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {projectTags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs border border-highlight/30 bg-white/5 font-space-grotesk">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/*Infos - Right Column */}
                            <div className="flex flex-row md:flex-col gap-10">
                                <div>
                                    <h2 className="font-space-grotesk text-2xl font-bold flex flex-row gap-2 items-center"><UserCog/> Discipline</h2>
                                    <p className="font-space-grotesk">Data Science, Data Analysis</p>
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
                            <a
                            href={gitHubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-lg border border-white/20 font-medium text-xl hover:bg-highlight/10 hover:border-highlight/40 transition font-space-grotesk"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg"/> GitHub
                            </a>
                        </div>

                        {/*Goal & Roles*/}
                        <div className="relative grid gap-2 lg:gap-6 lg:grid-cols-2">
                            {/*Goal*/}
                            <div className="glass p-6 rounded-2xl border-2 border-highlight/40 hover:border-highlight/60 transition-all duration-500">
                                <h2 className="font-space-grotesk text-2xl lg:text-3xl font-bold flex flex-row items-center gap-2 "> <Goal size={30}/> Goal</h2>
                                <p className="font-space-grotesk"> 
                                    The main goal of this project is to provide insights into mobile phone fines while driving across Australian jurisdictions.
                                    The dashboard must give an overview on mobile phone fines trend, demographic and geographic hotspots.
                                </p>
                            </div>

                            {/*Roles*/}
                            <div className="glass p-6 rounded-2xl border-2 border-highlight/40 hover:border-highlight/60 transition-all duration-500">
                                <h2 className="font-space-grotesk text-2xl lg:text-3xl font-bold flex flex-row items-center gap-2 "> <CircleUserRound size={30}/> My Role</h2>
                                <p className="font-space-grotesk"> 
                                    I was the team lead in a group of two. I am mainly responsible for data cleaning & transformation, as well as programming the 
                                    interactive visualisation charts in JavaScript using D3. The charts I worked on are the line chart and heatmap, while I assisted with the bar chart.
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