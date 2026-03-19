interface SectionLabelProps {
  label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <span className="text-sm font-medium text-accent-purple uppercase tracking-wider mb-4 block">
      {label}
    </span>
  );
}
