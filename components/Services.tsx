"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";

const services = [
  {
    title: "Landing Page",
    subtitle: "What you will get",
    description:
      "Get a modern and responsive landing page designed to promote your product or service and help boost your sales.",
    features: [
      "Modern and attractive design",
      "Clear presentation of your product/service",
      "SEO-friendly structure for better search visibility",
      "Optimized for a smooth user experience and conversions",
    ],
  },
  {
    title: "E-commerce",
    subtitle: "What you will get",
    description:
      "A modern and responsive e-commerce website designed to showcase products, deliver a seamless shopping experience, and drive online sales.",
    features: [
      "Modern and attractive design",
      "Clear and organized product showcase",
      "Easy and smooth shopping experience",
      "Optimized for better conversions and sales",
    ],
  },
  {
    title: "Business Website",
    subtitle: "What you will get",
    description:
      "Get a modern and responsive business website designed to showcase your brand and services and build a strong online presence.",
    features: [
      "Modern and professional design",
      "Clear presentation of your services and brand",
      "Responsive layout for all devices",
      "SEO-friendly structure for better search visibility",
    ],
  },
  {
    title: "Custom Website",
    subtitle: "What you will get",
    description:
      "Get a custom website built around your unique ideas, requirements, and business goals.",
    features: [
      "Fully customized design and functionality",
      "Tailored to your specific needs",
      "Modern and responsive experience",
      "Built to match your vision",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="flex flex-col gap-8 scroll-mt-24 relative z-10">
      <ScrollReveal>
        <h2 className="section-heading">Services</h2>
        <p className="section-subtext mt-2">
          Tailored web development solutions crafted for your business goals and audience.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {services.map((service, index) => (
          <ScrollReveal
            key={service.title}
            delay={index * 0.12}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="service-card h-full justify-between hover:shadow-2xl hover:shadow-blue-900/30 hover:border-blue-500/60 transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-subtitle mt-1">{service.subtitle}</p>
                </div>

                <p className="service-desc">{service.description}</p>
              </div>

              <div className="feature-pill-list mt-4">
                {service.features.map((feature) => (
                  <motion.div
                    key={feature}
                    whileHover={{ x: 4 }}
                    className="feature-pill"
                  >
                    <span className="feature-pill-dot" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
