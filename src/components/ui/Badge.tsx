interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block rounded px-3 py-1 text-xs font-mono text-[var(--accent)] border border-[var(--border)] bg-[var(--accent-muted)]">
      {label}
    </span>
  );
}
