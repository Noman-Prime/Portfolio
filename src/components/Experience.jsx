const experiences = [
    {
        period: "Current",
        title: "Project-Based Full-Stack Developer",
        organization: "Independent Development",
        points: [
            "Designed, developed and deployed a paid business website independently.",
            "Building full-stack projects with React, Next.js, Node.js, Express and MongoDB.",
            "Implemented authentication, REST APIs, database models and administrative functionality.",
            "Created responsive interfaces for desktop and mobile devices.",
        ],
    },
    {
        period: "3+ Years",
        title: "Customer Support and Sales Representative",
        organization: "International Outsourced Projects",
        points: [
            "Worked on customer support and sales projects targeting UK, USA and Canadian customers.",
            "Communicated with international customers and handled their questions professionally.",
            "Developed practical experience in sales communication, customer dealing and problem-solving.",
            "Learned to understand customer requirements and explain services clearly.",
        ],
    },
];

const education = [
    {
        period: "4 Semesters",
        title: "Undergraduate Studies",
        organization: "Abasyn University Islamabad Campus",
        description:
            "Currently pursuing my bachelor’s degree. I have completed coursework for four semesters and maintained a CGPA above 3.6 in my confirmed results. My fourth-semester result is awaiting confirmation.",
    },
    {
        period: "1 Year",
        title: "Web and App Development",
        organization: "Saylani Mass IT Training — SMIT",
        description:
            "Completed practical training in web and application development, including JavaScript, frontend development and modern application development concepts.",
    },
    {
        period: "Ongoing",
        title: "Independent Technical Learning",
        organization: "Professional Development",
        description:
            "Continuously improving my full-stack development skills while learning Next.js, deployment, Agentic AI, tool calling and LLM-powered application concepts.",
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.25em]">
                        Experience & Education
                    </p>

                    <h2 className="break-words text-[28px] font-bold leading-tight text-white sm:text-4xl">
                        My professional and learning journey
                    </h2>

                    <p className="mt-4 text-[15px] leading-7 text-slate-400 sm:mt-5 sm:text-base">
                        A combination of practical development, technical training and
                        international customer communication experience.
                    </p>
                </div>

                <div className="mt-10 grid min-w-0 gap-10 sm:mt-14 lg:grid-cols-2">
                    <div className="min-w-0">
                        <h3 className="mb-5 text-xl font-semibold text-white sm:mb-6">
                            Professional Experience
                        </h3>

                        <div className="space-y-4 sm:space-y-5">
                            {experiences.map((experience) => (
                                <article
                                    key={experience.title}
                                    className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/30 sm:p-6"
                                >
                                    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="min-w-0">
                                            <h4 className="break-words text-base font-semibold text-white sm:text-lg">
                                                {experience.title}
                                            </h4>

                                            <p className="mt-1 break-words text-sm font-medium text-cyan-400">
                                                {experience.organization}
                                            </p>
                                        </div>

                                        <span className="w-fit shrink-0 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-slate-300">
                                            {experience.period}
                                        </span>
                                    </div>

                                    <ul className="mt-5 space-y-3">
                                        {experience.points.map((point) => (
                                            <li
                                                key={point}
                                                className="flex min-w-0 gap-3 text-sm leading-6 text-slate-400"
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                                                <span className="min-w-0 break-words">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="min-w-0">
                        <h3 className="mb-5 text-xl font-semibold text-white sm:mb-6">
                            Education & Training
                        </h3>

                        <div className="space-y-4 sm:space-y-5">
                            {education.map((item) => (
                                <article
                                    key={item.title}
                                    className="min-w-0 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/30 sm:p-6"
                                >
                                    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="min-w-0">
                                            <h4 className="break-words text-base font-semibold text-white sm:text-lg">
                                                {item.title}
                                            </h4>

                                            <p className="mt-1 break-words text-sm font-medium text-cyan-400">
                                                {item.organization}
                                            </p>
                                        </div>

                                        <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
                                            {item.period}
                                        </span>
                                    </div>

                                    <p className="mt-4 break-words text-sm leading-6 text-slate-400 sm:mt-5 sm:leading-7">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-5 min-w-0 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 sm:p-6">
                            <p className="text-sm font-semibold text-cyan-300">
                                What I bring to a software team
                            </p>

                            <p className="mt-3 break-words text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                                Development ability, strong communication, client-handling
                                experience, willingness to learn and a practical approach to
                                solving problems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;