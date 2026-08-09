const skillGroups = [
    {
        title: "Frontend Development",
        label: "FE",
        skills: [
            "React.js",
            "Next.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Vite",
            "Responsive Design",
        ],
    },
    {
        title: "Backend Development",
        label: "BE",
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT Authentication",
            "Cookies",
            "API Integration",
            "Server-Side Logic",
        ],
    },
    {
        title: "Database & Tools",
        label: "DB",
        skills: [
            "MongoDB",
            "Mongoose",
            "Git",
            "GitHub",
            "Postman",
            "Vercel",
            "Cloud Deployment",
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.25em]">
                        Technical Skills
                    </p>

                    <h2 className="break-words text-[28px] font-bold leading-tight text-white sm:text-4xl">
                        Technologies I use to build digital products
                    </h2>

                    <p className="mt-4 text-[15px] leading-7 text-slate-400 sm:mt-5 sm:text-base">
                        My primary focus is full-stack JavaScript development, supported by
                        practical experience in authentication, APIs, databases and
                        deployment.
                    </p>
                </div>

                <div className="mt-10 grid min-w-0 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {skillGroups.map((group) => (
                        <article
                            key={group.title}
                            className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07] sm:p-6"
                        >
                            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-sm font-bold text-slate-950 sm:h-12 sm:w-12 sm:text-base">
                                    {group.label}
                                </span>

                                <h3 className="min-w-0 break-words text-lg font-semibold text-white sm:text-xl">
                                    {group.title}
                                </h3>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="max-w-full break-words rounded-lg border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-xs text-slate-300 sm:px-3 sm:py-2 sm:text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-6 min-w-0 rounded-2xl border border-purple-400/20 bg-purple-400/5 p-4 sm:mt-8 sm:p-6">
                    <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
                        <span className="w-fit shrink-0 rounded-full bg-purple-400/15 px-3.5 py-2 text-xs font-semibold text-purple-300 sm:px-4 sm:text-sm">
                            Currently Learning
                        </span>

                        <div className="min-w-0">
                            <h3 className="break-words text-base font-semibold text-white">
                                Agentic AI and LLM-powered applications
                            </h3>

                            <p className="mt-1 break-words text-sm leading-6 text-slate-400">
                                Learning AI agents, tool calling, workflow execution and how
                                intelligent systems can interact with external APIs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;