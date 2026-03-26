import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Phone,
  MapPin,
  Users,
  Truck,
  Plane,
  Anchor,
  Mountain,
  Heart,
  Building,
} from "lucide-react";

const rescueTeams = [
  {
    name: "National Disaster Response Force (NDRF)",
    shortName: "NDRF",
    icon: Shield,
    description: "India's specialized force for disaster response, equipped and trained for all types of natural and man-made disasters.",
    contact: "011-24363260",
    capabilities: ["Search & Rescue", "Medical First Response", "Chemical & Biological Emergency", "Building Collapse"],
    locations: ["Pan India - 16 Battalions"],
    status: "Always Ready",
  },
  {
    name: "State Disaster Response Force (SDRF)",
    shortName: "SDRF",
    icon: Users,
    description: "State-level disaster response teams providing immediate assistance during emergencies within their respective states.",
    contact: "State Emergency Numbers",
    capabilities: ["Flood Rescue", "Fire Fighting Support", "Evacuation", "First Aid"],
    locations: ["All States"],
    status: "Active",
  },
  {
    name: "Indian Army Disaster Relief",
    shortName: "Army",
    icon: Shield,
    description: "Armed forces deployment for major disaster relief operations including rescue, evacuation, and infrastructure repair.",
    contact: "Through District Administration",
    capabilities: ["Large Scale Evacuation", "Airlift Operations", "Bridge Building", "Supply Distribution"],
    locations: ["Deployed as needed"],
    status: "On Call",
  },
  {
    name: "Indian Air Force Rescue",
    shortName: "IAF",
    icon: Plane,
    description: "Aerial search and rescue operations, helicopter evacuation, and supply drops to inaccessible areas.",
    contact: "Through Emergency Services",
    capabilities: ["Aerial Rescue", "Medical Evacuation", "Supply Air Drops", "Disaster Assessment"],
    locations: ["Air Bases Nationwide"],
    status: "Standby",
  },
  {
    name: "Indian Coast Guard",
    shortName: "ICG",
    icon: Anchor,
    description: "Maritime search and rescue, coastal disaster response, and sea evacuation operations.",
    contact: "1554",
    capabilities: ["Sea Rescue", "Oil Spill Response", "Coastal Evacuation", "Maritime Emergencies"],
    locations: ["All Coastal States"],
    status: "24/7 Operations",
  },
  {
    name: "Fire & Emergency Services",
    shortName: "Fire Dept",
    icon: Truck,
    description: "Local fire departments handling fire emergencies, building rescues, and hazardous material incidents.",
    contact: "101",
    capabilities: ["Fire Fighting", "Building Rescue", "HAZMAT Response", "Accident Response"],
    locations: ["All Cities & Towns"],
    status: "24/7 Active",
  },
  {
    name: "Mountain Rescue Teams",
    shortName: "Mountain",
    icon: Mountain,
    description: "Specialized teams for high-altitude rescue operations in mountainous regions and hill stations.",
    contact: "Local Police Control Room",
    capabilities: ["High Altitude Rescue", "Avalanche Response", "Trekker Rescue", "Mountaineering Accidents"],
    locations: ["Himalayan States, Western Ghats"],
    status: "Seasonal Alert",
  },
  {
    name: "Civil Defence",
    shortName: "Civil Def",
    icon: Building,
    description: "Volunteers trained for disaster response, supporting official agencies during emergencies.",
    contact: "District Collector Office",
    capabilities: ["Evacuation Support", "Shelter Management", "First Aid", "Communication"],
    locations: ["All Districts"],
    status: "Volunteer Force",
  },
];

const RescueTeams = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Rescue Teams</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Dedicated teams working round the clock to save lives. Know who to reach when disaster strikes.
          </p>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {rescueTeams.map((team, index) => (
              <article
                key={index}
                className="bg-card rounded-2xl border border-border card-shadow overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <team.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="font-bold text-xl text-foreground">{team.name}</h2>
                        <span className="px-3 py-1 rounded-full bg-safe/10 text-safe text-xs font-semibold whitespace-nowrap">
                          {team.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-2 text-sm">{team.description}</p>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Capabilities</h3>
                    <div className="flex flex-wrap gap-2">
                      {team.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Location & Contact */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{team.locations[0]}</span>
                    </div>
                    <Button
                      variant="contact"
                      size="sm"
                      onClick={() => window.location.href = `tel:${team.contact.replace(/\D/g, '')}`}
                      className="gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      {team.contact}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-emergency" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Volunteer with rescue teams and disaster response organizations. Your contribution can save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="gap-2">
                <Users className="w-5 h-5" />
                Join Civil Defence
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Heart className="w-5 h-5" />
                Donate to Relief
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RescueTeams;
