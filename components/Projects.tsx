"use client";

import Link from "next/link";
import { ExternalLink, Globe } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";

interface ProjectItem {
  id: number;
  title: string;
  img: string;
  category: string;
  description: string;
  link: string;
  tech: string[];
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "CineVerse",
    img: "/imgs/pro1.png",
    category: "Landing Page",
    description:
      "CineVerse is a modern, React-built landing page designed for a fictional movie platform. It focuses on intuitive usability and sleek content layout to highlight services and boost subscriptions.",
    link: "https://shady-mu.github.io/CineVerse/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "G.P.S",
    img: "/imgs/pro2.png",
    category: "E-Commerce",
    description:
      "A modern and responsive e-commerce web application featuring high-performance product showcases, dynamic filtering, and a seamless shopping cart experience.",
    link: "#",
    tech: ["Next.js", "Laravel", "MySQL" , "Tailwind" , "React" , "TypeScript" , "Php"],
  },
  {
    id: 3,
    title: "My Portfilio",
    img: "/imgs/pro3.png",
    category: "Landing Page",
    description:
      "A fast, responsive web application tailored for businesses with clean architectural patterns, interactive UI elements, and full mobile optimization.",
    link: "#",
    tech: ["Next.js", "Tailwind", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-8 scroll-mt-24 relative z-10">
      <ScrollReveal>
        <h2 className="section-heading">My Projects</h2>
        <p className="section-subtext mt-2">
          A selection of recent projects demonstrating clean code, modern architecture, and thoughtful UI/UX.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            delay={index * 0.12}
            direction="up"
            className="h-full flex"
          >
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-[#0b102b]/95 border border-[#1b2554] hover:border-blue-500/70 rounded-2xl p-5 sm:p-6 flex flex-col justify-between w-full shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-5 w-full">
                {/* Browser Mockup Window Container */}
                <div className="w-full rounded-xl overflow-hidden border border-[#1f2c66] bg-[#060a1e] flex flex-col shadow-lg">
                  {/* Browser Mockup Header Bar */}
                  <div className="w-full px-3 py-2 bg-[#090f2b] border-b border-[#1b2554] flex items-center justify-between select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#050816]/70 border border-[#1b2554]/60 text-[10px] text-slate-400 font-mono">
                      <Globe className="w-3 h-3 text-blue-400" />
                      <span className="truncate max-w-[120px]">
                        {project.title.toLowerCase().replace(/\s+/g, "")}.dev
                      </span>
                    </div>
                  </div>

                  {/* Image Display Window */}
                  <div className="relative w-full h-48 sm:h-52 bg-[#080d24] overflow-hidden flex items-center justify-center">
                    {project.img ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      /* Fallback Mockup Layout */
                      <div className="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-br from-slate-800/80 via-[#0d163d] to-[#080d24]">
                        <div className="flex flex-col gap-2 w-full items-center opacity-40">
                          <div className="w-3/4 h-3 bg-blue-400/40 rounded animate-pulse" />
                          <div className="w-1/2 h-2.5 bg-slate-500/40 rounded" />
                        </div>
                      </div>
                    )}
                    {/* Subtle bottom shadow overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0b102b]/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-2 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-blue-300 px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-600/30 shrink-0">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] bg-[#121a42] text-blue-200 border border-[#202e6e]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Website Button */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full pt-5 mt-auto"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-pill w-full flex items-center justify-center gap-2 group-hover:bg-blue-600/30 group-hover:border-blue-400 py-2.5"
                >
                  <span className="font-semibold">{project.link == "#" ? "Not Available" : "View Website"}</span>
                  <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
