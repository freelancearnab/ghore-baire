

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-white/5 bg-black pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-amber-400">
              Ghare Baire
            </h3>
            <p className="font-open-sans text-sm leading-relaxed text-white/50">
              Experience the pinnacle of Mughlai hospitality in every dish,
              curated with love and served with elegance.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/40 transition-colors duration-300 hover:text-amber-400"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/40 transition-colors duration-300 hover:text-amber-400"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/40 transition-colors duration-300 hover:text-amber-400"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-sm font-semibold tracking-[0.2em] text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Menu", "Reservations", "Events", "Gallery"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="font-open-sans text-sm text-white/40 transition-colors duration-300 hover:text-amber-400"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-playfair text-sm font-semibold tracking-[0.2em] text-white uppercase">
              Contact
            </h4>
            <ul className="space-y-2 font-open-sans text-sm text-white/40">
              <li>
                <span className="text-white/60">Address:</span> Basirhat,
                North 24 Parganas, West Bengal
              </li>
              <li>
                <span className="text-white/60">Phone:</span> +91 98765 43210
              </li>
              <li>
                <span className="text-white/60">Email:</span>{" "}
                info@gharebaire.com
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-playfair text-sm font-semibold tracking-[0.2em] text-white uppercase">
              Opening Hours
            </h4>
            <ul className="space-y-2 font-open-sans text-sm text-white/40">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-white/60">11 AM – 11 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white/60">11 AM – 12 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/60">10 AM – 11 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="font-open-sans text-xs text-white/30">
            © 2026 Ghare Baire Restaurant. All Rights Reserved.
          </p>
          <p className="font-open-sans text-xs text-white/30">
            Crafted with love in Basirhat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
