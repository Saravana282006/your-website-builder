import { Factory, Gauge, Cog, Warehouse } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/infrastructure-hero.jpg";
import heroMainImg from "@/assets/hero-main.jpg";

const stats = [
  { icon: Factory, label: "Spindles", value: "50,000+", desc: "High-speed ring & open-end spindles" },
  { icon: Gauge, label: "Daily Output", value: "25 Tons", desc: "Daily yarn production capacity" },
  { icon: Cog, label: "Looms", value: "200+", desc: "Modern weaving & knitting machines" },
  { icon: Warehouse, label: "Facility", value: "2,00,000 sq ft", desc: "Total manufacturing space" },
];

const facilities = [
  { title: "Spinning Mill", img: heroMainImg, desc: "State-of-the-art spinning facility with automated ring frames and open-end spinning systems." },
  { title: "Weaving Unit", img: heroImg, desc: "Modern weaving floor equipped with high-speed looms for diverse fabric constructions." },
  { title: "Godown & Warehousing", img: heroMainImg, desc: "Climate-controlled warehousing ensuring product quality from production to dispatch." },
];

const Infrastructure = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <img src={heroImg} alt="Manufacturing infrastructure" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-xl animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'hsl(40, 30%, 96%)' }}>Infrastructure</h1>
          <p className="text-lg" style={{ color: 'hsl(35, 20%, 80%)' }}>
            World-class manufacturing facilities powering our commitment to quality
          </p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10 text-primary-foreground mb-3">
                <s.icon size={24} />
              </div>
              <div className="font-display text-3xl font-bold text-primary-foreground">{s.value}</div>
              <div className="text-sm font-semibold text-primary-foreground/80 mt-1">{s.label}</div>
              <div className="text-xs text-primary-foreground/60 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Facilities */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-14">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((f) => (
            <div key={f.title} className="group overflow-hidden rounded-lg border border-border">
              <div className="h-56 overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Infrastructure;
