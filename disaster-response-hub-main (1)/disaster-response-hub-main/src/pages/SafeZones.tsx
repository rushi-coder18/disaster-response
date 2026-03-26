import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Search,
  Navigation,
  Home,
  Building,
  GraduationCap,
  Trees,
  Phone,
  Users,
  CheckCircle,
} from "lucide-react";

const safeZones = [
  {
    id: 1,
    name: "City Community Center",
    type: "Community Shelter",
    icon: Building,
    address: "123 Main Street, Central District",
    capacity: 500,
    distance: "1.2 km",
    amenities: ["Food", "Water", "Medical Aid", "Beds"],
    contact: "1800-XXX-XXXX",
    status: "Open",
  },
  {
    id: 2,
    name: "Government School Complex",
    type: "Educational Facility",
    icon: GraduationCap,
    address: "456 Education Lane, North Zone",
    capacity: 800,
    distance: "2.5 km",
    amenities: ["Water", "Sanitation", "Open Ground"],
    contact: "1800-XXX-XXXX",
    status: "Open",
  },
  {
    id: 3,
    name: "Central Park Evacuation Point",
    type: "Open Ground",
    icon: Trees,
    address: "Central Park, Downtown Area",
    capacity: 2000,
    distance: "3.0 km",
    amenities: ["Open Space", "Assembly Point"],
    contact: "Police Control Room",
    status: "Open",
  },
  {
    id: 4,
    name: "District Hospital",
    type: "Medical Facility",
    icon: Building,
    address: "789 Hospital Road, Medical District",
    capacity: 300,
    distance: "4.2 km",
    amenities: ["Medical Care", "Emergency Services", "Food", "Water"],
    contact: "102",
    status: "Priority Cases",
  },
  {
    id: 5,
    name: "Sports Stadium",
    type: "Large Venue",
    icon: Building,
    address: "Stadium Complex, Sports City",
    capacity: 5000,
    distance: "5.8 km",
    amenities: ["Large Capacity", "Sanitation", "Food Distribution"],
    contact: "1800-XXX-XXXX",
    status: "Standby",
  },
];

const SafeZones = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredZones = safeZones.filter(
    (zone) =>
      zone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zone.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-safe text-safe-foreground py-16 md:py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Safe Zone Map</h1>
          <p className="text-lg text-safe-foreground/80 max-w-2xl mx-auto">
            Find the nearest evacuation centers and safe zones in your area during emergencies.
          </p>
        </div>
      </section>

      {/* Map Placeholder + List */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by location or zone name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map UI Mock */}
            <div className="bg-card rounded-2xl border border-border card-shadow overflow-hidden">
              <div className="bg-muted/50 h-[400px] md:h-[500px] flex items-center justify-center relative">
                {/* Decorative Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-safe/20 to-primary/20"></div>
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    {/* Grid lines */}
                    {[...Array(10)].map((_, i) => (
                      <line
                        key={`h-${i}`}
                        x1="0"
                        y1={i * 40}
                        x2="400"
                        y2={i * 40}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-border"
                      />
                    ))}
                    {[...Array(10)].map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={i * 40}
                        y1="0"
                        x2={i * 40}
                        y2="400"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-border"
                      />
                    ))}
                    {/* Roads */}
                    <path d="M200 0 L200 400" stroke="currentColor" strokeWidth="8" className="text-muted" />
                    <path d="M0 200 L400 200" stroke="currentColor" strokeWidth="8" className="text-muted" />
                    <path d="M100 100 L300 300" stroke="currentColor" strokeWidth="4" className="text-muted" />
                  </svg>
                </div>

                {/* Map Pins */}
                <div className="absolute inset-0">
                  {safeZones.slice(0, 5).map((zone, i) => {
                    const positions = [
                      { top: "30%", left: "40%" },
                      { top: "45%", left: "60%" },
                      { top: "60%", left: "35%" },
                      { top: "25%", left: "70%" },
                      { top: "70%", left: "55%" },
                    ];
                    return (
                      <div
                        key={zone.id}
                        className="absolute transform -translate-x-1/2 -translate-y-full group cursor-pointer"
                        style={positions[i]}
                      >
                        <div className="relative">
                          <div className="p-2 bg-safe rounded-full shadow-lg group-hover:scale-110 transition-transform">
                            <MapPin className="w-5 h-5 text-safe-foreground" />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-safe rotate-45"></div>
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-card rounded-lg shadow-lg p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          <p className="text-xs font-semibold text-foreground">{zone.name}</p>
                          <p className="text-xs text-muted-foreground">{zone.distance}</p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Current Location */}
                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ top: "50%", left: "45%" }}
                  >
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-primary-foreground shadow-lg animate-pulse"></div>
                  </div>
                </div>

                {/* Map Controls Mock */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <Button size="icon" variant="secondary" className="w-10 h-10">
                    <span className="text-lg font-bold">+</span>
                  </Button>
                  <Button size="icon" variant="secondary" className="w-10 h-10">
                    <span className="text-lg font-bold">−</span>
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs text-foreground">Your Location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-safe"></div>
                    <span className="text-xs text-foreground">Safe Zone</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-border">
                <Button variant="default" className="w-full gap-2">
                  <Navigation className="w-4 h-4" />
                  Use My Location
                </Button>
              </div>
            </div>

            {/* Safe Zones List */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Nearby Safe Zones ({filteredZones.length})
              </h2>
              
              {filteredZones.map((zone) => (
                <div
                  key={zone.id}
                  className="bg-card rounded-xl border border-border p-5 card-shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-safe/10 text-safe">
                      <zone.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-foreground truncate">{zone.name}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            zone.status === "Open"
                              ? "bg-safe/10 text-safe"
                              : zone.status === "Standby"
                              ? "bg-warning/10 text-warning"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {zone.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{zone.address}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Navigation className="w-3 h-3" />
                          {zone.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          Capacity: {zone.capacity}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {zone.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-xs font-medium"
                          >
                            <CheckCircle className="w-3 h-3 text-safe" />
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="default" size="sm" className="flex-1 gap-2">
                          <Navigation className="w-4 h-4" />
                          Directions
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.location.href = `tel:${zone.contact.replace(/\D/g, '')}`}
                          className="gap-2"
                        >
                          <Phone className="w-4 h-4" />
                          Call
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SafeZones;
