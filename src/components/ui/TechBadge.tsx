interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-card-border bg-card px-3 py-1 text-sm text-foreground transition-colors hover:border-accent-purple/50">
      {name}
    </span>
  );
}
