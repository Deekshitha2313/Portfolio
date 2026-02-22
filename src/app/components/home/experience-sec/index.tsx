import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2025",
      title: "Organization Website Sample",
      description:
        "A simple website built using HTML, CSS and ReactJS. Fully responsive design with modern UI.",
    },
    {
      year: "2025",
      title: "AI-Based Wildlife Crossing Detection and Alert System",
      description:
        "Developed an AI-powered system to detect wildlife movement and send real-time alerts to prevent road accidents.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Projects</h2>
            <p className="text-xl text">
              ( {experiences.length.toString().padStart(2, "0")} )
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                {/* Year */}
                <div>
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                </div>

                {/* Timeline Line + Dot */}
                <div className="relative">
                  {index < experiences.length - 1 && (
                    <div className="absolute left-0 top-3 w-px h-40 bg-softGray"></div>
                  )}

                  <div className="absolute left-0 top-0 transform -translate-x-1/2">
                    <div className="w-3.5 h-3.5 rounded-full border border-pink-500 bg-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                  </div>
                </div>

                {/* Description */}
                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;