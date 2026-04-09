import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "../../lib/blog";
import { Reveal, WordReveal } from "../../components/Reveal";
import VideoBackground from "../../components/VideoBackground";

export const metadata: Metadata = {
  title: "Blog",
  description: "Vietnam sourcing insights, manufacturing data, and supply chain guides for global buyers.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="grain">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <VideoBackground src="/videos/office-night.mp4" overlay={0.55} vignette />
        <div className="relative max-w-[1600px] mx-auto w-full px-6 md:px-10 pb-16 pt-40">
          <Reveal><p className="label mb-4">Blog</p></Reveal>
          <h1 className="text-[var(--h1)] font-extralight leading-[0.9] tracking-[-0.03em] mb-6">
            <WordReveal text="Sourcing" delay={0.2} />
            <br />
            <WordReveal text="insights." className="text-muted" delay={0.4} />
          </h1>
          <Reveal delay={0.6}>
            <p className="text-muted text-[var(--body)] max-w-lg leading-relaxed">
              Vietnam manufacturing data, supply chain strategies, and sourcing guides for global buyers.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Posts */}
      <section className="py-[var(--space-xl)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block border-t border-border py-10 md:py-14">
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-2">
                    <p className="label">{post.date}</p>
                    <p className="label mt-1">{post.readTime} read</p>
                  </div>
                  <div className="md:col-span-8">
                    <h2 className="text-[var(--h3)] font-light tracking-tight mb-3 group-hover:text-accent transition-colors duration-500">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">{post.description}</p>
                  </div>
                  <div className="md:col-span-2 flex md:justify-end items-start pt-1">
                    <ArrowRight className="w-4 h-4 text-faint group-hover:text-accent group-hover:translate-x-2 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>
    </div>
  );
}
