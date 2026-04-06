import { useState } from "react";
import Layout from "@/components/Layout";
import yarnImg from "@/assets/yarn-category.jpg";
import garmentsImg from "@/assets/garments-category.jpg";
import homeTextileImg from "@/assets/home-textile-category.jpg";
import accessoriesImg from "@/assets/accessories-category.jpg";
import giftImg from "@/assets/gift-articles-category.jpg";

const products = [
  {
    id: "yarn",
    title: "Yarn",
    img: yarnImg,
    desc: "We manufacture premium cotton yarn across a wide range of counts and fibre types. Our spinning facilities produce yarn on cones for weaving, knitting, and export markets.",
    details: ["Types of Cotton", "Multiple Fibre Types", "Wide Range of Counts", "Cone & Hank Packaging"],
  },
  {
    id: "garments",
    title: "Garments",
    img: garmentsImg,
    desc: "A complete range of garments for men, women, boys, and girls — including performance sportswear, workwear, and everyday essentials.",
    details: ["Men's Wear", "Women's Wear", "Boys & Girls", "Sportswear", "Workwear"],
  },
  {
    id: "home-textile",
    title: "Home Textile",
    img: homeTextileImg,
    desc: "Beautifully crafted home textile products designed for comfort and style. From bedroom to kitchen, our collection enhances every space.",
    details: ["Table Linen", "Kitchen Linen", "Bed Linen", "Cushions", "Curtains", "Bath Linen"],
  },
  {
    id: "accessories",
    title: "Accessories",
    img: accessoriesImg,
    desc: "Premium textile accessories crafted with attention to detail — from luxurious pashmina shawls to elegant scarves and leather wallets.",
    details: ["Shawl", "Pashmina", "Scarf", "Wallet"],
  },
  {
    id: "gift-articles",
    title: "Gift Articles",
    img: giftImg,
    desc: "Curated textile gift collections perfect for corporate gifting, festive occasions, and special events.",
    details: ["Corporate Gifts", "Festive Collections", "Custom Packaging", "Combo Sets"],
  },
];

const Products = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground py-28">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-[13px] tracking-[0.3em] uppercase mb-4" style={{ color: 'hsl(0, 0%, 55%)' }}>Our Range</p>
          <h1 className="text-4xl md:text-6xl font-light mb-4" style={{ color: 'hsl(0, 0%, 98%)' }}>Products</h1>
          <p className="font-light max-w-md mx-auto" style={{ color: 'hsl(0, 0%, 55%)' }}>
            Five verticals spanning the complete textile value chain
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
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="lg:w-1/2">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <p className="text-[13px] tracking-[0.3em] uppercase text-accent mb-4">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="text-3xl font-light text-foreground mb-5">{p.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.details.map((d) => (
                      <span key={d} className="border border-border text-muted-foreground px-4 py-2 text-[13px] tracking-wide">
                        {d}
                      </span>
                    ))}
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
