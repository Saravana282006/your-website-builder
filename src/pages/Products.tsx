import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Layout from "@/components/Layout";
import yarnImg from "@/assets/yarn-category.jpg";
import garmentsImg from "@/assets/garments-category.jpg";
import garmentsKidsImg from "@/assets/garments-kids.jpg";
import garmentsLadiesImg from "@/assets/garments-ladies.jpg";
import garmentsMensImg from "@/assets/garments-mens.jpg";
import homeTextileImg from "@/assets/home-textile-category.jpg";
import accessoriesImg from "@/assets/accessories-category.jpg";
import productsHeroImg from "@/assets/products-hero.jpg";


type SubItem = { label: string; detail: string };
type Product = {
  id: string;
  title: string;
  tag?: string;
  img: string;
  gallery?: { src: string; label: string }[];
  desc: string;
  details: SubItem[];
};

const products: Product[] = [
  {
    id: "yarn",
    title: "Yarn",
    tag: "Sourcing Agent",
    img: yarnImg,
    desc: "As a trusted sourcing agent, we connect global buyers with the finest yarn producers. From raw cotton selection to count-specific sourcing, we manage quality, pricing, and timely delivery on your behalf.",
    details: [
      { label: "Types of Cotton", detail: "Pima, Giza, Supima, Egyptian, Indian Shankar-6, US Upland and organic certified cotton — sourced based on staple length, micronaire, and end-use." },
      { label: "Multiple Fibre Types", detail: "100% Cotton, Polyester, Viscose, Modal, Linen, Bamboo, and blended fibres including PC, CVC, and tri-blends to suit knitting and weaving needs." },
      { label: "Wide Range of Counts", detail: "Carded, combed and compact yarns from Ne 6s to Ne 120s — single and double, in ring-spun, open-end and vortex variants." },
      { label: "Cone & Pallet Packaging", detail: "Cone weights customised as per client requirements. Dye-tube packing, pallet packing, and export-grade carton packing available." },
    ],
  },
  {
    id: "garments",
    title: "Garments",
    img: garmentsImg,
    gallery: [
      { src: garmentsKidsImg, label: "Kids" },
      { src: garmentsLadiesImg, label: "Ladies" },
      { src: garmentsMensImg, label: "Men's" },
    ],
    desc: "A complete range of garments for men, women, boys, and girls — including performance sportswear, workwear, and everyday essentials.",
    details: [
      { label: "Men's Wear", detail: "T-shirts, polos, shirts, trousers, denim, jackets, innerwear and nightwear — woven and knitted constructions across casual, formal and loungewear segments." },
      { label: "Women's Wear", detail: "Tops, blouses, dresses, kurtas, leggings, loungewear and ethnic fusion wear — designed for global fashion markets." },
      { label: "Boys & Girls", detail: "Kidswear from infants to teens — playful prints, soft fabrics, safety-tested trims and OEKO-TEX compliant dyes." },
      { label: "Sportswear", detail: "Performance tees, joggers, track suits and yoga wear in moisture-wicking, anti-microbial and stretch fabrics." },
      { label: "Workwear", detail: "Industrial uniforms, coveralls, hi-vis jackets and chef wear in durable cotton, poly-cotton and FR fabrics." },
    ],
  },
  {
    id: "home-textile",
    title: "Home Textile",
    img: homeTextileImg,
    desc: "Beautifully crafted home textile products designed for comfort and style. From bedroom to kitchen, our collection enhances every space.",
    details: [
      { label: "Table Linen", detail: "Tablecloths, runners, napkins and placemats in jacquard, yarn-dyed and printed cotton/linen blends." },
      { label: "Kitchen Linen", detail: "Aprons, oven mitts, pot holders and tea towels — woven and terry constructions, fully customisable." },
      { label: "Bed Linen", detail: "Bed sheets, duvet covers, pillow cases and quilts in 200–600 thread count percale, sateen and printed cotton." },
      { label: "Cushions", detail: "Cushion covers and filled cushions in embroidered, printed, woven and knitted designs for sofa and outdoor use." },
      { label: "Curtains", detail: "Sheer, blackout, eyelet and tab-top curtains in linen, cotton and synthetic blends — custom sizing supported." },
      { label: "Bath Linen", detail: "Bath, hand and face towels, bath mats and robes in 400–700 GSM combed cotton and zero-twist constructions." },
    ],
  },
  {
    id: "accessories",
    title: "Accessories",
    img: accessoriesImg,
    desc: "Premium textile accessories crafted with attention to detail — from luxurious pashmina shawls to elegant scarves and leather wallets.",
    details: [
      { label: "Shawl", detail: "Woven and embroidered shawls in wool, cotton and silk blends — traditional and contemporary designs." },
      { label: "Pashmina", detail: "Authentic Kashmiri pashmina in 100% cashmere and silk-pashmina blends, hand-woven and hand-embroidered." },
      { label: "Scarf", detail: "Lightweight cotton, silk and modal scarves in printed, dyed and yarn-dyed constructions." },
      { label: "Wallet", detail: "Genuine leather and fabric wallets in classic and modern styles, with custom branding options." },
    ],
  },
];

