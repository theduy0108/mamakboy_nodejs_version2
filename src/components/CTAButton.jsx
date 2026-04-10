function CTAButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
       "bg-[var(--accent-cta)] text-[var(--text-primary)] hover:bg-[var(--accent-cta-hover)] hover:scale-105 hover:shadow-lg",
    secondary:
      "border border-[var(--border-soft)] bg-transparent text-[var(--text-primary)] hover:bg-white/5",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default CTAButton;