import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <p className="font-mono text-sm text-[var(--foreground-muted)]">
        Designed &amp; Built by{" "}
        <a
          href={profile.links.find((l) => l.label === "GitHub")?.url ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
        >
          {profile.name}
        </a>
      </p>
    </footer>
  );
}
