import SectionHeading from "./SectionHeading";
import rotiImg from "../assets/roti_signature.jpg";
import nasiImg from "../assets/nasi_signature.jpg";
import meeImg from "../assets/migoreeng_signature.jpg";
import { motion } from "framer-motion";



function SignatureDishes() {
  const dishes = [
    { id: 1, name: "Roti Canai", tag: "Best Seller", image: rotiImg },
    { id: 2, name: "Nasi Lemak", tag: "Popular", image: nasiImg },
    { id: 3, name: "Mee Goreng", tag: "Chef Pick", image: meeImg },
  ];

  return (
    <section id="signature" className="py-20 font-display">
      <motion.div
  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
        <SectionHeading
          eyebrow="Signature Dishes"
          title="The plates people come back."
          description="Use this section to feature the most recognisable and highest-converting dishes with stronger imagery."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <motion.article
              key={dish.id}
              className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/5 p-5"
            >
              <div className="mb-4 aspect-[4/5] rounded-[1.25rem] bg-[var(--bg-deep)] flex items-center justify-center text-[var(--text-secondary)]">
                <div className="mb-4 aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-gold)]">
                {dish.tag}
              </span>
              <h3 className="mt-3 text-2xl font-bold">{dish.name}</h3>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SignatureDishes;