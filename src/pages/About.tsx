import { Globe, Award, Palette, Leaf, Handshake, Star } from "lucide-react";
import Layout from "@/components/Layout";
import sustainabilityImg from "@/assets/sustainability.jpg";

const strengths = [
  { icon: Globe, title: "Worldwide Sourcing", desc: "Finest raw materials sourced globally, ensuring consistent quality and competitive pricing." },
  { icon: Star, title: "Premium Quality", desc: "Rigorous quality control at every stage — from raw fibre to finished product." },
  { icon: Award, title: "Manufacturing Excellence", desc: "Decades of expertise, state-of-the-art infrastructure, and a skilled workforce." },
  { icon: Palette, title: "Design Focus", desc: "In-house design team creating trend-forward products for global markets." },
  { icon: Leaf, title: "Sustainability", desc: "Certified sustainable sourcing and eco-friendly manufacturing practices." },
  { icon: Handshake, title: "Trusted Partner", desc: "Reliable, scalable, and quality-driven B2B production partnership." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[500px] flex items-center">
      <img src={sustainabilityImg} alt="Cotton fields" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-xl animate-fade-up">
          <p className="text-[13px] tracking-[0.3em] uppercase mb-4" style={{ color: 'hsl(0, 0%, 70%)' }}>Our Story</p>
          <h1 className="text-4xl md:text-6xl font-light mb-4" style={{ color: 'hsl(0, 0%, 98%)' }}>About Us</h1>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-28">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <div className="divider mb-8" />
        <p className="text-muted-foreground leading-[1.9] text-base mb-6">
          We are a comprehensive textile company spanning the full value chain — from yarn sourcing to finished garments, home textiles and accessories.
        </p>
        <p className="text-muted-foreground leading-[1.9] text-base">
          With a strong foundation in quality and design, we serve clients worldwide as a reliable production partner. Our commitment to sustainability, innovative design, and manufacturing excellence sets us apart in the global textile landscape.
        </p>
      </div>
    </section>

    {/* Strengths */}
    <section className="section-gradient py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[13px] tracking-[0.3em] uppercase text-accent mb-4">Our Strengths</p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {strengths.map((s) => (
            <div key={s.title} className="bg-background p-10">
              <s.icon size={24} className="text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-lg text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
