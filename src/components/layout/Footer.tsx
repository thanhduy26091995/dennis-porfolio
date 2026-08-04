import { profile } from "@/data/profile";

export default function Footer() {
  const github = profile.links.find((l) => l.label === "GitHub");

  return (
    <footer className="py-8 text-center">
      <p className="font-mono text-sm text-[var(--foreground-muted)]">
        Designed &amp; Built by{" "}
        {github ? (
          <a
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            {profile.name}
          </a>
        ) : (
          <span className="text-[var(--accent)]">{profile.name}</span>
        )}
      </p>
    </footer>
  );
}
