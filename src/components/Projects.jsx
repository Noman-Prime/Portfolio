import { useState } from "react";

const projects = [
    {
        title: "Ziwora Global Trading",
        category: "Paid Client Project",
        role: "Independent Web Developer",
        description:
            "A professional business website developed independently for a global trading company to present its services, business information and international presence.",
        contributions: [
            "Developed the website independently",
            "Created a responsive user experience",
            "Handled implementation and deployment",
        ],
        technologies: [
            "Web Development",
            "Responsive Design",
            "Deployment",
        ],
        image: "/ziwar.png",
        liveUrl: "https://ziworaglobaltrading.com/",
        fallback: "ZGT",
    },
    {
        title: "StudiesForge",
        category: "Ongoing Full-Stack Project",
        role: "Founder & Full-Stack Developer",
        description:
            "A free educational platform being developed for Pakistani students preparing for major examinations, with structured learning content and administrative management.",
        contributions: [
            "Implemented authentication and user management",
            "Developed REST APIs and MongoDB models",
            "Created a dynamic administrative dashboard",
        ],
        technologies: [
            "Next.js",
            "MongoDB",
            "Mongoose",
            "REST APIs",
            "Tailwind CSS",
        ],
        image: "/study.png",
        liveUrl: "https://studiesforge.com/",
        fallback: "SF",
    },
    {
        title: "SoftRiseHub",
        category: "Personal Brand Project",
        role: "Full-Stack Developer",
        description:
            "My personal software development brand and client acquisition platform, created to showcase services, development capabilities and future digital products.",
        contributions: [
            "Developed the frontend with React and Vite",
            "Created backend functionality with Express",
            "Designed the platform for personal branding",
        ],
        technologies: [
            "React",
            "Vite",
            "Node.js",
            "Express.js",
            "Responsive Design",
        ],
        image: "/soft.png",
        liveUrl: "https://softrisehub.com/",
        fallback: "SRH",
    },
];

const ProjectPreview = ({ project }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="relative h-48 w-full min-w-0 overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-slate-950 sm:h-56">
            {!imageError ? (
                <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-bold text-cyan-300 sm:h-24 sm:w-24 sm:rounded-3xl sm:text-2xl">
                        {project.fallback}
                    </div>
                </div>
            )}

            <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-white/10 bg-slate-950/85 px-3 py-1.5 text-[10px] font-semibold text-cyan-300 backdrop-blur sm:left-4 sm:top-4 sm:text-xs">
                {project.category}
            </span>
        </div>
    );
};

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full overflow-hidden border-y border-white/5 bg-slate-900/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="max-w-3xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.25em]">
                        Featured Projects
                    </p>

                    <h2 className="break-words text-[28px] font-bold leading-tight text-white sm:text-4xl">
                        Real applications and client work
                    </h2>

                    <p className="mt-4 text-[15px] leading-7 text-slate-400 sm:mt-5 sm:text-base">
                        These projects demonstrate my experience in frontend development,
                        backend APIs, databases, authentication, deployment and solving
                        practical business problems.
                    </p>
                </div>

                <div className="mt-10 grid min-w-0 gap-5 sm:mt-14 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group flex min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 transition hover:-translate-y-1 hover:border-cyan-400/30"
                        >
                            <div className="flex w-full min-w-0 flex-col">
                                <ProjectPreview project={project} />

                                <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
                                    <p className="break-words text-xs font-medium text-cyan-400 sm:text-sm">
                                        {project.role}
                                    </p>

                                    <h3 className="mt-2 break-words text-xl font-bold text-white sm:text-2xl">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 break-words text-sm leading-6 text-slate-400 sm:mt-4 sm:text-base sm:leading-7">
                                        {project.description}
                                    </p>

                                    <div className="mt-5 sm:mt-6">
                                        <p className="text-sm font-semibold text-white">
                                            My contribution
                                        </p>

                                        <ul className="mt-3 space-y-2">
                                            {project.contributions.map((contribution) => (
                                                <li
                                                    key={contribution}
                                                    className="flex min-w-0 gap-3 text-sm leading-6 text-slate-400"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                                                    <span className="min-w-0 break-words">
                                                        {contribution}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-300 sm:text-xs"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-6 sm:pt-7">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 sm:text-base"
                                        >
                                            View live project
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;