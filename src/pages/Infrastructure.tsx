import Layout from "@/components/Layout";
import heroImg from "@/assets/infrastructure-hero.jpg";
import heroMainImg from "@/assets/hero-main.jpg";

const stats = [
  { label: "Spindles", value: "50,000+", desc: "High-speed ring & open-end" },
  { label: "Daily Output", value: "25 Tons", desc: "Daily yarn production" },
  { label: "Looms", value: "200+", desc: "Modern weaving machines" },
  { label: "Facility", value: "2,00,000 sq ft", desc: "Manufacturing space" },
];

const facilities = [
  { title: "Spinning Mill", img: heroMainImg, desc: "State-of-the-art spinning facility with automated ring frames and open-end spinning systems." },
  { title: "Weaving Unit", img: heroImg, desc: "Modern weaving floor equipped with high-speed looms for diverse fabric constructions." },
  { title: "Godown & Warehousing", img: heroMainImg, desc: "Climate-controlled warehousing ensuring product quality from production to dispatch." },
];

const Infrastructure = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[500px] flex items-center">
      <img src={heroImg} alt="Manufacturing infrastructure" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-xl animate-fade-up">
          <p className="text-[13px] tracking-[0.3em] uppercase mb-4" style={{ color: 'hsl(0, 0%, 70%)' }}>Capabilities</p>
          <h1 className="text-4xl md:text-6xl font-light" style={{ color: 'hsl(0, 0%, 98%)' }}>Infrastructure</h1>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-light mb-2" style={{ color: 'hsl(0, 0%, 98%)' }}>{s.value}</div>
              <div className="text-[13px] tracking-[0.15em] uppercase mb-1" style={{ color: 'hsl(28, 60%, 55%)' }}>{s.label}</div>
              <div className="text-xs" style={{ color: 'hsl(0, 0%, 55%)' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Facilities */}
    <section className="py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[13px] tracking-[0.3em] uppercase text-accent mb-4">Facilities</p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">Our Manufacturing Units</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((f) => (
            <div key={f.title} className="group">
              <div className="overflow-hidden mb-6">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Infrastructure;
