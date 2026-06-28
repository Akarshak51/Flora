// Three exact variants found in the Figma file:
// 1. "outline" — 217x64, border 2px white, radius 12px, used for "Buy Now" / "Explore"
// 2. "solid"   — white fill, black text, radius 8px, uppercase 22px/700, used for "Subscribe"
// 3. "icon"    — 55x55 square, border 2px white, radius 12px, opacity 0.75, used for cart icon buttons

const VARIANT_STYLES = {
  outline:
    "border-2 border-white text-white font-normal hover:bg-white hover:text-ink focus-visible:ring-white",
  solid:
    "bg-white text-black font-bold uppercase tracking-wide hover:bg-gray-100 focus-visible:ring-white",
  icon:
    "border-2 border-white text-white opacity-75 hover:opacity-100 focus-visible:ring-white",
};

const Button = ({
  children,
  variant = "outline",
  href,
  type = "button",
  onClick,
  className = "",
  ariaLabel,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-sans " + // rounded-xl = 12px, exact Figma radius for outline/icon buttons
    "transition-colors duration-200 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink " +
    "disabled:opacity-40 disabled:cursor-not-allowed";

  // "solid" variant uses 8px radius per Figma (Rectangle 13), not 12px — override
  const radiusOverride = variant === "solid" ? "rounded-lg" : "";

  const sizeStyles =
    variant === "icon"
      ? "h-[55px] w-[55px]" // exact Figma icon button size
      : variant === "solid"
      ? "h-[64.9px] px-6 text-[22px] leading-[26.6px]" // exact Figma Subscribe button size/type
      : "h-16 w-[217px] px-8 text-[28px] leading-[33.9px]"; // exact Figma outline button: 217x64, 28px text

  const combined = `${base} ${radiusOverride} ${sizeStyles} ${VARIANT_STYLES[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combined} aria-label={ariaLabel} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined} aria-label={ariaLabel} {...rest}>
      {children}
    </button>
  );
};

export default Button;
