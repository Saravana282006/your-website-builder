import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import spinningImg from "@/assets/spinning-unit.jpg";
import loomsImg from "@/assets/looms-unit.jpg";
import stitchingImg from "@/assets/stitching-unit.jpg";
import packingImg from "@/assets/packing-unit.jpg";
import yarnImg from "@/assets/yarn-category.jpg";
import garmentsImg from "@/assets/garments-category.jpg";
import homeTextileImg from "@/assets/home-textile-category.jpg";
import accessoriesImg from "@/assets/accessories-category.jpg";

const categories = [
  { title: "Yarn", img: yarnImg, desc: "Premium cotton yarn in various counts" },
  { title: "Garments", img: garmentsImg, desc: "Men's, women's & children's apparel" },
  { title: "Home Textile", img: homeTextileImg, desc: "Bed linen, curtains & cushions" },
  { title: "Accessories", img: accessoriesImg, desc: "Shawls, pashmina & scarves" },
];

const heroSlides = [
  {
    img: spinningImg,
    eyebrow: "Spinning Unit",
    title: "Premium Yarn,\nSpun with Precision",
    desc: "High-speed ring & open-end spinning facilities producing cotton yarn across a wide range of counts.",
  },
  {
    img: loomsImg,
    eyebrow: "Weaving Looms",
    title: "Fabrics Woven\nfor Every Need",
    desc: "Modern looms producing diverse fabric constructions for garments, home textiles, and exports.",
  },
  {
    img: stitchingImg,
    eyebrow: "Automatic Stitching",
    title: "Garments, Stitched\nto Perfection",
    desc: "Automatic stitching units delivering precision, scale, and consistent quality on every order.",
  },
  {
    img: packingImg,
    eyebrow: "Packing & Dispatch",
    title: "Ready for the\nWorld Market",
    desc: "Organised packing and quality-checked dispatch ensuring your shipment arrives perfect, on time.",
  },
];

const Index = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setSlide((s) => (s + dir + heroSlides.length) % heroSlides.length);

  return (
  <Layout>
    {/* Hero — sliding carousel of manufacturing units */}
    <section className="relative h-screen overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.img}
            alt={s.eyebrow}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      <div className="relative container mx-auto px-6 lg:px-12 h-full flex items-center">
        <div key={slide} className="max-w-2xl animate-fade-up">
          <p className="text-[13px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: 'hsl(0, 0%, 70%)' }}>
            {heroSlides[slide].eyebrow}
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 whitespace-pre-line" style={{ color: 'hsl(0, 0%, 98%)' }}>
            {heroSlides[slide].title}
          </h1>
          <p className="text-base leading-relaxed mb-10 max-w-md font-light" style={{ color: 'hsl(0, 0%, 75%)' }}>
            {heroSlides[slide].desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-3.5 text-[13px] uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
            >
              Explore Products <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/30 px-8 py-3.5 text-[13px] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors"
              style={{ color: 'hsl(0, 0%, 98%)' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 p-3 border border-white/30 hover:bg-white/10 transition-colors text-white"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 p-3 border border-white/30 hover:bg-white/10 transition-colors text-white"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 transition-all duration-500 ${i === slide ? "w-10 bg-accent" : "w-6 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>

    {/* Value Prop — clean text section */}
    <section className="py-28">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <p className="text-[13px] tracking-[0.3em] uppercase text-accent mb-6">Why Us</p>
        <h2 className="text-3xl md:text-4xl font-light text-foreground leading-snug mb-6">
          Global sourcing. Sustainable practices.<br />Design-led production.
        </h2>
        <div className="divider mb-6" />
        <p className="text-muted-foreground leading-relaxed">
          We span the complete textile value chain — from spinning premium yarn to delivering finished garments and home textiles. Our commitment to quality, sustainability, and design sets us apart.
        </p>
      </div>
    </section>

    {/* Product Categories — grid */}
    <section className="pb-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[13px] tracking-[0.3em] uppercase text-accent mb-4">Products</p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">Our Product Range</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.title}
              to="/products"
              className={`group relative overflow-hidden ${i === 0 ? "sm:col-span-2 lg:col-span-2 h-96" : "h-80"}`}
            >
              <img
                src={cat.img}
                alt={cat.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-light mb-1" style={{ color: 'hsl(0, 0%, 98%)' }}>{cat.title}</h3>
                <p className="text-sm font-light" style={{ color: 'hsl(0, 0%, 70%)' }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-foreground py-24">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-background mb-4">Ready to Partner With Us?</h2>
        <p className="text-background/50 max-w-md mx-auto mb-10 font-light">
          Let's discuss how we can fulfill your textile sourcing needs with quality and reliability.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 text-[13px] uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
        >
          Contact Us <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  </Layout>
  );
};

export default Index;
