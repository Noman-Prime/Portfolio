const highlights = [
  {
    number: "01",
    title: "Practical Development",
    description:
      "Experience building responsive websites, full-stack applications and REST APIs using modern JavaScript technologies.",
  },
  {
    number: "02",
    title: "Client Communication",
    description:
      "More than three years of experience working on outsourced UK, USA and Canada customer support and sales projects.",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "Currently improving my Next.js expertise and learning Agentic AI concepts, tool calling and intelligent workflows.",
  },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Client Handling",
  "Fast Learning",
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full overflow-hidden border-y border-white/5 bg-slate-900/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid min-w-0 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.25em]">
              About Me
            </p>

            <h2 className="max-w-2xl break-words text-[28px] font-bold leading-tight text-white sm:text-4xl">
              Combining technical development with real client communication
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-400 sm:mt-7 sm:space-y-5 sm:text-base sm:leading-8">
              <p>
                I am a full-stack JavaScript developer with experience in
                React, Next.js, Node.js, Express and MongoDB. I enjoy building
                useful digital products with clean interfaces and reliable
                functionality.
              </p>

              <p>
                I am an undergraduate student at Abasyn University Islamabad
                and have completed coursework for four semesters. I also
                completed a one-year Web and App Development program at SMIT.
              </p>

              <p>
                I have developed a paid business website and I am currently
                building StudiesForge, a free educational platform for students
                in Pakistan.
              </p>

              <p>
                My customer support and sales background has strengthened my
                communication, problem-solving and client-handling abilities.
                It helps me understand both the technical and business sides of
                a project.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 sm:px-4 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 gap-4 sm:gap-5">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="group min-w-0 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-400/30 hover:bg-slate-950 sm:p-6"
              >
                <div className="flex min-w-0 items-start gap-3 sm:gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-400 sm:h-12 sm:w-12 sm:text-base">
                    {item.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="break-words text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 break-words text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;