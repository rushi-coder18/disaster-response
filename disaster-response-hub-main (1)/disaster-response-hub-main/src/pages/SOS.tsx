import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { EmergencyContactCard } from "@/components/EmergencyContactCard";
import { emergencyContacts, getAllCategories } from "@/data/emergencyContacts";
import { useState } from "react";
import {
  AlertTriangle,
  Phone,
  MapPin,
  Volume2,
  Flashlight,
} from "lucide-react";

const SOS = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();

  const filteredContacts = selectedCategory
    ? emergencyContacts.filter((c) => c.category === selectedCategory)
    : emergencyContacts;

  const handleEmergencyCall = () => {
    window.location.href = "tel:112";
  };

  return (
    <Layout>
      {/* Emergency Header */}
      <section className="bg-emergency text-emergency-foreground py-8 md:py-12">
        <div className="container mx-auto text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-black mb-4">SOS EMERGENCY</h1>
          <p className="text-lg text-emergency-foreground/90 max-w-xl mx-auto mb-6">
            If you are in immediate danger, call emergency services now
          </p>
          <Button
            onClick={handleEmergencyCall}
            variant="hero"
            size="xl"
            className="gap-3 text-xl px-12 pulse-emergency"
          >
            <Phone className="w-6 h-6" />
            Call 112 Now
          </Button>
        </div>
      </section>

      {/* SOS Instructions */}
      <section className="py-8 bg-warning/10 border-y border-warning/20">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">
            While Waiting for Help
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: MapPin, text: "Share your location", action: "Enable GPS" },
              { icon: Volume2, text: "Make noise", action: "Attract attention" },
              { icon: Flashlight, text: "Signal with light", action: "Use flashlight" },
              { icon: Phone, text: "Keep line open", action: "Stay on call" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-4 text-center card-shadow"
              >
                <item.icon className="w-8 h-8 mx-auto mb-2 text-warning" />
                <p className="font-semibold text-foreground text-sm mb-1">{item.text}</p>
                <p className="text-xs text-muted-foreground">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Services
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              All Emergency Contacts
            </h2>
            <p className="text-muted-foreground">
              Tap any number to call immediately
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredContacts.map((contact) => (
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
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Important Information When Calling
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl border border-border p-6 card-shadow">
                <h4 className="font-semibold text-foreground mb-3">Information to Provide</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-safe mt-0.5">✓</span>
                    Your exact location (address, landmarks)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-safe mt-0.5">✓</span>
                    Nature of emergency
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-safe mt-0.5">✓</span>
                    Number of people affected
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-safe mt-0.5">✓</span>
                    Any immediate dangers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-safe mt-0.5">✓</span>
                    Your contact number
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 card-shadow">
                <h4 className="font-semibold text-foreground mb-3">Stay Calm and Remember</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Speak clearly and slowly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Don't hang up until told to
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Follow operator instructions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Keep your phone accessible
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    Help is on the way
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SOS;
