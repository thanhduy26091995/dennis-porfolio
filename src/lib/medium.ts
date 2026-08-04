import { unstable_cache } from "next/cache";
import Parser from "rss-parser";

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail?: string;
}

// Media RSS attribute-only element parses to `{ $: { url, medium } }`, not a string.
interface MediaContent {
  $?: { url?: string };
}
type CustomItem = { "media:content"?: MediaContent };

const parser = new Parser<Record<string, never>, CustomItem>({
  timeout: 8000,
  customFields: {
    item: [["media:content", "media:content", { keepArray: false }]],
  },
});

const MEDIUM_USERNAME = "thanhduy_78508";
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

/** Allow only http(s) hrefs from the untrusted feed; drop javascript:/data: etc. */
function toSafeHref(url: string | undefined): string | undefined {
  if (!url) return undefined;
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:" ? u.toString() : undefined;
  } catch {
    return undefined;
  }
}

async function fetchMediumPosts(limit: number): Promise<MediumPost[]> {
  try {
    const feed = await parser.parseURL(FEED_URL);
    return feed.items
      .slice(0, limit)
      .map((item): MediumPost | null => {
        const link = toSafeHref(item.link);
        if (!link) return null; // skip entries without a safe, usable link
        return {
          title: item.title ?? "",
          link,
          pubDate: item.pubDate ?? "",
          contentSnippet: item.contentSnippet ?? "",
          thumbnail: toSafeHref(item["media:content"]?.$?.url),
        };
      })
      .filter((post): post is MediumPost => post !== null);
  } catch (error) {
    console.error("[medium] failed to fetch/parse feed", error);
    return [];
  }
}

// `rss-parser` uses raw https.get and bypasses Next's fetch Data Cache, so cache
// explicitly here. (A bare `export const revalidate` in a component has no effect.)
export const getMediumPosts = unstable_cache(
  (limit = 6) => fetchMediumPosts(limit),
  ["medium-posts"],
  { revalidate: 3600 },
);
