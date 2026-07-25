import { SkillContainer } from "@/components/skill-container"
import {MoveLeft, MoveRight} from "lucide-react"
import { useState } from "react"

import PythonLogo from "@/assets/Python.svg"
import HTMLLogo from "@/assets/HTML5.svg"
import CSharpLogo from "@/assets/CSharp.svg"
import JSLogo from "@/assets/JavaScript.svg"
import PostgreSQLLogo from "@/assets/PostgresSQL.svg"
import KNIMELogo from "@/assets/KNIME.svg"
import PowerBILogo from "@/assets/BI.svg"
import ExcelLogo from "@/assets/Excel.svg"
import DockerLogo from "@/assets/Docker.svg"
import GitHubActionsLogo from "@/assets/GitHubActions.svg"
import AzureDevOpsLogo from "@/assets/AzureDevops.svg"
import AzureLogo from "@/assets/Azure.svg"

export const Skills = () => {
    const container_1 = {"Python": PythonLogo, "HTML/CSS": HTMLLogo, "JavaScript": JSLogo, "C#": CSharpLogo};
    const container_2 = {"PostGresSQL": PostgreSQLLogo, "Excel": ExcelLogo, "KNIME": KNIMELogo, "PowerBI": PowerBILogo};
    const container_3 = {"Azure":AzureLogo, "GitHub Actions":GitHubActionsLogo, "Azure DevOps": AzureDevOpsLogo, "Docker": DockerLogo};

    const carouselData = [container_1, container_2, container_3];
    const carouselDataLabel = ["Programming", "Data", "Cloud & DevOps"];
    const [activeItemIndex, setActiveItemIndex] = useState(0);


    const goToPrevious = () => {
        setActiveItemIndex((current) => (current === 0 ? carouselData.length - 1 : current - 1));
    };

    const goToNext = () => {
        setActiveItemIndex((current) => (current === carouselData.length - 1 ? 0 : current + 1));
    };

    return <section id="skills" className="scroll-mt-28">
        {/*Heading */}
        <div className="flex flex-col justify-center items-center py-4">
            <h1 className="font-bold text-5xl font-space-grotesk">Skills</h1>
            <p className="font-space-grotesk text-2xl">My technical arsenal</p>
        </div>

        {/* Desktop view*/}
        <div className="hidden md:grid md:grid-cols-3 md:place-items-center">
            <SkillContainer itemsList={container_1} heading="Programming"></SkillContainer>
            <SkillContainer itemsList={container_2} heading="Data"></SkillContainer>
            <SkillContainer itemsList={container_3} heading="Cloud & Devops"></SkillContainer>
        </div>

        {/* Mobile View*/}
        <div className="md:hidden ">

            {/*Mobile View SKills Carousel */}
            <div className="grid grid-cols-3 place-items-center gap-4">
                <button
                    onClick={goToPrevious}
                    className="rounded-full bg-primary hover:cursor-pointer hover:bg-highlight hover:border-highlight transition-all duration-300 px-2 py-2"
                >
                    <MoveLeft size={40} />
                </button>
                
                {/* Contents */}
                <div className="w-max">
                    <SkillContainer itemsList={carouselData[activeItemIndex]} heading={carouselDataLabel[activeItemIndex]}></SkillContainer>
                </div>

                <button
                    onClick={goToNext}
                    className="rounded-full bg-primary hover:cursor-pointer hover:bg-highlight hover:border-highlight transition-all duration-300 px-2 py-2"
                >
                    <MoveRight size={40}/>
                </button>
            </div>

            {/* Item indicator */}
            <div className="flex justify-center items-center gap-5">

                {/* Map Indicator to the carousel data index */}
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Show ${carouselDataLabel[index]} skills`}
                        aria-current={index === activeItemIndex ? "true" : undefined}
                        className={`h-5 w-5 rounded-full border-2 transition-colors ${
                            index === activeItemIndex
                                ? "bg-highlight border-highlight"
                                : "border-foreground/40 "
                        }`}
                    />
                ))}
            </div>
        </div>
        

    </section>
}