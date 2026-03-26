import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { EmergencyContactCard } from "@/components/EmergencyContactCard";
import { DisasterCard } from "@/components/DisasterCard";
import { emergencyContacts } from "@/data/emergencyContacts";
import { Link } from "react-router-dom";
import {
  Shield,
  Phone,
  Map,
  BookOpen,
  Users,
  AlertTriangle,
  CloudLightning,
  Flame,
  Waves,
  Mountain,
  Wind,
  ArrowRight,
} from "lucide-react";

const disasterTypes = [
  {
    title: "Earthquakes",
    description: "Learn how to protect yourself during seismic events and aftermath procedures.",
    icon: Mountain,
    color: "emergency" as const,
    link: "/disasters#earthquake",
  },
  {
    title: "Floods",
    description: "Understand flood warnings, evacuation routes, and water safety.",
    icon: Waves,
    color: "primary" as const,
    link: "/disasters#flood",
  },
  {
    title: "Cyclones & Storms",
    description: "Prepare for tropical storms, cyclones, and severe weather conditions.",
    icon: Wind,
    color: "warning" as const,
    link: "/disasters#cyclone",
  },
  {
    title: "Fires",
    description: "Fire safety protocols, evacuation procedures, and prevention tips.",
    icon: Flame,
    color: "emergency" as const,
    link: "/disasters#fire",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-3xl mx-auto text-center slide-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">24/7 Emergency Response</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Disaster Rescue &<br />
              <span className="text-accent">Response Center</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your lifeline during emergencies. Access critical disaster information, emergency contacts, rescue team locations, and safety guidelines — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sos">
                <Button variant="emergency" size="xl" className="w-full sm:w-auto gap-2">
                  <Phone className="w-5 h-5" />
                  Emergency SOS
                </Button>
              </Link>
              <Link to="/emergency-guide">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                  <BookOpen className="w-5 h-5" />
                  Emergency Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100L60 91.7C120 83.3 240 66.7 360 58.3C480 50 600 50 720 54.2C840 58.3 960 66.7 1080 70.8C1200 75 1320 75 1380 75L1440 75V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-12 md:py-16 -mt-8 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: AlertTriangle, label: "Report Emergency", link: "/sos", color: "bg-emergency text-emergency-foreground" },
              { icon: Map, label: "Safe Zones", link: "/safe-zones", color: "bg-safe text-safe-foreground" },
              { icon: Users, label: "Rescue Teams", link: "/rescue-teams", color: "bg-primary text-primary-foreground" },
              { icon: BookOpen, label: "Emergency Guide", link: "/emergency-guide", color: "bg-warning text-warning-foreground" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`${item.color} rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <item.icon className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3" />
                <span className="font-semibold text-sm md:text-base">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Emergency Contacts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One-tap calling to essential emergency services. Save these numbers — they could save lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {emergencyContacts.slice(0, 6).map((contact) => (
              <EmergencyContactCard
                key={contact.id}
                name={contact.name}
                number={contact.number}
                description={contact.description}
                icon={contact.icon}
                region={contact.region}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/sos">
              <Button variant="outline" size="lg" className="gap-2">
                View All Emergency Contacts
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Types of Disasters Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Disasters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be prepared for any emergency. Learn about different disaster types and how to respond effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {disasterTypes.map((disaster, index) => (
              <DisasterCard
                key={index}
                title={disaster.title}
                description={disaster.description}
                icon={disaster.icon}
                color={disaster.color}
                link={disaster.link}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/disasters">
              <Button variant="default" size="lg" className="gap-2">
                Explore All Disasters
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <CloudLightning className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Prepared, Stay Safe
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Register with your mobile number to receive real-time disaster alerts, evacuation notices, and safety updates for your area.
            </p>
            <Link to="/login">
              <Button variant="hero" size="xl" className="gap-2">
                <Phone className="w-5 h-5" />
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
