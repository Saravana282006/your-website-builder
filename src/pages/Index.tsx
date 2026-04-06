import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-main.jpg";
import yarnImg from "@/assets/yarn-category.jpg";
import garmentsImg from "@/assets/garments-category.jpg";
import homeTextileImg from "@/assets/home-textile-category.jpg";
import accessoriesImg from "@/assets/accessories-category.jpg";
import giftImg from "@/assets/gift-articles-category.jpg";

const categories = [
  { title: "Yarn", img: yarnImg, desc: "Premium cotton yarn in various counts" },
  { title: "Garments", img: garmentsImg, desc: "Men's, women's & children's apparel" },
  { title: "Home Textile", img: homeTextileImg, desc: "Bed linen, curtains & cushions" },
  { title: "Accessories", img: accessoriesImg, desc: "Shawls, pashmina & scarves" },
  { title: "Gift Articles", img: giftImg, desc: "Curated textile gift collections" },
];

const Index = () => (
  <Layout>
    {/* Hero — full viewport, minimal */}
    <section className="relative h-screen flex items-center">
      <img src={heroImg} alt="Textile manufacturing" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[13px] tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: 'hsl(0, 0%, 70%)' }}>
            Your Trusted Production Partner
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8" style={{ color: 'hsl(0, 0%, 98%)' }}>
            Premium Textiles,<br />Crafted with Purpose
          </h1>
          <p className="text-base leading-relaxed mb-10 max-w-md font-light" style={{ color: 'hsl(0, 0%, 75%)' }}>
            From yarn to finished products — delivering quality garments, home textiles, and accessories to clients worldwide.
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

export default Index;
