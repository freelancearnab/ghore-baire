import Image from "next/image";

const SignatureDish = () => {
  return (
    <section id="signature-dish" className="relative py-24 md:py-32">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Title */}
        <h2 className="font-cormorant text-4xl font-light tracking-wide text-amber-400 italic md:text-5xl lg:text-6xl">
          Signature Biryani
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-amber-400/40" />

        {/* Dish Image */}
        <div className="relative mx-auto mt-12 h-[350px] w-full max-w-2xl overflow-hidden rounded-full md:h-[450px]">
          <Image
            src="/images/signature-biryani.png"
            alt="Ghare Baire signature biryani with saffron rice and tender meat"
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
          {/* Radial gradient vignette */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_20px_rgba(0,0,0,0.7)]" />
        </div>

        {/* Subtle description */}
        <p className="mx-auto mt-8 max-w-xl font-open-sans text-sm leading-relaxed text-white/50">
          Slow-cooked with hand-picked saffron, aromatic spices, and the finest
          cuts of tender meat — our signature biryani is a culinary
          masterpiece that has been perfected over generations.
        </p>
      </div>
    </section>
  );
};

export default SignatureDish;
