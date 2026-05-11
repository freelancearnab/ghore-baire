import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-biryani.png"
          alt="Ghare Baire signature dish"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Decorative smoke/steam animation */}
      <div className="absolute top-20 left-1/2 z-[1] h-64 w-64 -translate-x-1/2 animate-pulse rounded-full bg-white/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-playfair text-4xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Ghare Baire – Royal{" "}
          <span className="text-amber-400">Dining Experience</span> in Basirhat
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-open-sans text-lg font-light tracking-wide text-white/70 md:text-xl">
          Experience the heritage of Mughal culinary excellence
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            id="hero-view-menu"
            className="group relative overflow-hidden rounded-sm bg-amber-500 px-8 py-3.5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-300 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25"
          >
            <span className="relative z-10">View Menu</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#reservations"
            id="hero-book-table"
            className="rounded-sm border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-semibold tracking-widest text-white uppercase backdrop-blur-sm transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10 hover:text-amber-400"
          >
            Book a Table
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute right-0 bottom-0 left-0 z-[5] h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
};

export default Hero;
