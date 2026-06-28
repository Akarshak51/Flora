import { useState, useEffect } from "react";
import { navLinks } from "../../data/navLinks";
import { images } from "../../assets/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      {/* Figma navbar sits directly on top of the hero photo, not on a solid bar — absolute positioning,
          transparent background, matches exact Figma layering */}
      <nav
        className="mx-auto flex max-w-[1728px] items-center justify-between px-6 py-[57px] sm:px-10 lg:px-[39px]"
        // lg:px-[39px] pt-[57px] = exact Figma left margin (39px) and top offset (57px) for the logo
        aria-label="Main navigation"
      >
        {/* Logo — exact Figma: 48x48 image + "FloraVision." text, Inter 900, 28px, white @75% opacity */}
        <a
          href="#home"
          className="flex items-center gap-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
        >
          <img src={images.brandLogo} alt="FloraVision logo" className="h-12 w-12" />
          <span className="font-sans font-black text-white/75 text-[20px] sm:text-[24px] lg:text-[28px] leading-none">
            FloraVision.
          </span>
        </a>

        {/* Desktop nav links — exact Figma: "Indie Flower" font, 400, 24px, white */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="flex items-center gap-1.5">
              <a
                href={link.href}
                className="font-script text-white text-[24px] leading-[35px] hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                {link.label}
              </a>
              {link.hasDropdown && (
                <svg width="12" height="7" viewBox="0 0 12 7" fill="white" aria-hidden="true">
                  <path d="M0 0L6 7L12 0H0Z" />
                </svg>
              )}
            </li>
          ))}
        </ul>

        {/* Right icons: search, bag, custom hamburger (2 unequal lines, exact Figma shape) */}
        <div className="hidden items-center gap-6 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="View cart"
            className="text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
              <path d="M9 8a3 3 0 0 1 6 0" strokeLinecap="round" />
            </svg>
          </button>

          {/* Custom hamburger icon: exact Figma uses two unequal-length lines (31px + 23px), white, 4px stroke */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex flex-col items-end gap-[9px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm p-1"
          >
            <span className="block h-1 w-[31px] rounded-full bg-white" />
            <span className="block h-1 w-[23px] rounded-full bg-white" />
          </button>
        </div>

        {/* Mobile hamburger (same icon, shown below lg) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="flex flex-col items-end gap-2 p-1 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
        >
          <span className="block h-1 w-7 rounded-full bg-white" />
          <span className="block h-1 w-5 rounded-full bg-white" />
        </button>
      </nav>

      {/* Mobile drawer — not present in Figma (desktop-only frame); built to satisfy
          the responsive requirement, styled to match the dark glass aesthetic */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`glass-card fixed right-0 top-0 z-50 h-full w-[80%] max-w-sm transform shadow-2xl transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-sans font-black text-white/75 text-[22px]">FloraVision.</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-1"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-2 py-3 font-script text-[22px] text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
