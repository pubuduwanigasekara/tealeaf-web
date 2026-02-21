import { StaticImageData } from "next/image";

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  highlightLine: string;
  description: string | React.ReactNode;
  details: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  profilePicLink: string;
  content: React.ReactNode;
}
