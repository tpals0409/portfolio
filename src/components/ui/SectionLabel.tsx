interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-accent-purple">
      {children}
    </span>
  );
}
