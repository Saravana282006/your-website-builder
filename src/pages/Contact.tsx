import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Enquiry Sent", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const inputClasses = "w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/50";

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
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form */}
            <div>
              <p className="text-[13px] tracking-[0.3em] uppercase text-accent mb-4">Enquiry</p>
              <h2 className="text-3xl font-light text-foreground mb-10">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input required type="text" className={inputClasses} placeholder="Full Name *" />
                  <input required type="email" className={inputClasses} placeholder="Email *" />
                </div>
                <input type="text" className={inputClasses} placeholder="Company" />
                <select className={`${inputClasses} appearance-none`}>
                  <option value="">Product Interest</option>
                  <option>Yarn</option>
                  <option>Garments</option>
                  <option>Home Textile</option>
                  <option>Accessories</option>
                  <option>Gift Articles</option>
                </select>
                <textarea
                  required
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="Your message *"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-3.5 text-[13px] uppercase tracking-[0.15em] hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Sending..." : <>Send Enquiry <ArrowRight size={14} /></>}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:pl-10">
              <p className="text-[13px] tracking-[0.3em] uppercase text-accent mb-4">Details</p>
              <h2 className="text-3xl font-light text-foreground mb-10">Our Information</h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, label: "Address", value: "123 Textile Park, Industrial Area\nCoimbatore, Tamil Nadu, India" },
                  { icon: Phone, label: "Phone", value: "+91 422 123 4567" },
                  { icon: Mail, label: "Email", value: "info@textileco.com" },
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
