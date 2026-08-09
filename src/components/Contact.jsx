const contactDetails = {
    email: "yaqoobn024@gmail.com",
    whatsapp: "923186186046",
    location: "Islamabad, Pakistan",
    github: "https://github.com/Noman-Prime",
    linkedin: "https://www.linkedin.com/in/muhammad-noman-026011347",
};

const Contact = () => {
    const whatsappMessage = encodeURIComponent(
        "Hello Muhammad Noman, I would like to discuss a development opportunity with you."
    );

    const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${whatsappMessage}`;

    return (
        <section
            id="contact"
            className="w-full overflow-hidden border-y border-white/5 bg-slate-900/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 sm:rounded-3xl">
                    <div className="grid min-w-0 lg:grid-cols-2">
                        <div className="min-w-0 p-5 sm:p-8 lg:p-12 xl:p-14">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.25em]">
                                Contact Me
                            </p>

                            <h2 className="max-w-xl break-words text-[28px] font-bold leading-tight text-white sm:text-4xl">
                                Let’s discuss a project or development opportunity
                            </h2>

                            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-400 sm:text-base">
                                I am available for junior software development opportunities,
                                internships, freelance projects and collaborations. Feel free
                                to contact me directly.
                            </p>

                            <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">
                                <a
                                    href={`mailto:${contactDetails.email}`}
                                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:border-cyan-400/30 hover:bg-white/[0.07] sm:gap-4 sm:p-4"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 font-bold text-cyan-400 sm:h-11 sm:w-11">
                                        @
                                    </span>

                                    <div className="min-w-0">
                                        <p className="text-xs text-slate-500">Email</p>

                                        <p className="break-all text-sm font-medium text-white group-hover:text-cyan-300 sm:text-base">
                                            {contactDetails.email}
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:border-cyan-400/30 hover:bg-white/[0.07] sm:gap-4 sm:p-4"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-xs font-bold text-cyan-400 sm:h-11 sm:w-11 sm:text-sm">
                                        WA
                                    </span>

                                    <div className="min-w-0">
                                        <p className="text-xs text-slate-500">WhatsApp</p>

                                        <p className="text-sm font-medium text-white group-hover:text-cyan-300 sm:text-base">
                                            +{contactDetails.whatsapp}
                                        </p>
                                    </div>
                                </a>

                                <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 sm:gap-4 sm:p-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-xs font-bold text-cyan-400 sm:h-11 sm:w-11 sm:text-sm">
                                        PK
                                    </span>

                                    <div className="min-w-0">
                                        <p className="text-xs text-slate-500">Location</p>

                                        <p className="text-sm font-medium text-white sm:text-base">
                                            {contactDetails.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex min-w-0 items-center border-t border-white/10 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-purple-500/10 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-12 xl:p-14">
                            <div className="relative w-full min-w-0">
                                <span className="inline-flex max-w-full rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-2 text-xs font-medium text-cyan-300 sm:px-4 sm:text-sm">
                                    Open to opportunities
                                </span>

                                <h3 className="mt-5 break-words text-2xl font-bold text-white sm:mt-6 sm:text-3xl">
                                    Have an opportunity in mind?
                                </h3>

                                <p className="mt-4 max-w-lg text-[15px] leading-7 text-slate-300 sm:text-base">
                                    Send me an email or message me on WhatsApp. I would be happy
                                    to discuss how my development and communication skills can
                                    contribute to your team.
                                </p>

                                <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row">
                                    <a
                                        href={`mailto:${contactDetails.email}?subject=Development Opportunity`}
                                        className="w-full rounded-xl bg-cyan-400 px-5 py-3.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto sm:px-6 sm:text-base"
                                    >
                                        Send an Email
                                    </a>

                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-6 sm:text-base"
                                    >
                                        Message on WhatsApp
                                    </a>
                                </div>

                                <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10 sm:pt-7">
                                    <p className="mb-4 text-sm text-slate-400">
                                        Find me professionally
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                                        <a
                                            href={contactDetails.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3 text-center text-sm font-medium text-white transition hover:border-cyan-400/30 hover:text-cyan-300 sm:px-5"
                                        >
                                            GitHub ↗
                                        </a>

                                        <a
                                            href={contactDetails.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="rounded-lg border border-white/10 bg-slate-950/40 px-4 py-3 text-center text-sm font-medium text-white transition hover:border-cyan-400/30 hover:text-cyan-300 sm:px-5"
                                        >
                                            LinkedIn ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;