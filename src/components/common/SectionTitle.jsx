// Exact Figma pattern: decorative quote-mark flourishes flank the heading,
// font Inter/600/55px, white, with a soft drop-shadow.
// Used 4 times in Figma: "Our Trendy plants", "Our Top Selling Plants",
// "Customer Review", "Our Best o2" — always centered with decorative vectors either side.

const QuoteFlourish = ({ flip = false }) => (
  <svg
    width="61"
    height="63"
    viewBox="0 0 61 63"
    fill="none"
    className={`opacity-50 ${flip ? "scale-x-[-1]" : ""}`}
    aria-hidden="true"
  >
    {/* Approximated decorative quote mark — exact vector path is not present in the
        Figma JSON export (vector nodes with no fill/stroke omit path data);
        re-trace this from Figma's "Vector 5" / "Vector 6" nodes for a pixel-exact shape. */}
    <path
      d="M15 10C8 14 4 22 4 32c0 8 5 14 12 14s11-6 11-13c0-6-4-11-10-11-1 0-2 0-3 1 1-7 6-13 13-16z"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-10">
      <QuoteFlourish />
      <h2
        className="text-center font-sans font-semibold text-white text-[28px] leading-[34px] sm:text-[40px] sm:leading-[48px] lg:text-[55px] lg:leading-[66.5625px] drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
        // mobile/tablet sizes are a scaled-down extrapolation (no mobile frame in Figma);
        // lg: and above is the exact Figma value (55px / 66.5625px line-height)
      >
        {title}
      </h2>
      <QuoteFlourish flip />
    </div>
  );
};

export default SectionTitle;
