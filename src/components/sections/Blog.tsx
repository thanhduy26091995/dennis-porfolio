import { getMediumPosts } from "@/lib/medium";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function Blog() {
  const posts = await getMediumPosts(6);

  return (
    <Section id="blog">
      <SectionTitle number="05" title="Blog" />
      {posts.length === 0 ?
        <div className="text-center py-16">
          <p className="text-[var(--foreground-muted)] font-mono text-sm">
            No posts yet — check back soon.
          </p>
          <a
            href="https://medium.com/@thanhduy_78508"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-mono text-sm text-[var(--accent)] hover:underline"
          >
            View on Medium ↗
          </a>
        </div>
      : <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 rounded border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200"
              >
                <p className="font-mono text-xs text-[var(--accent)] mb-2">
                  {formatDate(post.pubDate)}
                </p>
                <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] line-clamp-3 flex-1">
                  {post.contentSnippet}
                </p>
                <span className="mt-4 font-mono text-xs text-[var(--accent)]">
                  Read more ↗
                </span>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://medium.com/@thanhduy_78508"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[var(--accent)] border border-[var(--accent)] px-6 py-3 rounded hover:bg-[var(--accent-muted)] transition-colors"
            >
              View all on Medium ↗
            </a>
          </div>
        </>
      }
    </Section>
  );
}
