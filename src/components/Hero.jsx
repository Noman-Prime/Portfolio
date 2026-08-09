const Hero = () => {
    return (
        <section
            id="home"
            className="relative w-full overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:py-32"
        >
            <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative mx-auto grid w-full min-w-0 max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="min-w-0">
                    <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs leading-5 text-cyan-300 sm:px-4 sm:text-sm">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                        <span className="break-words">
                            Available for software development opportunities
                        </span>
                    </div>

                    <p className="mb-3 text-base font-medium text-cyan-400 sm:text-lg">
                        Hello, I’m Muhammad Noman
                    </p>

                    <h1 className="max-w-3xl break-words text-[32px] font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
                        Full-Stack JavaScript Developer
                    </h1>

                    <p className="mt-5 w-full max-w-2xl text-[15px] leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
                        I build responsive and practical web applications using React,
                        Next.js, Node.js, Express and MongoDB. I enjoy transforming ideas
                        into reliable digital products while currently exploring Agentic
                        AI development.
                    </p>

                    <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row">
                        <a
                            href="#projects"
                            className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto sm:text-base"
                        >
                            View My Projects
                        </a>

                        <a
                            href="/Muhammad-Noman-Resume.pdf"
                            download
                            className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/10 sm:w-auto sm:text-base"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="mt-8 grid w-full grid-cols-3 gap-2 border-t border-white/10 pt-6 sm:max-w-xl sm:gap-4">
                        <div className="min-w-0 rounded-xl bg-white/[0.04] px-2 py-4 text-center sm:px-4">
                            <p className="text-xl font-bold text-white sm:text-2xl">3+</p>
                            <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-sm">
                                Client Communication
                            </p>
                        </div>

                        <div className="min-w-0 rounded-xl bg-white/[0.04] px-2 py-4 text-center sm:px-4">
                            <p className="text-xl font-bold text-white sm:text-2xl">3</p>
                            <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-sm">
                                Real Projects
                            </p>
                        </div>

                        <div className="min-w-0 rounded-xl bg-white/[0.04] px-2 py-4 text-center sm:px-4">
                            <p className="text-xl font-bold text-white sm:text-2xl">1+</p>
                            <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-sm">
                                Paid Project
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-full min-w-0 max-w-lg">
                    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-3">
                        <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900 sm:rounded-2xl">
                            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />

                                <p className="ml-2 text-[10px] text-slate-500 sm:text-xs">
                                    developer.js
                                </p>
                            </div>

                            <div className="w-full min-w-0 space-y-2 p-4 font-mono text-[11px] leading-6 sm:space-y-3 sm:p-8 sm:text-sm">
                                <p className="break-words">
                                    <span className="text-purple-400">const</span>{" "}
                                    <span className="text-cyan-300">developer</span>{" "}
                                    <span className="text-white">= {"{"}</span>
                                </p>

                                <div className="min-w-0 space-y-2 pl-3 sm:space-y-3 sm:pl-5">
                                    <p className="break-words">
                                        <span className="text-blue-300">name:</span>{" "}
                                        <span className="text-green-300">"Muhammad Noman"</span>,
                                    </p>

                                    <p className="break-words">
                                        <span className="text-blue-300">role:</span>{" "}
                                        <span className="text-green-300">
                                            "Full-Stack Developer"
                                        </span>
                                        ,
                                    </p>

                                    <p className="break-words">
                                        <span className="text-blue-300">frontend:</span>{" "}
                                        <span className="text-green-300">
                                            ["React", "Next.js"]
                                        </span>
                                        ,
                                    </p>

                                    <p className="break-words">
                                        <span className="text-blue-300">backend:</span>{" "}
                                        <span className="text-green-300">
                                            ["Node.js", "Express"]
                                        </span>
                                        ,
                                    </p>

                                    <p className="break-words">
                                        <span className="text-blue-300">database:</span>{" "}
                                        <span className="text-green-300">"MongoDB"</span>,
                                    </p>

                                    <p className="break-words">
                                        <span className="text-blue-300">learning:</span>{" "}
                                        <span className="text-green-300">"Agentic AI"</span>,
                                    </p>
                                </div>

                                <p className="text-white">{"};"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;