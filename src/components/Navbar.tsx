import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-24 px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label="Mrethewn Design — Home">
          <img src={logo} alt="Mrethewn Design logo" width={80} height={80} className="h-16 w-16 object-contain [filter:drop-shadow(0_3px_10px_hsl(var(--foreground)/0.28))_contrast(1.15)_saturate(1.15)]" />
          <span className="text-xl tracking-[0.2em] uppercase font-medium text-foreground hidden sm:inline">
            Mrethewn <span className="text-accent font-semibold">Design</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-b border-border animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-8 py-4 text-[13px] tracking-[0.15em] uppercase border-b border-border/30 transition-colors ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
