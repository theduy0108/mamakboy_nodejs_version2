import SectionHeading from "./SectionHeading";
import about_image from "../assets/about-kitchen.jpg";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white/5 p-3">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={about_image}
              alt="Mamakboy restaurant interior with warm lighting and welcoming atmosphere"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
        </div>
        </div>

        <div className="flex items-center font-display">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Built around comfort, flavour, and a welcoming table."
              description="Mamakboy is all about serving up Malaysian favourites with bold flavours, warm energy, and a layout that makes ordering feel quick and easy. 
                           We want people to feel hungry the second they land here."
            />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Warm hospitality",
              desc: "Friendly service and food designed for sharing.",
            },
            {
              title: "Bold flavour",
              desc: "Strong Malaysian-inspired dishes with memorable identity.",
            },
            {
              title: "Easy takeaway",
              desc: "Fast to scan, fast to order, and easy to love.",
            },
            {
              title: "Local vibe",
              desc: "Friendly, casual, and full of warm night-market character.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[var(--border-soft)] bg-white/5 p-4"
            >
              <h3 className="font-display font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;