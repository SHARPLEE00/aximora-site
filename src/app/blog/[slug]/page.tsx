import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts, getPost } from "../../../lib/blog";
import { Reveal } from "../../../components/Reveal";
import VideoBackground from "../../../components/VideoBackground";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return <div className="pt-40 pb-32 text-center"><h1 className="text-xl font-light">Post not found.</h1></div>;
  }

  const paragraphs = post.content.split("\n").filter((line) => line.trim());

  return (
    <div className="grain">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <VideoBackground src="/videos/v18-warehouse.mp4" overlay={0.6} vignette />
        <div className="relative max-w-[800px] mx-auto px-6 md:px-10 w-full pb-16 pt-40">
          <Reveal>
            <Link href="/blog" className="inline-flex items-center gap-2 label hover:text-accent mb-8 transition-colors">
              <ArrowLeft className="w-3 h-3" /> All articles
            </Link>
            <p className="label mb-4">{post.date} &middot; {post.readTime} read</p>
            <h1 className="text-[var(--h2)] font-extralight tracking-tight leading-snug">
              {post.title}
            </h1>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Content */}
      <section className="py-[var(--space-xl)]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="divider-glow mb-12" />
          <Reveal>
            <p className="text-muted text-lg leading-relaxed mb-12">{post.description}</p>
            <article className="space-y-4">
              {paragraphs.map((p, i) => {
                if (p.startsWith("## ")) return <h2 key={i} className="text-[var(--h3)] font-light tracking-tight text-text mt-14 mb-4">{p.replace("## ", "")}</h2>;
                if (p.startsWith("### ")) return <h3 key={i} className="text-lg font-light tracking-tight text-text mt-10 mb-3">{p.replace("### ", "")}</h3>;
                if (p.startsWith("**") && p.endsWith("**")) return <p key={i} className="text-text font-medium text-sm">{p.replace(/\*\*/g, "")}</p>;
                if (p.startsWith("- ") || p.startsWith("* ")) return <li key={i} className="text-muted leading-relaxed ml-4 list-disc text-sm">{p.replace(/^[-*] /, "")}</li>;
                if (p.startsWith("|")) return <p key={i} className="text-muted text-xs font-mono">{p}</p>;
                return <p key={i} className="text-muted leading-[1.8] text-[var(--body)]">{p}</p>;
              })}
            </article>
          </Reveal>

          <div className="divider-glow mt-16 mb-12" />

          <Reveal>
            <div className="bg-surface border border-border p-10 text-center">
              <h3 className="text-[var(--h3)] font-light mb-4">Ready to source from Vietnam?</h3>
              <p className="text-muted mb-8 text-sm">Free consultation. Quotes within 48 hours.</p>
              <Link href="/contact" className="group inline-flex items-center gap-3 bg-text text-black px-8 py-3.5 text-[var(--label)] tracking-[0.2em] uppercase font-medium hover:bg-accent transition-all duration-500">
                Start a project <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
