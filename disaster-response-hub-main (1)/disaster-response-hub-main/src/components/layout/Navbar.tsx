import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/disasters", label: "Types of Disasters" },
  { path: "/emergency-guide", label: "Emergency Guide" },
  { path: "/rescue-teams", label: "Rescue Teams" },
  { path: "/safe-zones", label: "Safe Zones" },
  { path: "/sos", label: "SOS" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground text-sm md:text-base leading-tight">
                Disaster Rescue
              </h1>
              <p className="text-[10px] md:text-xs text-muted-foreground">Response Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Link to="/sos" className="hidden sm:block">
              <Button variant="emergency" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Emergency
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/sos" onClick={() => setIsOpen(false)} className="mt-2">
                <Button variant="emergency" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Emergency SOS
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
