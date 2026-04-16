import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import hero_food from "../assets/hero-food.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[-120px] top-[80px] h-[260px] w-[260px] rounded-full bg-[var(--accent-gold)] blur-3xl" />
        <div className="absolute bottom-[40px] right-[-100px] h-[240px] w-[240px] rounded-full bg-[var(--accent-cta)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <h1 className="font-display max-w-2xl text-[4.2rem] leading-[0.9] font-extrabold tracking-[-0.02em] sm:text-[5.2rem] lg:text-[6rem]">
                    Mamakboy brings 
                    <br />
                    <span className="text-[var(--accent-gold)]">Malaysian street food</span>
                    <br />
                      to your screen.
                  </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
            Mamakboy brings a bold editorial food experience into a warm Malaysian
            street-food brand with rich dishes, strong visuals, and a menu built to be
            shared.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="#menu">Explore Menu</CTAButton>
            <CTAButton href="#catering" variant="secondary">
              Catering Menu
            </CTAButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
        <div className="rounded-[2rem] border border-[var(--border-soft)] bg-white/5 p-3">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={hero_food}
              alt="Mamakboy signature Malaysian street food"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;