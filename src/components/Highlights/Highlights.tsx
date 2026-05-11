import Image from "next/image";

type HighlightCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const HighlightCard = ({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}: HighlightCardProps) => {
  return (
    <div
      className={`group flex flex-col items-center gap-6 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden rounded-lg md:h-56 md:w-1/2">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Text */}
      <div className="w-full space-y-3 md:w-1/2">
        <h3 className="font-playfair text-xl font-bold text-amber-400 md:text-2xl">
          {title}
        </h3>
        <p className="font-open-sans text-sm leading-relaxed text-white/60">
          {description}
        </p>
      </div>
    </div>
  );
};

const highlights = [
  {
    title: "Private Dining",
    description:
      "Host your most cherished celebrations in our exclusive private dining rooms, designed for intimacy and grandeur.",
    image: "/images/private-dining.png",
    imageAlt: "Private dining room with elegant chandelier",
  },
  {
    title: "Family Friendly",
    description:
      "A warm atmosphere designed for every generation — spacious seating, attentive service, and flavors everyone loves.",
    image: "/images/family-dining.png",
    imageAlt: "Family enjoying a meal together",
  },
  {
    title: "All-You-Can-Eat",
    description:
      "Indulge in an endless feast of Mughlai masterpieces — from aromatic biryanis to succulent kebabs and beyond.",
    image: "/images/buffet-spread.png",
    imageAlt: "Elaborate buffet spread with multiple dishes",
  },
  {
    title: "Happy Hour Specials",
    description:
      "The finest drinks and irresistible bar bites to transform your evening into an unforgettable celebration.",
    image: "/images/happy-hour.png",
    imageAlt: "Cocktails and drinks at the bar",
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="relative py-24 md:py-32">
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="font-playfair text-sm font-medium tracking-[0.3em] text-amber-400/70 uppercase">
          What we offer
        </h2>
        <p className="mt-3 font-playfair text-3xl font-bold tracking-wider text-white uppercase md:text-4xl">
          Our Highlights
        </p>
        <div className="mx-auto mt-4 h-px w-16 bg-amber-400/40" />
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16">
        {highlights.map((item, index) => (
          <HighlightCard
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            imageAlt={item.imageAlt}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
