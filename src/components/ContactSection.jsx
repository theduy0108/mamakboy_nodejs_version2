import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-display">
        <div className="grid gap-8 rounded-[2rem] border border-[var(--border-soft)] bg-white/5 p-8 lg:grid-cols-2 font-display">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Find us, order ahead, or plan your next event."
              description="Keep this section direct, easy to scan, and conversion-friendly."
            />

            <div className="space-y-4 text-sm text-[var(--text-secondary)]">
              <p>
                <span className="font-semibold text-[var(--text-primary)]">Address:</span>{" "}
                 <br /> 38 Rundle Mall, Adelaide SA 5000
                 <br /> Located in Rundle Mall (near Myer Centre)
                    
              </p>
              <p>
                <span className="font-semibold text-[var(--text-primary)]">Phone:</span>{" "}
                <br/> (08) 7080 6816
              </p>
              <p>
                <span className="font-semibold text-[var(--text-primary)]">Email:</span>{" "}
                <br/> info@mamakboy.com.au
              </p>
              <p>
                <span className="font-semibold text-[var(--text-primary)]">Hours:</span>{" "}
                <br /> Monday – Thurday: 11:00 AM – 9:30 PM
                <br /> Friday – Sunday: 11:00 AM – 11:00 PM
              </p>
            </div>

          </div>
      <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-deep)] min-h-[400px]">
        <iframe
          title="Mamakboy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22007.884773326205!2d138.60624250470104!3d-34.91920480946961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced677d603bd%3A0x1abbb1d6c1813a5f!2sShop%2088%2C%2014%2F38%20Rundle%20Mall%2C%20Adelaide%20SA%205000!5e0!3m2!1svi!2sau!4v1775189339060!5m2!1svi!2sau"
          className="h-full w-full min-h-[500px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <CTAButton href="tel:+61870806816">
          Call Now
        </CTAButton>

        <CTAButton
          href="mailto:mamakboy_adelaide@outlook.com"
          variant="secondary"
        >
          Send Email
        </CTAButton>
      </div>


        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;