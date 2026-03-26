import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Package,
  Phone,
  Users,
  Home,
  Car,
  Heart,
  Radio,
  Droplets,
  Utensils,
  Flashlight,
  FileText,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const emergencyKit = [
  { icon: Droplets, name: "Water", detail: "1 gallon per person per day for 3 days" },
  { icon: Utensils, name: "Food", detail: "3-day supply of non-perishable food" },
  { icon: Radio, name: "Radio", detail: "Battery-powered or hand-crank radio" },
  { icon: Flashlight, name: "Flashlight", detail: "With extra batteries" },
  { icon: Heart, name: "First Aid Kit", detail: "With essential medications" },
  { icon: FileText, name: "Documents", detail: "Copies of important documents" },
];

const evacuationSteps = [
  {
    step: 1,
    title: "Know Your Routes",
    description: "Identify at least two evacuation routes from your area. Check for road closures and traffic updates.",
  },
  {
    step: 2,
    title: "Prepare Your Vehicle",
    description: "Keep your car fueled and ready. Have emergency supplies in your vehicle.",
  },
  {
    step: 3,
    title: "Secure Your Home",
    description: "Turn off utilities, lock doors, and take photos for insurance purposes.",
  },
  {
    step: 4,
    title: "Take Emergency Kit",
    description: "Grab your pre-packed emergency bag with essentials and important documents.",
  },
  {
    step: 5,
    title: "Go to Safe Location",
    description: "Head to the designated evacuation center or a safe location outside the affected area.",
  },
];

const firstAidTips = [
  {
    condition: "Bleeding",
    steps: ["Apply direct pressure with clean cloth", "Elevate the wound", "Don't remove embedded objects", "Seek medical help for severe bleeding"],
  },
  {
    condition: "Burns",
    steps: ["Cool burn under running water for 10 mins", "Cover with sterile bandage", "Don't apply ice or butter", "Seek help for large or deep burns"],
  },
  {
    condition: "CPR Basics",
    steps: ["Check responsiveness", "Call emergency services (112)", "30 chest compressions", "2 rescue breaths", "Repeat until help arrives"],
  },
  {
    condition: "Choking",
    steps: ["Encourage coughing", "5 back blows between shoulder blades", "5 abdominal thrusts", "Repeat until object is expelled or help arrives"],
  },
];

const EmergencyGuide = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Emergency Guide</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Essential knowledge and step-by-step guides to keep you and your family safe during emergencies.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-emergency/5 border-y border-emergency/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-emergency">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">In Immediate Danger?</span>
            </div>
            <div className="flex gap-3">
              <Link to="/sos">
                <Button variant="emergency" size="lg" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Call Emergency (112)
                </Button>
              </Link>
              <Link to="/safe-zones">
                <Button variant="safe" size="lg" className="gap-2">
                  <Home className="w-4 h-4" />
                  Find Safe Zone
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Kit Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Emergency Survival Kit
                </h2>
                <p className="text-muted-foreground">Every home should have one ready</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyKit.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-5 card-shadow flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-safe/10 text-safe">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Pro Tip:</strong> Store your emergency kit in an easily accessible location and check it every 6 months to replace expired items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evacuation Steps */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-warning/10 text-warning">
                <Car className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Evacuation Procedure
                </h2>
                <p className="text-muted-foreground">Know these steps before disaster strikes</p>
              </div>
            </div>

            <div className="space-y-4">
              {evacuationSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-card rounded-xl border border-border p-6 card-shadow flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First Aid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-emergency/10 text-emergency">
                <Heart className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Basic First Aid
                </h2>
                <p className="text-muted-foreground">Life-saving knowledge everyone should know</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {firstAidTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 card-shadow"
                >
                  <h3 className="font-bold text-foreground text-lg mb-4 pb-3 border-b border-border">
                    {tip.condition}
                  </h3>
                  <ul className="space-y-3">
                    {tip.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-safe shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-warning/10 rounded-xl border border-warning/20">
              <p className="text-warning font-semibold mb-2">Important Disclaimer</p>
              <p className="text-sm text-muted-foreground">
                This is basic first aid information. For proper training, consider taking a certified first aid course. Always call emergency services for serious injuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Plan */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create a Family Emergency Plan
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Discuss with your family about meeting points, emergency contacts, and evacuation routes. Practice your plan regularly.
            </p>
            <Link to="/rescue-teams">
              <Button variant="hero" size="xl" className="gap-2">
                View Rescue Teams
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmergencyGuide;