const Products = () => {
  const [active, setActive] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem((cur) => (cur === key ? null : key));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center">
        <img src={productsHeroImg} alt="Premium textile products" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-6 lg:px-12 text-center">
          <p className="text-[13px] tracking-[0.3em] uppercase mb-4" style={{ color: 'hsl(0, 0%, 75%)' }}>Our Range</p>
          <h1 className="text-4xl md:text-6xl font-light mb-4" style={{ color: 'hsl(0, 0%, 98%)' }}>Products</h1>
          <p className="font-light max-w-md mx-auto" style={{ color: 'hsl(0, 0%, 80%)' }}>
            Four verticals spanning the complete textile sourcing value chain
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-5 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-30">
        <div className="container mx-auto px-6 lg:px-12 flex gap-1 overflow-x-auto">
          {products.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              onClick={() => setActive(p.id)}
              className={`whitespace-nowrap px-5 py-2 text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 ${
                active === p.id
                  ? "text-accent border-b-2 border-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.title}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      <div>
        {products.map((p, i) => (
          <section
            key={p.id}
            id={p.id}
            className={`py-24 ${i % 2 === 1 ? "section-gradient" : ""}`}
          >
            <div className="container mx-auto px-6 lg:px-12">
              {/* Large centered image / gallery */}
              <div className="max-w-5xl mx-auto mb-14">
                {p.gallery ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {p.gallery.map((g) => (
                      <figure key={g.label} className="group">
                        <div className="overflow-hidden">
                          <img
                            src={g.src}
                            alt={`${p.title} — ${g.label}`}
                            loading="lazy"
                            className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <figcaption className="text-center text-[12px] tracking-[0.2em] uppercase text-muted-foreground mt-3">
                          {g.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ) : (
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-[32rem] object-cover"
                  />
                )}
              </div>

              <div className="max-w-3xl mx-auto text-center">
                <p className="text-[13px] tracking-[0.3em] uppercase text-accent mb-4">{String(i + 1).padStart(2, '0')}</p>
                <div className="flex items-baseline gap-4 mb-5 flex-wrap justify-center">
                  <h2 className="text-3xl font-light text-foreground">{p.title}</h2>
                  {p.tag && (
                    <span className="text-[11px] tracking-[0.2em] uppercase text-accent border border-accent/40 px-3 py-1">
                      {p.tag}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">{p.desc}</p>

                  {/* Sub-clauses — click to expand */}
                  <div className="border-t border-border">
                    {p.details.map((d) => {
                      const key = `${p.id}-${d.label}`;
                      const isOpen = openItem === key;
                      return (
                        <div key={d.label} className="border-b border-border">
                          <button
                            onClick={() => toggle(key)}
                            className="w-full flex items-center justify-between py-4 text-left group"
                            aria-expanded={isOpen}
                          >
                            <span className={`text-[13px] tracking-[0.1em] uppercase transition-colors ${isOpen ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                              {d.label}
                            </span>
                            <span className={`transition-colors ${isOpen ? "text-accent" : "text-muted-foreground"}`}>
                              {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                            </span>
                          </button>
                          <div
                            className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-muted-foreground text-sm leading-relaxed pr-8">
                                {d.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
