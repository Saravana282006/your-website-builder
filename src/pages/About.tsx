import { Globe, Award, Palette, Leaf, Handshake, Star } from "lucide-react";
import Layout from "@/components/Layout";
import sustainabilityImg from "@/assets/sustainability.jpg";

const strengths = [
  { icon: Globe, title: "Worldwide Sourcing", desc: "We source the finest raw materials from across the globe, ensuring consistent quality and competitive pricing for our clients." },
  { icon: Star, title: "Premium Quality", desc: "Rigorous quality control at every stage of production — from raw fibre selection to finished product inspection." },
  { icon: Award, title: "Our Strengths", desc: "Decades of manufacturing expertise, state-of-the-art infrastructure, and a skilled workforce delivering excellence." },
  { icon: Palette, title: "Design Focus", desc: "Our in-house design team creates trend-forward products that meet the evolving demands of global markets." },
  { icon: Leaf, title: "Sustainability", desc: "Committed to eco-friendly practices, certified sustainable sourcing, and reducing our environmental footprint." },
  { icon: Handshake, title: "Production Partner", desc: "We position ourselves as your trusted B2B production partner — reliable, scalable, and quality-driven." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <img src={sustainabilityImg} alt="Cotton fields" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-xl animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'hsl(40, 30%, 96%)' }}>About Us</h1>
          <p className="text-lg" style={{ color: 'hsl(35, 20%, 80%)' }}>
            Building lasting partnerships through quality textiles and sustainable practices since decades.
          </p>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We are a comprehensive textile company spanning the full value chain — from yarn manufacturing to finished garments, home textiles, accessories, and curated gift articles. With a strong foundation in quality and design, we serve clients worldwide as a reliable production partner.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our commitment to sustainability, innovative design, and manufacturing excellence sets us apart in the global textile landscape.
        </p>
      </div>
    </section>

    {/* Strengths Grid */}
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-14">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((s) => (
            <div key={s.title} className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                <s.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
