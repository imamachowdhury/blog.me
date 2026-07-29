export type Category = { id: number; name: string; slug: string; count: number };

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: Category;
  image?: string;
  imageAlt?: string;
  author: string;
  readingMinutes: number;
};

const demoCategories: Category[] = [
  { id: 1, name: "নগর ও স্মৃতি", slug: "city-memory", count: 12 },
  { id: 2, name: "নকশা", slug: "design", count: 8 },
  { id: 3, name: "ভ্রমণ", slug: "travel", count: 7 },
  { id: 4, name: "পাঠ", slug: "reading", count: 15 },
  { id: 5, name: "প্রযুক্তি", slug: "technology", count: 9 },
];

const demoPosts: Post[] = [
  {
    id: 1, slug: "puran-dhaka-rain", title: "বৃষ্টির দিনে পুরান ঢাকার বারান্দা",
    excerpt: "বৃষ্টি নামলে শহরের শব্দ বদলে যায়। সদরঘাটের হর্ন দূরে সরে যায়, টিনের চালে একটানা তাল পড়ে—আর পুরোনো বারান্দাগুলো যেন নিজেদের গল্প বলা শুরু করে।",
    content: "<p>বৃষ্টি নামলে শহরের শব্দ বদলে যায়। সদরঘাটের হর্ন দূরে সরে যায়, টিনের চালে একটানা তাল পড়ে। পুরোনো বারান্দাগুলো তখন নিজেদের গল্প বলা শুরু করে।</p><h2>বারান্দার মানচিত্র</h2><p>প্রতিটি বাড়ির গায়ে সময়ের আলাদা চিহ্ন। কোথাও কাঠের রেলিং, কোথাও লোহার নকশা, কোথাও আবার নতুন রঙের নিচে পুরোনো নীলের আভাস। এই শহরকে বুঝতে হলে তার বারান্দাগুলোর দিকে তাকাতে হয়।</p><blockquote>শহরের স্মৃতি বড় রাস্তায় নয়, ছোট জানালা আর বারান্দায় জমে থাকে।</blockquote><p>বৃষ্টি থামার পর গলিতে আলো নামে। ভেজা দেয়ালের গন্ধ আর চায়ের দোকানের ধোঁয়া মিলে পরিচিত শহরটিকেও নতুন মনে হয়।</p>",
    date: "2026-07-28T10:00:00", category: demoCategories[0], author: "আরিফ", readingMinutes: 6,
  },
  {
    id: 2, slug: "bangla-typography", title: "বাংলা টাইপোগ্রাফির ছোট্ট ইতিহাস",
    excerpt: "অক্ষরের শরীর বদলালে পড়ার অভিজ্ঞতাও বদলে যায়। ছাপাখানা থেকে পর্দা—বাংলা হরফের দীর্ঘ যাত্রার কয়েকটি নোট।",
    content: "<p>বাংলা অক্ষরের ইতিহাস একই সঙ্গে প্রযুক্তি ও নকশার ইতিহাস। ধাতব হরফের সীমা পেরিয়ে আজ আমরা অসংখ্য ডিজিটাল টাইপফেস ব্যবহার করি।</p><h2>পর্দার জন্য বাংলা</h2><p>ছোট পর্দায় স্পষ্টতা, যুক্তাক্ষরের ভারসাম্য এবং যথেষ্ট লাইন-হাইট বাংলা পাঠের আরাম নির্ধারণ করে।</p>",
    date: "2026-07-16T10:00:00", category: demoCategories[1], author: "আরিফ", readingMinutes: 8,
  },
  {
    id: 3, slug: "padma-char-afternoon", title: "পদ্মার চরে একটি বিকেল",
    excerpt: "নদী সরে গেলে যে অস্থায়ী ভূগোল জেগে ওঠে, সেখানে একটি বিকেলের আলোও অন্যরকম লাগে।",
    content: "<p>চরের পথ কোনো মানচিত্রে স্থায়ী নয়। আজ যে বালুর ঢিবি আছে, পরের বর্ষায় সেখানে নদী ফিরে আসতে পারে।</p>",
    date: "2026-07-02T10:00:00", category: demoCategories[2], author: "আরিফ", readingMinutes: 5,
  },
  {
    id: 4, slug: "notes-beside-books", title: "বইয়ের পাশে যে নোটগুলো থেকে যায়",
    excerpt: "পড়া শেষ হয়, কিন্তু পাতার ধারে লেখা ছোট বাক্যগুলো আমাদের আগের সংস্করণকে ধরে রাখে।",
    content: "<p>পুরোনো বই খুললে লেখা থেকে আগে চোখে পড়ে নিজের হাতের লেখা। সেই নোটগুলো পাঠকের ছোট আত্মজীবনী।</p>",
    date: "2026-06-21T10:00:00", category: demoCategories[3], author: "আরিফ", readingMinutes: 4,
  },
  {
    id: 5, slug: "personal-internet", title: "ইন্টারনেটকে আবার ব্যক্তিগত করে তোলা",
    excerpt: "নিজের একটি ছোট ওয়েবসাইট অ্যালগরিদমের বাইরে চিন্তা এবং স্মৃতি রাখার স্বাধীন জায়গা।",
    content: "<p>ব্যক্তিগত ওয়েবসাইট মানে শুধু একটি ঠিকানা নয়। এটি নিজের নিয়মে লেখা, সাজানো এবং সংরক্ষণ করার জায়গা।</p>",
    date: "2026-06-08T10:00:00", category: demoCategories[4], author: "আরিফ", readingMinutes: 7,
  },
];

const apiUrl = import.meta.env.WORDPRESS_API_URL?.replace(/\/$/, "");
const clean = (value = "") => value.replace(/<[^>]+>/g, "").replace(/&hellip;/g, "…").replace(/&#8217;/g, "’").trim();

function mapPost(item: any): Post {
  const embedded = item._embedded || {};
  const term = embedded["wp:term"]?.flat()?.find((entry: any) => entry.taxonomy === "category");
  const media = embedded["wp:featuredmedia"]?.[0];
  const author = embedded.author?.[0];
  const text = clean(item.content?.rendered);
  return {
    id: item.id,
    slug: item.slug,
    title: clean(item.title?.rendered),
    excerpt: clean(item.excerpt?.rendered),
    content: item.content?.rendered || "",
    date: item.date,
    category: term ? { id: term.id, name: term.name, slug: term.slug, count: term.count || 0 } : { id: 0, name: "লেখা", slug: "writing", count: 0 },
    image: media?.source_url,
    imageAlt: media?.alt_text,
    author: author?.name || "লেখক",
    readingMinutes: Math.max(1, Math.ceil(text.split(/\s+/).length / 180)),
  };
}

export async function getPosts(): Promise<Post[]> {
  if (!apiUrl) return demoPosts;
  try {
    const response = await fetch(`${apiUrl}/posts?per_page=100&_embed=1`);
    if (!response.ok) throw new Error(`WordPress returned ${response.status}`);
    return (await response.json()).map(mapPost);
  } catch (error) {
    console.warn("WordPress is unavailable; building with demo content.", error);
    return demoPosts;
  }
}

export async function getCategories(): Promise<Category[]> {
  if (!apiUrl) return demoCategories;
  try {
    const response = await fetch(`${apiUrl}/categories?per_page=100&hide_empty=true`);
    if (!response.ok) throw new Error(`WordPress returned ${response.status}`);
    return await response.json();
  } catch {
    return demoCategories;
  }
}
