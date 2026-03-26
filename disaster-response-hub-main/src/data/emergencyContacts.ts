import {
  Phone,
  Flame,
  Heart,
  Shield,
  Car,
  Users,
  Baby,
  Waves,
  Mountain,
  Zap,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  description: string;
  icon: LucideIcon;
  region: string;
  category: string;
}

export const emergencyContacts: EmergencyContact[] = [
  {
    id: "emergency-112",
    name: "National Emergency Number",
    number: "112",
    description: "Single emergency number for Police, Fire, and Ambulance",
    icon: Phone,
    region: "All India",
    category: "General Emergency",
  },
  {
    id: "police-100",
    name: "Police",
    number: "100",
    description: "Law enforcement and crime reporting",
    icon: Shield,
    region: "All India",
    category: "Law Enforcement",
  },
  {
    id: "fire-101",
    name: "Fire Brigade",
    number: "101",
    description: "Fire emergencies and rescue operations",
    icon: Flame,
    region: "All India",
    category: "Fire Services",
  },
  {
    id: "ambulance-102",
    name: "Ambulance",
    number: "102",
    description: "Medical emergencies and hospital transport",
    icon: Heart,
    region: "All India",
    category: "Medical",
  },
  {
    id: "disaster-108",
    name: "Disaster Management",
    number: "108",
    description: "Comprehensive emergency response for disasters",
    icon: Mountain,
    region: "All India",
    category: "Disaster",
  },
  {
    id: "women-1091",
    name: "Women Helpline",
    number: "1091",
    description: "Women in distress and domestic violence",
    icon: Users,
    region: "All India",
    category: "Women Safety",
  },
  {
    id: "child-1098",
    name: "Child Helpline",
    number: "1098",
    description: "Child abuse, missing children, and child protection",
    icon: Baby,
    region: "All India",
    category: "Child Protection",
  },
  {
    id: "road-1073",
    name: "Road Accident Emergency",
    number: "1073",
    description: "Highway accidents and road emergencies",
    icon: Car,
    region: "All India",
    category: "Road Safety",
  },
  {
    id: "flood-1078",
    name: "Flood Control",
    number: "1078",
    description: "Flood warnings and evacuation assistance",
    icon: Waves,
    region: "All India",
    category: "Flood",
  },
  {
    id: "electricity-1912",
    name: "Electricity Emergency",
    number: "1912",
    description: "Power outages and electrical hazards",
    icon: Zap,
    region: "All India",
    category: "Utilities",
  },
];

export const getContactsByCategory = (category: string) => {
  return emergencyContacts.filter((contact) => contact.category === category);
};

export const getAllCategories = () => {
  return [...new Set(emergencyContacts.map((contact) => contact.category))];
};
