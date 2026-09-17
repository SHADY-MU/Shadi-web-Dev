"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";

const skillCategories = [
  {
    category: "Language",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Php"],
  },
  {
    category: "Libraries",
    skills: ["React", "Tailwind", "Bootstrap" , "More++"],
  },
  {
    category: "Database",
    skills: ["MySQL"],
  },
  {
    category: "Frameworks",
    skills: ["Next.js", "Laravel"],
  },
];

const capabilities = [
  "Landing Page",
  "E-Commerce",
  "Portfolio",
  "Educational / E-learning Platforms",
  "Custom Web Applications",
];

export default function About() {
  return (
    <section id="about" className="flex flex-col gap-8 scroll-mt-24 relative z-10">
      <ScrollReveal className="flex flex-col gap-4">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subtext">
          I&apos;m Shadi Mustafa, a passionate Web Developer with experience in building modern and
          responsive websites using the latest web technologies. I&apos;ve worked on different types of
          projects, including Landing Pages, E-commerce Websites, Portfolios, and custom web
          solutions. I focus on creating clean, user-friendly, and high-performance websites with
          modern designs.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Skills Card */}
        <ScrollReveal direction="left" delay={0.1}>
          <div className="info-card h-full">
            <h3 className="card-heading">My Skills</h3>
            <div className="flex flex-col gap-4">
              {skillCategories.map((group, groupIdx) => (
                <div key={group.category}>
                  <h4 className="skill-category-title">{group.category}</h4>
                  <div className="skill-badge-container">
                    {group.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.05 * skillIdx + 0.05 * groupIdx,
                          duration: 0.3,
                        }}
                        whileHover={{ y: -3, scale: 1.06, borderColor: "#3b82f6" }}
                        className="skill-badge cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* What I can do Card */}
        <ScrollReveal direction="right" delay={0.2}>
          <div className="info-card h-full justify-between">
            <div>
              <h3 className="card-heading">What I can do</h3>
              <ul className="bullet-list">
                {capabilities.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    className="bullet-item"
                  >
                    <motion.span
                      whileHover={{ scale: 1.5 }}
                      className="bullet-dot"
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="self-end mt-6"
            >
              <Link href="#contact" className="btn-order-pill">
                Order One
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
