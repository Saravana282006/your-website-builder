import { MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground py-28">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-[13px] tracking-[0.3em] uppercase mb-4" style={{ color: 'hsl(0, 0%, 55%)' }}>Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-light" style={{ color: 'hsl(0, 0%, 98%)' }}>Contact Us</h1>
        </div>
      </section>

      <section className="py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <p className="text-[13px] tracking-[0.3em] uppercase text-accent mb-4">Details</p>
          <h2 className="text-3xl font-light text-foreground mb-10">Our Information</h2>
          <div className="space-y-8">
            {[
              { icon: MapPin, label: "Address", value: "8/148, Padavattamman Kovil Street,\nKovalam, ECR,\nChennai, Tamil Nadu, India\nPin 603112" },
              { icon: Phone, label: "Phone", value: "+91 8925768135" },
              { icon: Mail, label: "Email", value: "mrethewn.design@gmail.com" },
            ].map((item) => (
              <div key={item.label} className="flex gap-5">
                <item.icon size={20} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h4 className="text-[13px] tracking-[0.15em] uppercase text-foreground mb-1">{item.label}</h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
