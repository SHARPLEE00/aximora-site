import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";
import TextReveal from "../../components/TextReveal";
import VideoBackground from "../../components/VideoBackground";
import CountUp from "../../components/CountUp";

export const metadata: Metadata = {
  title: "Industries",
  description: "Furniture, agricultural products, textiles — Vietnam's strongest export categories.",
};

export default function IndustriesPage() {
  return (
    <div className="grain">
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <VideoBackground src="/videos/v13-port.mp4" overlay={0.5} />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-20 pt-40">
          <AnimatedSection><p className="text-[11px] tracking-[0.3em] uppercase text-white-40 mb-4">Industries</p></AnimatedSection>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight mb-6">
            <TextReveal text="Where Vietnam" delay={0.2} /><br />
            <TextReveal text="dominates." className="text-white-40" delay={0.4} />
          </h1>
          <AnimatedSection delay={0.6}><p className="text-white-40 text-lg max-w-xl leading-relaxed font-light">We source where Vietnam holds commanding market positions. Data-backed, not guesswork.</p></AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          {/* Furniture — product showcase video */}
          <AnimatedSection>
            <div className="relative min-h-[500px] overflow-hidden mb-4 group">
              <VideoBackground src="/videos/v14-product.mp4" overlay={0.45} />
              <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-between min-h-[500px]">
                <div>
                  <span className="text-accent text-[11px] tracking-[0.3em] uppercase">01</span>
                  <div className="text-[clamp(3rem,8vw,6rem)] font-extralight text-accent/40 mt-4"><CountUp end={68} prefix="$" suffix="B" /></div>
                  <p className="text-white-40 text-sm">Annual exports to US</p>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Furniture & Home Decor</h2>
                  <p className="text-white-60 max-w-2xl leading-relaxed mb-6">Wooden bedroom furniture (55% US market share), kitchen cabinets (40%), outdoor sets. Factory clusters in Binh Duong and Dong Nai — 30 min from our office. Vietnam surpassed China as #1.</p>
                  <div className="flex flex-wrap gap-3">
                    {["FSC", "PEFC", "CARB EPA P2", "ISO 9001", "BSCI"].map((c) => (
                      <span key={c} className="text-[11px] tracking-[0.15em] uppercase text-white-40 border border-white-10 px-3 py-1">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Cashew + Coffee */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <AnimatedSection delay={0.1}>
              <div className="relative min-h-[400px] overflow-hidden group">
                <VideoBackground src="/videos/cashew.mp4" overlay={0.5} />
                <div className="relative z-10 p-10 h-full flex flex-col justify-between min-h-[400px]">
                  <div><span className="text-accent text-[11px] tracking-[0.3em] uppercase">02</span><div className="text-5xl font-extralight text-accent/40 mt-4">89%</div><p className="text-white-40 text-xs mt-1">US cashew market share</p></div>
                  <div>
                    <h3 className="text-2xl font-light tracking-tight mb-3">Cashews & Pepper</h3>
                    <p className="text-white-60 text-sm leading-relaxed mb-4">Cashew nuts, black pepper (79% US share), dried fruits. Near-monopoly positions.</p>
                    <div className="flex flex-wrap gap-2">{["FDA", "HACCP", "ISO 22000"].map((c) => (<span key={c} className="text-[10px] tracking-[0.15em] uppercase text-white-40 border border-white-10 px-2 py-0.5">{c}</span>))}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative min-h-[400px] overflow-hidden group">
                <VideoBackground src="/videos/v17-coffee.mp4" overlay={0.5} />
                <div className="relative z-10 p-10 h-full flex flex-col justify-between min-h-[400px]">
                  <div><span className="text-accent text-[11px] tracking-[0.3em] uppercase">03</span><div className="text-5xl font-extralight text-accent/40 mt-4">#2</div><p className="text-white-40 text-xs mt-1">World&apos;s 2nd largest exporter</p></div>
                  <div>
                    <h3 className="text-2xl font-light tracking-tight mb-3">Coffee</h3>
                    <p className="text-white-60 text-sm leading-relaxed">Robusta, Arabica, specialty grades. Direct from Central Highlands processing hubs.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Textiles + Custom */}
          <div className="grid md:grid-cols-2 gap-4">
            <AnimatedSection delay={0.3}>
              <div className="bg-dark border border-white-10 p-10 min-h-[300px] flex flex-col justify-between group hover:border-accent/30 transition-all duration-700">
                <div><span className="text-accent text-[11px] tracking-[0.3em] uppercase">04</span><div className="text-4xl font-extralight text-accent/40 mt-4">$8.5B</div><p className="text-white-40 text-xs mt-1">H1 2025 exports to US</p></div>
                <div>
                  <h3 className="text-2xl font-light tracking-tight mb-3 group-hover:text-accent transition-colors duration-500">Textiles & Apparel</h3>
                  <p className="text-white-40 text-sm leading-relaxed">Sportswear, workwear, bags, footwear. 2,200+ factories. Nike produces 50% of global shoes here.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="bg-dark border border-white-10 p-10 min-h-[300px] flex flex-col justify-between group hover:border-accent/30 transition-all duration-700">
                <div><span className="text-accent text-[11px] tracking-[0.3em] uppercase">05</span><div className="text-4xl font-extralight text-accent/40 mt-4">5000+</div><p className="text-white-40 text-xs mt-1">Manufacturing facilities</p></div>
                <div>
                  <h3 className="text-2xl font-light tracking-tight mb-3 group-hover:text-accent transition-colors duration-500">Custom Sourcing</h3>
                  <p className="text-white-40 text-sm leading-relaxed mb-4">Plastics, metal, electronics, handicrafts. If it&apos;s made in Vietnam, we can find it.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white-20 group-hover:text-accent text-[12px] tracking-[0.15em] uppercase transition-all">Tell us what you need <ArrowRight className="w-3 h-3" /></Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
