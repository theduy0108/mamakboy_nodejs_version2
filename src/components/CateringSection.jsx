import { useState } from "react";
import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import officeImg from "../assets/office.jpg";
import partyImg from "../assets/party.jpg";
import familyImg from "../assets/family.jpg";

function CateringSection() {
  const packages = [
    {
      id: 1,
      title: "Office Lunches",
      description:
        "Flexible catering for team lunches, staff events, and work functions.",
      image: officeImg,
    },
    {
      id: 2,
      title: "Parties & Functions",
      description:
        "More premium package presentation for birthdays, celebrations, and events.",
      image: partyImg,
    },
    {
      id: 3,
      title: "Family Gatherings",
      description:
        "Warm, generous sharing options designed for relaxed group dining.",
      image: familyImg,
    },
  ];

  const [activePackage, setActivePackage] = useState(packages[0]);

  return (
    <section id="catering" className="py-20">
      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Catering"
          title="Catering menus & pricing for events, parties, and office lunches."
          description="This section should feel polished, premium, and easy to scan, with room to expand package options later."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            {packages.map((pkg) => {
              const isActive = pkg.id === activePackage.id;

              return (
                <article
                  key={pkg.id}
                  onClick={() => setActivePackage(pkg)}
                  className={`cursor-pointer rounded-[1.5rem] border p-6 transition ${
                    isActive
                      ? "border-[var(--accent-gold)] bg-white/10"
                      : "border-[var(--border-soft)] bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <h3 className="font-display text-2xl font-extrabold">
                    {pkg.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">
                    {pkg.description}
                  </p>
                </article>
              );
            })}

            <div className="pt-2">
              <CTAButton href="#contact">Request Catering</CTAButton>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white/5 p-3">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <img
                src={activePackage.image}
                alt={activePackage.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CateringSection;