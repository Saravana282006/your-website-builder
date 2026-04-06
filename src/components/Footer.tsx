import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            TEXTILE<span className="text-accent">CO</span>
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Your trusted production partner for premium yarn, garments, home textiles, accessories & gift articles — sourcing worldwide with a focus on design and sustainability.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { label: "About Us", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Infrastructure", path: "/infrastructure" },
              { label: "Contact Us", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Product Categories</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Yarn", "Garments", "Home Textile", "Accessories", "Gift Articles"].map((c) => (
              <li key={c}>
                <Link to="/products" className="hover:text-primary-foreground transition-colors">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} TextileCo. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
