import SectionHeading from "./SectionHeading";
import { reviews } from "../data/reviewsData";
import { motion } from "framer-motion";

function ReviewsSection() {
  return (
    <section id="reviews" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-display">
        <SectionHeading
          eyebrow="Reviews"
          title="Loved for flavour, warmth, and casual premium dining."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/5 p-6"
            >
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                “{review.quote}”
              </p>
              <div className="mt-5">
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-[var(--accent-gold)]">{review.source}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ReviewsSection;