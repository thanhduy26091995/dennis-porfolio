interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 px-6 max-w-5xl mx-auto w-full ${className}`}
    >
      {children}
    </section>
  );
}
