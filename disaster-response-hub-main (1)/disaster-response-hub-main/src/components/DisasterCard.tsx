import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface DisasterCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "emergency" | "warning" | "primary" | "safe";
  link: string;
}

const colorClasses = {
  emergency: "bg-emergency/10 text-emergency group-hover:bg-emergency group-hover:text-emergency-foreground",
  warning: "bg-warning/10 text-warning group-hover:bg-warning group-hover:text-warning-foreground",
  primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
  safe: "bg-safe/10 text-safe group-hover:bg-safe group-hover:text-safe-foreground",
};

export const DisasterCard = ({
  title,
  description,
  icon: Icon,
  color,
  link,
}: DisasterCardProps) => {
  return (
    <Link
      to={link}
      className="block bg-card rounded-xl border border-border p-6 card-shadow hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
    >
      <div className={`inline-flex p-4 rounded-xl ${colorClasses[color]} transition-colors mb-4`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center gap-2 text-primary font-medium text-sm">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
