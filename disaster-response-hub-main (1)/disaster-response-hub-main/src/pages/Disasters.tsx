import { Layout } from "@/components/layout/Layout";
import {
  Mountain,
  Waves,
  Wind,
  Flame,
  CloudLightning,
  Snowflake,
  Thermometer,
  Bug,
} from "lucide-react";

const disasters = [
  {
    id: "earthquake",
    title: "Earthquakes",
    icon: Mountain,
    color: "emergency",
    description: "Sudden shaking of the ground caused by movement of tectonic plates.",
    causes: [
      "Movement of tectonic plates",
      "Volcanic activity",
      "Human activities like mining or reservoir-induced seismicity",
    ],
    safety: [
      "Drop, Cover, and Hold On during shaking",
      "Stay away from windows and heavy furniture",
      "If outdoors, move to an open area away from buildings",
      "After shaking stops, evacuate if building is damaged",
      "Be prepared for aftershocks",
    ],
    preparation: [
      "Create an emergency kit with food, water, and first aid",
      "Secure heavy furniture and appliances",
      "Know your building's evacuation routes",
      "Practice earthquake drills regularly",
    ],
  },
  {
    id: "flood",
    title: "Floods",
    icon: Waves,
    color: "primary",
    description: "Overflow of water that submerges normally dry land.",
    causes: [
      "Heavy rainfall",
      "River overflow",
      "Dam or levee failure",
      "Coastal storms and tsunamis",
    ],
    safety: [
      "Move to higher ground immediately",
      "Never walk or drive through flood waters",
      "Stay away from power lines and electrical wires",
      "Listen to emergency broadcasts",
      "Avoid drinking flood water",
    ],
    preparation: [
      "Know your area's flood risk and evacuation routes",
      "Keep important documents in waterproof containers",
      "Have an emergency supply kit ready",
      "Consider flood insurance",
    ],
  },
  {
    id: "cyclone",
    title: "Cyclones & Hurricanes",
    icon: Wind,
    color: "warning",
    description: "Rotating storm systems with powerful winds and heavy rain.",
    causes: [
      "Warm ocean waters",
      "Atmospheric instability",
      "Low wind shear",
      "Sufficient Coriolis force",
    ],
    safety: [
      "Stay indoors in a sturdy building",
      "Move away from windows and glass doors",
      "If evacuating, leave early and follow designated routes",
      "Don't venture out during the eye of the storm",
      "Listen to official weather updates",
    ],
    preparation: [
      "Board up windows and secure outdoor items",
      "Stock up on food, water, and medications",
      "Know evacuation routes and shelter locations",
      "Have battery-powered radio and flashlights ready",
    ],
  },
  {
    id: "fire",
    title: "Wildfires",
    icon: Flame,
    color: "emergency",
    description: "Uncontrolled fires that spread quickly through vegetation.",
    causes: [
      "Lightning strikes",
      "Human negligence (campfires, cigarettes)",
      "Arson",
      "Power line sparks",
    ],
    safety: [
      "Evacuate immediately when ordered",
      "Close all windows and doors before leaving",
      "Cover nose and mouth with wet cloth",
      "Drive with headlights on and windows up",
      "Go to designated evacuation centers",
    ],
    preparation: [
      "Create defensible space around your home",
      "Have a 'go bag' ready with essentials",
      "Know multiple evacuation routes",
      "Keep roof and gutters clear of debris",
    ],
  },
  {
    id: "thunderstorm",
    title: "Thunderstorms",
    icon: CloudLightning,
    color: "warning",
    description: "Storms with lightning, heavy rain, and sometimes hail or tornadoes.",
    causes: [
      "Warm, moist air rising rapidly",
      "Cold fronts",
      "Atmospheric instability",
    ],
    safety: [
      "Seek shelter in a building or hard-topped vehicle",
      "Avoid open areas, tall trees, and metal objects",
      "Stay away from water bodies",
      "Unplug electrical appliances",
      "Wait 30 minutes after last thunder before going outside",
    ],
    preparation: [
      "Install surge protectors for electronics",
      "Trim trees near your home",
      "Have flashlights and batteries ready",
      "Know the difference between watch and warning",
    ],
  },
  {
    id: "cold-wave",
    title: "Cold Waves",
    icon: Snowflake,
    color: "primary",
    description: "Extended period of extremely cold weather.",
    causes: [
      "Arctic air masses moving south",
      "High-pressure systems",
      "Polar vortex disruption",
    ],
    safety: [
      "Stay indoors and keep warm",
      "Wear layers of loose-fitting clothing",
      "Avoid overexertion when shoveling snow",
      "Check on elderly and vulnerable neighbors",
      "Never use generators or grills indoors",
    ],
    preparation: [
      "Insulate pipes to prevent freezing",
      "Stock up on heating fuel",
      "Have extra blankets and warm clothing",
      "Keep emergency supplies in your car",
    ],
  },
  {
    id: "heat-wave",
    title: "Heat Waves",
    icon: Thermometer,
    color: "emergency",
    description: "Prolonged period of excessively hot weather.",
    causes: [
      "High-pressure weather systems",
      "Climate change",
      "Urban heat island effect",
    ],
    safety: [
      "Stay in air-conditioned spaces",
      "Drink plenty of water, avoid alcohol",
      "Wear light, loose-fitting clothing",
      "Never leave children or pets in vehicles",
      "Limit outdoor activities to cooler hours",
    ],
    preparation: [
      "Check air conditioning before summer",
      "Know locations of cooling centers",
      "Have fans and cooling supplies ready",
      "Learn signs of heat stroke",
    ],
  },
  {
    id: "epidemic",
    title: "Epidemics",
    icon: Bug,
    color: "warning",
    description: "Rapid spread of infectious disease affecting many people.",
    causes: [
      "Viral or bacterial pathogens",
      "Poor sanitation",
      "Lack of vaccination",
      "International travel",
    ],
    safety: [
      "Follow public health guidelines",
      "Practice good hygiene and hand washing",
      "Wear masks in crowded areas if recommended",
      "Stay home if you feel sick",
      "Get vaccinated when available",
    ],
    preparation: [
      "Keep a supply of masks and sanitizers",
      "Have essential medications stocked",
      "Know your local health department contacts",
      "Create a family communication plan",
    ],
  },
];

