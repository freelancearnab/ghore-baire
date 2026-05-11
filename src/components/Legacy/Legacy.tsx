import Image from "next/image";

const Legacy = () => {
  return (
    <section id="legacy" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image Side */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src="/images/heritage-building.png"
                alt="Historic heritage architecture of Basirhat"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Decorative gold border accent */}
            <div className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-lg border border-amber-400/20" />
          </div>

          {/* Text Side */}
          <div className="w-full space-y-6 lg:w-1/2">
            <span className="font-playfair text-xs font-medium tracking-[0.3em] text-amber-400/70 uppercase">
              The Legacy
            </span>
            <h2 className="font-playfair text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Ghare Baire: Where History Meets the Plate
            </h2>
            <div className="h-px w-16 bg-amber-400/40" />
            <p className="font-open-sans text-sm leading-relaxed text-white/60">
              Inspired by the timeless artistry of Kolkata&apos;s culinary
              legends and the rich Mughlai tradition, Ghare Baire is more than a
              restaurant — it&apos;s a sanctuary for those who appreciate the
              finer things in life.
            </p>
            <p className="font-open-sans text-sm leading-relaxed text-white/60">
              Located in the heart of Basirhat, we take pride in presenting a
              world-class dining experience that honors generations of recipes
              passed down from Awadh&apos;s royal kitchens, reimagined with
              modern flair and uncompromising quality.
            </p>
            <a
              href="#about"
              id="legacy-read-story"
              className="group mt-4 inline-flex items-center gap-2 border-b border-amber-400/40 pb-1 font-playfair text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase transition-all duration-300 hover:border-amber-400"
            >
              Read Our Story
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
