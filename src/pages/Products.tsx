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
    details: ["Men's Wear", "Women's Wear", "Boys & Girls", "Sportswear", "Workwear", "Essentials"],
  },
  {
    id: "home-textile",
    title: "Made-ups / Home Textile",
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
    desc: "Curated textile gift collections perfect for corporate gifting, festive occasions, and special events. Beautifully packaged and customisable.",
    details: ["Corporate Gifts", "Festive Collections", "Custom Packaging", "Combo Sets"],
  },
];

const Products = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Products</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Five product verticals spanning the complete textile value chain
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-30">
        <div className="container mx-auto px-4 lg:px-8 flex gap-2 overflow-x-auto">
          {products.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              onClick={() => setActive(p.id)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === p.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {p.title}
            </a>
          ))}
        </div>
      </section>

      {/* Product Sections */}
      <div className="py-12">
        {products.map((p, i) => (
          <section
            key={p.id}
            id={p.id}
            className={`py-16 ${i % 2 === 1 ? "section-gradient" : ""}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="lg:w-1/2">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">{p.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.details.map((d) => (
                      <span key={d} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
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
