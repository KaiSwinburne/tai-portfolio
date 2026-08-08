import EnforcementProjectIMG from "@/assets/enforcement_project.jpg";
import CapstoneIMG from "@/assets/CapstoneIMG.jpg";
import SupplyIMG from "@/assets/supplydrop.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {ArrowUpRight} from "lucide-react"
import { Link } from "react-router-dom";

const projects = [
    {
        name: "Explore data of enforcement on mobile phone use while driving across Australia jurisdictions",
        description: "This project is an interactive dashboard provides insights into mobile phone fines while driving across Australian jurisdictions.",
        tags: ["JavaScript","KNIME","Python"],
        link: "https://kaiswinburne.github.io/COS30045-Data-Visualisation-Project/",
        github: "https://github.com/KaiSwinburne/COS30045-Data-Visualisation-Project",
        more_info: "/mobile-data-project",
        image: EnforcementProjectIMG
    },
    {
        name: "Anomaly detection and explainable AI in the context of autonomous satellite system",
        description: "A software prototype that detects anomalous data produced in Basilisk simulation platform with explanation using SHAP XAI.",
        tags: ["Python","scikit-learn","PyQT"],
        link: "",
        github: "",
        more_info: "/anomaly-detection-project",
        image: CapstoneIMG
    },
    {
        name: "Supply Drop",
        description: "Developed with Unity, this project is a puzzle game focusing on planes providing humanitarian aid by giving supply crates.",
        tags: ["C#","Unity"],
        link: "https://kaiswinburne.itch.io/supply-drop",
        github: "",
        more_info: "/supply-drop-project",
        image: SupplyIMG
    }
];

export const Projects = () => {
    const project_counts = projects.length;

    {/*Change the grid styling based on number of projects */}
    const gridDeco = project_counts % 2 === 0 ? "grid md:grid-cols-2 gap-8 mt-2":"grid md:grid-cols-3 gap-8 mt-2";

    return <section id="projects" className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            {/*Heading */}
            <div className="flex flex-col justify-center items-center py-4">
                <h1 className="font-bold text-5xl font-space-grotesk">Featured Projects</h1>
                <p className="font-space-grotesk  text-xl lg:text-2xl">Here are my recent and most notable projects</p>
            </div>

            {/*Project Grid*/}
            <div className={gridDeco}>
                {projects.map((project,idx) => (
                    <article key={idx} className="glass group rounded-2xl overflow-hidden border border-highlight/40 bg-black/20 shadow-lg shadow-highlight/25">
                        
                        {/*Image */}
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        {/*Descriptions*/}
                        <div className="p-5">
                            <h3 className="text-2xl font-bold font-space-grotesk mb-3">{project.name}</h3>
                            <p className="text-sm md:text-base opacity-80 mb-4 font-space-grotesk">{project.description}</p>

                            {/*Project Tags*/}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-[16px] rounded-full text-xs border border-highlight/30 bg-white/5 font-space-grotesk">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {project.link ? 
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/70 transition font-space-grotesk"
                                    >
                                        Live Demo
                                    </a>
                                : null}

                                <Link 
                                    to={project.more_info}
                                    className="px-4 py-2 rounded-lg border border-transparent bg-highlight text-white font-medium text-sm hover:bg-highlight/10 hover:border-highlight/40 transition font-space-grotesk inline-flex items-center gap-2"
                                >
                                    <ArrowUpRight className="w-4 h-4"/> 
                                    View Project
                                </Link>

                                {project.github ? 
                                    <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 rounded-lg border border-white/20 font-medium text-sm hover:bg-highlight/10 hover:border-highlight/40 transition font-space-grotesk"
                                    >
                                        <FontAwesomeIcon icon={faGithub} size="lg"/> GitHub
                                    </a>
                                : null}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
        
    </section>
}