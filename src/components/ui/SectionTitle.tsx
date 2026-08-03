interface SectionTitleProps {
  number: string;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-[var(--accent)] text-sm">{number}.</span>
      <h2 className="text-2xl font-semibold text-[var(--foreground)] whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px bg-[var(--border)] flex-1" />
    </div>
  );
}
