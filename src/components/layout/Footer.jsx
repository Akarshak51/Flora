import { useState } from "react";
import { footerColumns, footerTagline, footerCopyright, socialLinks } from "../../data/footerLinks";
import { images } from "../../assets/images";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true); // no backend — UI-only confirmation, per assignment constraints
  };

  return (
    <footer id="contact" className="bg-ink px-6 py-16 sm:px-10 lg:px-[85px] lg:pb-24 lg:pt-0">
      <div className="mx-auto flex max-w-[1728px] flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
        {/* Brand column — exact Figma: 94x94 logo image + "FloraVision." Inter/900/45px white/75% */}
        <div className="flex max-w-[580px] flex-col gap-6">
          <a href="#home" className="flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md">
            <img src={images.brandLogo} alt="FloraVision logo" className="h-[94px] w-[94px]" />
            <span className="font-sans font-black text-white/75 text-[32px] lg:text-[45px] leading-[54.46px]">
              FloraVision.
            </span>
          </a>
          <p className="font-sans font-medium text-white text-[18px] leading-snug lg:text-[28px] lg:leading-[33.886px]">
            {footerTagline}
          </p>
          {/* Social links — exact Figma: plain text glyphs "FB" "TW" "LI", Inter/800/28px white */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="font-sans font-extrabold text-white text-[28px] leading-[33.886px] hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links column — exact Figma: "Quick Link's" Inter/800/28px heading,
            links Inter/500/24px, ~55px vertical spacing */}
        <div id="privacy" className="scroll-mt-24 flex flex-col gap-6">
          {footerColumns.map((col) => (
            <div key={col.id} className="flex flex-col gap-6">
              <h3 className="font-sans font-extrabold text-white text-[24px] lg:text-[28px] leading-[33.886px]">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-[26px]">
                {col.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="font-sans font-medium text-white text-[20px] lg:text-[24px] leading-[29.045px] hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter column — exact Figma: "For Every Update." heading, input 562x74 border-2 radius-8,
            inset white "SUBSCRIBE" button 165x65 radius-8 uppercase Inter/700/22px black text */}
        <div className="flex w-full max-w-[562px] flex-col gap-6">
          <h3 className="font-sans font-extrabold text-white text-[24px] lg:text-[28px] leading-[33.886px]">
            For Every Update.
          </h3>
          <form onSubmit={handleSubmit} noValidate className="relative w-full">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="h-[74px] w-full rounded-lg border-2 border-white bg-transparent px-6 font-sans font-medium text-white placeholder:text-white/75 text-[18px] lg:text-[24px] leading-[29.045px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 h-[65px] -translate-y-1/2 rounded-lg bg-white px-6 font-sans font-bold uppercase tracking-wide text-black text-[18px] lg:text-[22px] leading-[26.625px] hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              // exact Figma: button is inset inside the right edge of the input field
            >
              Subscribe
            </button>
          </form>
          <p
            role="status"
            aria-live="polite"
            className={`font-sans text-white/80 text-[16px] ${submitted ? "block" : "hidden"}`}
          >
            Thanks for subscribing!
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1728px] border-t border-white/10 pt-8 text-center lg:text-right">
        <p className="font-sans font-medium text-white text-[18px] lg:text-[24px] leading-[29.045px]">
          {footerCopyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
