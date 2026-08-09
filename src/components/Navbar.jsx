import { useEffect, useState } from "react";

const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [imageError, setImageError] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    useEffect(() => {
        if (!menuOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [menuOpen]);

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
            <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="flex min-w-0 items-center gap-2.5 sm:gap-3"
                >
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-cyan-400 bg-cyan-400/10 sm:h-11 sm:w-11">
                        {!imageError ? (
                            <img
                                src="/nomi.jpeg"
                                alt="Muhammad Noman"
                                onError={() => setImageError(true)}
                                className="h-full w-full object-cover object-top"
                            />
                        ) : (
                            <span className="flex h-full w-full items-center justify-center bg-cyan-400 text-sm font-bold text-slate-950">
                                MN
                            </span>
                        )}
                    </div>

                    <div className="min-w-0 max-[360px]:hidden">
                        <p className="truncate text-sm font-bold leading-5 text-white sm:text-base">
                            Muhammad Noman
                        </p>

                        <p className="truncate text-[11px] leading-4 text-slate-400 sm:text-xs">
                            Full Stack Developer
                        </p>
                    </div>
                </a>

                <div className="hidden items-center gap-4 lg:flex xl:gap-7">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="rounded-md px-1 py-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                        >
                            {item.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="ml-1 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                        Contact Me
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen((previous) => !previous)}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 lg:hidden"
                >
                    {menuOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {menuOpen && (
                <>
                    <button
                        type="button"
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                        className="fixed inset-0 top-16 -z-10 bg-slate-950/75 backdrop-blur-sm sm:top-18 lg:hidden"
                    />

                    <div
                        id="mobile-navigation"
                        className="absolute left-0 top-full w-full border-b border-white/10 bg-slate-950 shadow-2xl lg:hidden"
                    >
                        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-5 sm:px-6">
                            <div className="mx-auto flex max-w-7xl flex-col gap-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                                    >
                                        {item.name}
                                    </a>
                                ))}

                                <a
                                    href="#contact"
                                    onClick={closeMenu}
                                    className="mt-4 rounded-xl bg-cyan-400 px-5 py-3.5 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                                >
                                    Contact Me
                                </a>

                                <p className="mt-4 border-t border-white/10 px-4 pt-4 text-center text-xs text-slate-500">
                                    Full-Stack JavaScript Developer
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default Navbar;