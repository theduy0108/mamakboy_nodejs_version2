import SectionHeading from "./SectionHeading";
import hainanse from "../assets/hainanese-signature.jpg";
import soto from "../assets/soto_beef_noodle.jpg";
import charhor from "../assets/char_hor_fun.jpeg";
import { motion } from "framer-motion";



function SignatureDishes() {
  const dishes = [
    { id: 1, name: "Hainanese Chicken Rice", tag: "Best Seller", image: hainanse },
    { id: 2, name: "Soto Beef Noodle Soup", tag: "Popular", image: soto },
    { id: 3, name: "Char Hor Fun", tag: "Chef Pick", image: charhor },
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
          title="The plates that you will love."
          description="Made fresh daily, cooked with care, and loved by everyone who tries them. Order once and you will understand why they never leave our menu."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <motion.article
              key={dish.id}
              className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/5 p-5"
            >
              <div className="mb-4 overflow-hidden rounded-[1.25rem] signature-card-image-wrap">
                <div className="w-full object-cover transition duration-500 hover:scale-105 ignature-card-image">
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