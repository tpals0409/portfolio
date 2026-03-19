import { Github, Mail, Globe, ArrowUpRight } from "lucide-react";
import type { ContactLink as ContactLinkType } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  mail: <Mail size={20} />,
  globe: <Globe size={20} />,
};

interface ContactLinkProps {
  link: ContactLinkType;
}

export function ContactLinkCard({ link }: ContactLinkProps) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent-purple/50 hover:shadow-lg hover:shadow-accent-purple/5"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-muted transition-colors group-hover:text-accent-purple">
        {iconMap[link.icon]}
      </div>
      <span className="flex-1 font-medium text-foreground">{link.label}</span>
      <ArrowUpRight
        size={16}
        className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:text-accent-purple"
      />
    </a>
  );
}
