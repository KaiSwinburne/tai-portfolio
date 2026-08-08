import IMG1 from "@/assets/ad_img_1.jpg";
import IMG2 from "@/assets/ad_img_2.jpg";
import IMG3 from "@/assets/ad_img_3.jpg";
import IMG4 from "@/assets/ad_img_4.jpg";
import IMG5 from "@/assets/ad_img_5.jpg";
import IMG6 from "@/assets/ad_img_6.jpg";
import IMG7 from "@/assets/ad_img_7.jpg";
import IMG8 from "@/assets/ad_img_8.jpg";
import IMGPOS from "@/assets/ad_img_pos.jpg";

import DESCIMG1 from "@/assets/ad_desc_img_1.jpg";
import DESCIMG2 from "@/assets/ad_desc_img_2.jpg";
import DESCIMG3 from "@/assets/ad_desc_img_3.jpg";
import DESCIMG4 from "@/assets/ad_desc_img_4.jpg";
import DESCIMG5 from "@/assets/ad_desc_img_5.jpg";

import { Navbar } from "@/layout/navbar";
import { Footer } from "@/layout/footer";
import { Carousel } from "@/components/coursel";
import { useEffect } from "react";
import { HashLink as Link} from "react-router-hash-link";
import { ImageModal } from "@/components/image-modal";
import {ArrowLeft, UserCog, CalendarCheck, Goal, CircleUserRound, Eye} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectTags = ["Python","scikit-learn","PyQT"];

const imgDict = [
    {
        image: IMG1,
        subtitle: "Real-time XAI Explanation graphs UI"
    },
    {
        image: IMG2,
        subtitle: "Real-time human understandable explanation UI"
    },
    {
        image: IMG3,
        subtitle: "Anomaly Detection results in real-time"
    },
    {
        image: IMG4,
        subtitle: "Offline Mode Anomaly Detection Dashboard Report"
    },
    {
        image: IMG5,
        subtitle: "Satellite Dataset Generation UI"
    },
    {
        image: IMG6,
        subtitle: "Anomaly Detection Online Mode UI"
    },
    {
        image: IMG7,
        subtitle: "Anomaly Detection Offline Mode UI"
    },
    {
        image: IMG8,
        subtitle: "Basilisk simulation overview"
    },
]

const developmentJournal = [
    {
        heading: "1. Context",
        description: "This project is the final-year Capstone project, where I worked in a team of 5 people developing the integrated software throughout two semesters using the Agile development framework.\n\nIn semester one, I worked on developing & optimizing the anomaly detection and XAI models, while in semester two I helped finalize the integration process and developed the UI for the program.",
        image: DESCIMG1,
        alt: "Project development timeline"
    },
    {
        heading: "2. Data Exploration",
        description: `Using Python libraries such as Panda, NumPy, etc. I performed basic exploratory data analysis on the provided dataset using various techniques as Data Profiling, Box Plots, Statistical Summary, etc. The main goal was to understand the structure of the telemetry channel data that contains contextual and point anomalies to build the ML model later on.`,
        image: DESCIMG2,
        alt: "Contextual anomalies visualization during exploration"
    },
    {
        heading: "3. Model Optimization",
        description: `To improve the ProtoAD model performance on multivariate, non-linear data anomaly detection, I employed several techniques, such as PCA dimensionality reduction for reducing overlapped data, or use Mahalanobis Distance as the main scoring metric for the anomaly detection model. These solutions improved detection performance and efficiency greatly to the model.`,
        image: DESCIMG3,
        alt: "PCA Dimensionality Reduction Implementation"
    },
    {
        heading: "4. Integration with Basilisk simulation",
        description: `At the start of Semester 2, I was in charge of integrating the Explainable AI feature into Basilisk's live simulation datastream, which would allow real-time explanation for detected anomalies.\n\nThis was achieved by initializing the XAI parameters only when the anomaly is detected during simulation runtime and take the reconstructed data (generated from anomaly prediction process) to run the explainability process on it.`,
        image: DESCIMG4,
        alt: "Code snippet of running XAI process when detecting anomalies"
    },
    {
        heading: "5. UI Development",
        description: `The UI was developed using PyQT, which enables the program to show a dashboard report of the detected anomalies in both real-time and offline. Furthermore, users can configure their satellite data and detection model parameters.`,
        image: IMG4,
        alt: "The dashboard report of anomaly detection result"
    },
    {
        heading: "6. Documentation and Manuals",
        description: `At the end of the project, the team ensured that development process was documented carefully, as well as a user manual was made, equipping first-time users with adequate knowledge to use program.`,
        image: DESCIMG5,
        alt: "User Manual"
    },
];

export const AnomalyDetectionProject = () => {
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
                                <h1 className="font-bold text-4xl md:text-5xl font-space-grotesk">Anomaly detection and explainable AI in the context of autonomous satellite system</h1>
                                <p className="font-space-grotesk text-[18px] md:text-xl">A software prototype that detects anomalous data produced in Basilisk simulation platform with explanation using SHAP XAI.</p>
                                
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
                                    <p className="font-space-grotesk">Data Science, Data Analysis</p>
                                </div>

                                <div>
                                    <h2 className="font-space-grotesk text-2xl font-bold flex flex-row gap-2 items-center"> <CalendarCheck/> Completion Date</h2>
                                    <p className="font-space-grotesk">November 2025</p>
                                </div>
                            </div>
                        </div>

                        {/*Redirection Buttons */}
                        <div className="flex flex-col gap-3 mb-3">
                            <ImageModal text_preview={true} alt="View project poster" img={IMGPOS} default_style={true}/>
                            <p className="font-space-grotesk text-xl italic">There are no Live Demo or GitHub repository links due to the clients' requests to leave the project private.</p>
                        </div>

                        {/*Goal & Roles*/}
                        <div className="relative grid gap-2 lg:gap-6 lg:grid-cols-2">
                            {/*Goal*/}
                            <div className="glass p-6 rounded-2xl border-2 border-highlight/40 hover:border-highlight/60 transition-all duration-500">
                                <h2 className="font-space-grotesk text-2xl lg:text-3xl font-bold flex flex-row items-center gap-2 "> <Goal size={30}/> Goal</h2>
                                <p className="font-space-grotesk"> 
                                    The main goal is to deliver an integrated software prototype that simulates anomalous satellite metadata on the Basilisk platform, performs real-time anomaly detection using the ProtoAD reconstruction-based model, and visualizes results on an interactive dashboard with SHAP-driven explanations. 
                                    The system empowers stakeholders to monitor, interpret, and respond to satellite anomalies through live, explainable AI insights.
                                </p>
                            </div>

                            {/*Roles*/}
                            <div className="glass p-6 rounded-2xl border-2 border-highlight/40 hover:border-highlight/60 transition-all duration-500">
                                <h2 className="font-space-grotesk text-2xl lg:text-3xl font-bold flex flex-row items-center gap-2 "> <CircleUserRound size={30}/> My Role</h2>
                                <p className="font-space-grotesk"> 
                                    As the team lead, I directed both technical development and project coordination. I led satellite data exploration, engineered and optimized the ProtoAD anomaly detection model, supported real-time detection pipeline integration, and designed the PyQt-based user interface. 
                                    Additionally, I managed stakeholder communication through weekly client meetings, maintained project documentation, and coordinated task delegation to ensure timely delivery across all workstreams.
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