function FeaturedStrip() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="aspect-[4/5] rounded-[1.5rem] border border-[var(--border-soft)] bg-white/5 flex items-center justify-center text-[var(--text-secondary)]">
          Food image 1
        </div>
        <div className="aspect-[4/5] rounded-[1.5rem] border border-[var(--border-soft)] bg-white/5 flex items-center justify-center text-[var(--text-secondary)]">
          Food image 2
        </div>
        <div className="aspect-[4/5] rounded-[1.5rem] border border-[var(--border-soft)] bg-white/5 flex items-center justify-center text-[var(--text-secondary)]">
          Food image 3
        </div>
      </div>
    </section>
  );
}

export default FeaturedStrip;