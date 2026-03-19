import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  color?: "purple" | "cyan";
}

export default function SectionLabel({ children, color = "purple" }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "mb-4 block text-sm font-medium uppercase tracking-widest",
        color === "cyan" ? "text-accent-cyan" : "text-accent-purple"
      )}
    >
      {children}
    </span>
  );
}
