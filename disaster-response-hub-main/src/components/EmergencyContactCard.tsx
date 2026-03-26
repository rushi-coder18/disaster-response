import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface EmergencyContactCardProps {
  name: string;
  number: string;
  description: string;
  icon: LucideIcon;
  region?: string;
}

export const EmergencyContactCard = ({
  name,
  number,
  description,
  icon: Icon,
  region = "All India",
}: EmergencyContactCardProps) => {
  const handleCall = () => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="bg-card rounded-xl border border-border p-5 card-shadow hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          <p className="text-xs text-muted-foreground/70 mt-1">{region}</p>
        </div>
      </div>
      <Button
        variant="contact"
        size="contact"
        onClick={handleCall}
        className="w-full mt-4 justify-between group-hover:border-primary group-hover:bg-primary/5"
      >
        <span className="font-bold text-xl text-primary">{number}</span>
        <div className="flex items-center gap-2 text-safe">
          <Phone className="w-5 h-5" />
          <span className="font-semibold">Call Now</span>
        </div>
      </Button>
    </div>
  );
};
