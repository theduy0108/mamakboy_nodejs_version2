import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { menuCategories } from "../data/menuData";

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const selectedCategory = useMemo(
    () => menuCategories.find((category) => category.id === activeCategory),
    [activeCategory]
  );

  return (
    <section id="menu" className="py-20">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-9 font-display" >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionHeading
            eyebrow="Menu"
            title="Street food favourites, built to feel bold and easy to browse."
            description="Real food. Real flavour. Made fresh daily with fresh ingredients and bold flavours coming straight from our kitchen to your plate."
          />

          <div className="mt-6 flex flex-wrap gap-3">
            {menuCategories.map((category) => {
              const isActive = category.id === activeCategory;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`font-display rounded-full px-5 py-2.5 text-lg font-extrabold transition ${
                    isActive
                      ? "bg-[var(--accent-gold)] text-[var(--bg-main)]"
                      : "border border-[var(--border-soft)] text-[var(--text-primary)]"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        <a
          href="/Mamakboy_Menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display shrink-0 rounded-full bg-[var(--accent-cta)] px-6 py-3 text-lg font-extrabold text-[var(--text-primary)]"
        >
          Full Menu
        </a>
      </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="grid gap-8 lg:grid-cols-[1.45fr_0.85fr]"
          >
            <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white/5 p-3">
              <div className="aspect-[5/4] overflow-hidden rounded-[2rem]">
                <img
                  src={selectedCategory.featuredImage}
                  alt={selectedCategory.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {selectedCategory.items.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.06 }}
                  className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/5 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-extrabold leading-[0.95] md:text-[2.2rem]">
                        {item.name}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                        {item.description}
                      </p>
                    </div>

                    <span className="font-display shrink-0 text-2xl font-extrabold leading-none text-[var(--accent-gold)]">
                      {item.price}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default MenuSection;