const colorClasses = {
  emergency: "bg-emergency/10 text-emergency border-emergency/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  primary: "bg-primary/10 text-primary border-primary/20",
};

const Disasters = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Types of Disasters</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Understanding different disaster types helps you prepare better and respond effectively when emergencies strike.
          </p>
        </div>
      </section>

      {/* Disasters List */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto">
          <div className="space-y-8 md:space-y-12">
            {disasters.map((disaster, index) => (
              <article
                key={disaster.id}
                id={disaster.id}
                className="bg-card rounded-2xl border border-border card-shadow overflow-hidden scroll-mt-24"
              >
                <div className={`p-6 md:p-8 border-b border-border ${colorClasses[disaster.color as keyof typeof colorClasses]}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-background/50">
                      <disaster.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {disaster.title}
                      </h2>
                      <p className="text-muted-foreground mt-1">{disaster.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6 md:gap-8">
                  {/* Causes */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-warning"></span>
                      Common Causes
                    </h3>
                    <ul className="space-y-2">
                      {disaster.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-muted-foreground/50 mt-1.5">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Safety Tips */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-safe"></span>
                      Safety During Disaster
                    </h3>
                    <ul className="space-y-2">
                      {disaster.safety.map((tip, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-safe mt-1">✓</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preparation */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      How to Prepare
                    </h3>
                    <ul className="space-y-2">
                      {disaster.preparation.map((prep, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          {prep}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disasters;
