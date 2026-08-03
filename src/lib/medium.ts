import Parser from "rss-parser";

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail?: string;
}

const parser = new Parser({
  customFields: {
    item: [["media:content", "media:content", { keepArray: false }]],
  },
});

const MEDIUM_USERNAME = "thanhduy_78508";
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

export async function fetchMediumPosts(limit = 6): Promise<MediumPost[]> {
  try {
    const feed = await parser.parseURL(FEED_URL);
    return feed.items.slice(0, limit).map((item) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      pubDate: item.pubDate ?? "",
      contentSnippet: item.contentSnippet ?? "",
      thumbnail: (item as unknown as Record<string, unknown>)["media:content"]
        ? String((item as unknown as Record<string, unknown>)["media:content"])
        : undefined,
    }));
  } catch {
    return [];
  }
}
