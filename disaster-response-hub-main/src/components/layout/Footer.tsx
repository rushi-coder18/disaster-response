import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary-foreground/10">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Disaster Rescue</h3>
                <p className="text-xs text-primary-foreground/70">Response Center</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Providing critical disaster response information, emergency contacts, and rescue coordination to save lives when every second counts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: "/disasters", label: "Types of Disasters" },
                { path: "/emergency-guide", label: "Emergency Guide" },
                { path: "/rescue-teams", label: "Rescue Teams" },
                { path: "/safe-zones", label: "Safe Zones" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Numbers */}
          <div>
            <h4 className="font-semibold mb-4">Emergency Numbers</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-emergency" />
                <span>Emergency: 112</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-emergency" />
                <span>Fire: 101</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-emergency" />
                <span>Ambulance: 102</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-emergency" />
                <span>Police: 100</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  National Disaster Response HQ, Emergency Services Building
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">help@disasterrescue.org</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+1 (800) RESCUE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Disaster Rescue & Response Center. Saving lives, one emergency at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};
