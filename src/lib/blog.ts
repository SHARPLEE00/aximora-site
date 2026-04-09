import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(".md", ""),
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      readTime: data.readTime || "5 min",
      content,
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    readTime: data.readTime || "5 min",
    content,
  };
}
