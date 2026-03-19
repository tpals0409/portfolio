interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <section id={id} className="py-20 md:py-32 px-6 max-w-5xl mx-auto">
      {children}
    </section>
  );
}
