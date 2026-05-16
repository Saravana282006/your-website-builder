import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container mx-auto px-6 lg:px-12 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Mrethewn Design logo" loading="lazy" width={48} height={48} className="h-12 w-12 object-contain" />
            <h3 className="text-xl tracking-[0.2em] uppercase font-medium text-foreground">
              Mrethewn <span className="text-accent font-semibold">Design</span>
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Your trusted sourcing partner for premium yarn, garments, home textiles and accessories — sourcing worldwide with a focus on design and sustainability.
          </p>
        </div>

        <div>
          <h4 className="text-[13px] tracking-[0.15em] uppercase text-foreground mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              { label: "About", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Infrastructure", path: "/infrastructure" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-foreground transition-colors duration-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[13px] tracking-[0.15em] uppercase text-foreground mb-6">Products</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {["Yarn", "Garments", "Home Textile", "Accessories"].map((c) => (
              <li key={c}>
                <Link to="/products" className="hover:text-foreground transition-colors duration-300">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-16 pt-8 text-center text-xs text-muted-foreground tracking-wider">
        © {new Date().getFullYear()} Mrethewn Design. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
