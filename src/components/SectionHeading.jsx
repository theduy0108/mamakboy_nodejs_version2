function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-10 flex max-w-2xl flex-col ${alignment} font-display`}>
      {eyebrow && (
        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-gold)]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;