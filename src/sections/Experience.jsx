const experiences = [
    {
        period: "Feburary 2025 - June 2025",
        title: "Data & Management Analytics Intern",
        company: "Prompcorp",
        description: "Collaborated in a team of 6 people to analyze project's metrics such as sales, compliances, etc. and develop a custom module on the ERPNext platform that tracks those metrics.\nDeveloped practical skills in a professional environment such as project management, data analysis, and team collaboration in application development.",
        current: false,
        technologies: ["ERPNext", "JavaScript"]
    },
    {
        period: "Jan 2025 - Now",
        title: "Online Team Member",
        company: "Woolworths CFC West Footscray",
        description: "Collaborated with multiple team members in a facility designed for handling online grocery orders, products picking, restocking, truck dispatch. \nDisplayed flexibility, adaptability and willingness to learn on the job and honed skillsets such as communication, multitasking in a fast-paced environment",
        current: true,
        technologies: []
    }
]

export const Experience = () => {
    return <section id="experience" className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            {/*Section Header */}
            <div className="max-w-3xl mb-8">
                <h1 className="font-bold text-5xl font-space-grotesk">
                    Work Experience
                </h1>
            </div>

            {/*Timeline */}
            <div className="relative ">
                <div className="timeline-glow absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-highlight/70 via-highlight/30 to-transparent shadow-[0_0_25px_rgba(54,173,163,0.8)]" />
                
                {/*Experience Items */}
                <div className="space-y-12">
                    {experiences.map((exp,index) => (
                        <div key={index} className="relative grid">

                            {/*Timeline dot */}
                            <div className="absolute left-0 top-0 w-3 h-3 bg-highlight rounded-full -translate-x-1/2 z-10"></div>

                            {/*Content */}
                            <div className="pl-8"> 
                                <div className="glass p-6 rounded-2xl border-2 border-highlight/40 hover:border-highlight/60 transition-all duration-500">
                                    <span className="text-[18px] font-space-grotesk text-highlight">{exp.period}</span>
                                    <h3 className="font-space-grotesk font-bold text-2xl">{exp.title}</h3>
                                    <p className="font-space-grotesk text-gray-400 font-bold">{exp.company}</p>
                                    <p className="font-space-grotesk mt-4 whitespace-pre-line">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">{exp.technologies.map((tech,index) => (
                                        <span className="font-space-grotesk bg-secondary p-2 text-sm text-gray-300 rounded-[8px]">{tech}</span>
                                    ))}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}