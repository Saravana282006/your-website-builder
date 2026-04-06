import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
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

  return (
    <Layout>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            We'd love to hear from you. Send us an enquiry and our team will respond promptly.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Product Interest</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Select a category</option>
                    <option>Yarn</option>
                    <option>Garments</option>
                    <option>Home Textile</option>
                    <option>Accessories</option>
                    <option>Gift Articles</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 font-semibold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Sending..." : <>Send Enquiry <Send size={16} /></>}
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Address</h4>
                    <p className="text-muted-foreground text-sm">123 Textile Park, Industrial Area<br />Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 422 123 4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Email</h4>
                    <p className="text-muted-foreground text-sm">info@textileco.com</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="w-full h-64 rounded-lg bg-muted flex items-center justify-center border border-border">
                <p className="text-muted-foreground text-sm">Map embed will go here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
