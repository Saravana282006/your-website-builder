import { Link } from "react-router-dom";
import { ArrowRight, Globe, Leaf, Palette } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-main.jpg";
import yarnImg from "@/assets/yarn-category.jpg";
import garmentsImg from "@/assets/garments-category.jpg";
import homeTextileImg from "@/assets/home-textile-category.jpg";
import accessoriesImg from "@/assets/accessories-category.jpg";
import giftImg from "@/assets/gift-articles-category.jpg";

const categories = [
  { title: "Yarn", img: yarnImg, desc: "Premium cotton yarn in various counts and fibre types" },
  { title: "Garments", img: garmentsImg, desc: "Men's, women's & children's apparel and workwear" },
  { title: "Home Textile", img: homeTextileImg, desc: "Bed linen, table linen, curtains & cushions" },
  { title: "Accessories", img: accessoriesImg, desc: "Shawls, pashmina, scarves & wallets" },
  { title: "Gift Articles", img: giftImg, desc: "Curated textile gift collections" },
];

const highlights = [
  { icon: Globe, title: "Worldwide Sourcing", desc: "Global reach with reliable supply chain across continents" },
  { icon: Leaf, title: "Sustainability", desc: "Eco-friendly practices and certified sustainable production" },
  { icon: Palette, title: "Design Focus", desc: "Design-led product development for contemporary markets" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[85vh] min-h-[600px] flex items-center">
      <img src={heroImg} alt="Textile manufacturing facility" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-accent-foreground/80 text-sm uppercase tracking-[0.3em] mb-4 font-medium" style={{ color: 'hsl(35, 30%, 80%)' }}>
            Your Trusted Production Partner
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ color: 'hsl(40, 30%, 96%)' }}>
            Premium Textiles,<br />Crafted with Purpose
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: 'hsl(35, 20%, 80%)' }}>
            From yarn to finished products — delivering quality garments, home textiles, and accessories to clients worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 font-semibold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
            >
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-secondary/40 px-8 py-3 font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-secondary/10 transition-colors"
              style={{ color: 'hsl(40, 30%, 96%)' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="text-center p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5">
                <h.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Product Categories */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Our Product Range</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive textile solutions from raw yarn to finished products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.title}
              to="/products"
              className={`group relative overflow-hidden rounded-lg ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className={`${i === 0 ? "h-80" : "h-72"}`}>
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-xl font-bold mb-1" style={{ color: 'hsl(40, 30%, 96%)' }}>{cat.title}</h3>
                <p className="text-sm" style={{ color: 'hsl(35, 20%, 80%)' }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Partner With Us?</h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
          Let's discuss how we can fulfill your textile sourcing needs with quality and reliability.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 font-semibold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
