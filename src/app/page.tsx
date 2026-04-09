import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, WordReveal, LineReveal } from "../components/Reveal";
import CountUp from "../components/CountUp";
import RotatingText from "../components/RotatingText";
import ScrollProgress from "../components/ScrollProgress";
import VideoBackground from "../components/VideoBackground";
import HeroReveal, { HeroWordReveal } from "../components/HeroReveal";

export default function Home() {
  return (
    <div className="grain">
      <ScrollProgress />

      {/* ──────────── ACT I: OPENING ──────────── */}

      {/* Hero — cinematic, asymmetric */}
      <section className="relative min-h-[100svh] flex flex-col justify-center md:justify-end overflow-hidden">
        <VideoBackground src="/videos/01.mp4" overlay={0.4} vignette />

        <div className="relative max-w-[1600px] mx-auto w-full px-6 md:px-10 pb-8 md:pb-24 pt-20 md:pt-40">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 md:items-end">
            <div className="md:col-span-8">
              <HeroReveal>
                <p className="label mb-3 md:mb-6">Vietnam Sourcing Partner</p>
              </HeroReveal>
              <h1 className="text-[var(--display)] font-extralight leading-[0.92] tracking-[-0.03em]">
                <HeroWordReveal text="We source" delay={0.3} />
                <br />
                <RotatingText />
                <br />
                <HeroWordReveal text="from Vietnam." className="text-muted" delay={0.6} />
              </h1>
            </div>
            <div className="md:col-span-4 md:text-right mt-4 md:mt-0">
              <HeroReveal delay={1.0}>
                <p className="text-muted text-[var(--body)] leading-relaxed max-w-sm md:ml-auto mb-6 md:mb-8 hidden md:block">
                  On-ground team in HCMC. Factory sourcing,
                  quality control, logistics — handled.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-[var(--label)] tracking-[0.2em] uppercase text-text border-b border-faint pb-2 hover:border-accent hover:text-accent transition-all duration-500"
                >
                  Start a project
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Tension strip — numbers */}
      <section className="py-20 md:py-28 border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { end: 6.8, suffix: "B", prefix: "$", label: "Furniture exports to US" },
              { end: 55, suffix: "%", prefix: "", label: "US bedroom furniture" },
              { end: 89, suffix: "%", prefix: "", label: "US cashew imports" },
              { end: 48, suffix: "h", prefix: "", label: "Quote turnaround" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`py-4 ${i > 0 ? "md:border-l border-border md:pl-10" : ""}`}>
                  <div className="text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.02em]">
                    <CountUp end={item.end === 6.8 ? 68 : item.end} suffix={item.suffix} prefix={item.prefix} />
                  </div>
                  <p className="label mt-2">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── ACT II: WHAT WE DO ──────────── */}

      {/* Services — asymmetric bento */}
      <section className="py-[var(--space-3xl)]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="label mb-4">Services</p>
            <h2 className="text-[var(--h1)] font-extralight tracking-[-0.03em] leading-[0.9] mb-[var(--space-xl)]">
              <WordReveal text="We handle" />
              <br />
              <WordReveal text="everything." className="text-muted" delay={0.15} />
            </h2>
          </Reveal>

          {/* Bento: 1 large + 1 tall right */}
          <div className="grid md:grid-cols-12 gap-3 mb-3">
            <Reveal className="md:col-span-7">
              <div className="relative h-[50vh] md:h-[55vh] min-h-[300px] overflow-hidden group">
                <VideoBackground src="/videos/v09-factory-visit.mp4" overlay={0.45} />
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="label text-accent">01</span>
                    <ArrowUpRight className="w-4 h-4 text-faint group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-[var(--h2)] font-extralight tracking-tight mb-2">Factory Sourcing</h3>
                    <p className="text-muted text-sm max-w-sm">Visit, verify, and match Vietnamese factories to your specs. Quotes in 48h.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="md:col-span-5 flex flex-col gap-3">
              <Reveal delay={0.1}>
                <div className="relative h-[27vh] min-h-[190px] overflow-hidden group">
                  <VideoBackground src="/videos/v11-qc-detail.mp4" overlay={0.5} />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="label text-accent">02</span>
                      <ArrowUpRight className="w-4 h-4 text-faint group-hover:text-accent transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-[var(--h3)] font-light tracking-tight">Quality Control</h3>
                      <p className="text-muted text-xs mt-1">AQL inspections. Every shipment checked before loading.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="relative h-[27vh] min-h-[190px] overflow-hidden group">
                  <VideoBackground src="/videos/v10-container.mp4" overlay={0.5} />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="label text-accent">03</span>
                      <ArrowUpRight className="w-4 h-4 text-faint group-hover:text-accent transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-[var(--h3)] font-light tracking-tight">Logistics</h3>
                      <p className="text-muted text-xs mt-1">Container loading to customs clearance. FOB, CIF, DDP.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom row: 2 equal */}
          <div className="grid md:grid-cols-2 gap-3">
            <Reveal delay={0.3}>
              <div className="relative h-[35vh] min-h-[250px] overflow-hidden group">
                <VideoBackground src="/videos/v18-warehouse.mp4" overlay={0.5} />
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                  <span className="label text-accent">04</span>
                  <div>
                    <h3 className="text-[var(--h3)] font-light tracking-tight">Production Monitoring</h3>
                    <p className="text-muted text-xs mt-1">Weekly reports with photos. Stay informed without flying here.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="relative h-[35vh] min-h-[250px] overflow-hidden group">
                <VideoBackground src="/videos/v12-videocall.mp4" overlay={0.5} />
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                  <span className="label text-accent">05</span>
                  <div>
                    <h3 className="text-[var(--h3)] font-light tracking-tight">Remote Collaboration</h3>
                    <p className="text-muted text-xs mt-1">Video calls with physical samples. No black box.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────── ACT III: WHAT WE SOURCE ──────────── */}

      <section className="py-[var(--space-3xl)] border-t border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="label mb-4">Industries</p>
            <h2 className="text-[var(--h1)] font-extralight tracking-[-0.03em] leading-[0.9] mb-[var(--space-xl)]">
              <WordReveal text="Where Vietnam" />
              <br />
              <WordReveal text="dominates." className="text-muted" delay={0.15} />
            </h2>
          </Reveal>

          {/* Furniture — hero card */}
          <Reveal>
            <Link href="/industries" className="relative block h-[65vh] min-h-[450px] overflow-hidden group mb-3">
              <VideoBackground src="/videos/v14-product.mp4" overlay={0.35} vignette />
              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <span className="label text-accent">01 — Furniture</span>
                  <ArrowUpRight className="w-5 h-5 text-faint group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                </div>
                <div>
                  <LineReveal>
                    <span className="text-[clamp(3rem,7vw,6rem)] font-extralight tracking-[-0.03em] text-accent/60">$6.8B</span>
                  </LineReveal>
                  <h3 className="text-[var(--h2)] font-extralight tracking-tight mt-2">Furniture & Home</h3>
                  <p className="text-muted max-w-lg mt-2">#1 US supplier. 55% wooden bedroom furniture market share. Factory clusters 30 min from our office.</p>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Grid: Cashew + Coffee + Port */}
          <div className="grid md:grid-cols-3 gap-3">
            <Reveal delay={0.1}>
              <div className="relative h-[45vh] min-h-[320px] overflow-hidden group">
                <VideoBackground src="/videos/cashew.mp4" overlay={0.45} />
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <span className="label text-accent">02 — Agriculture</span>
                  <div>
                    <span className="text-3xl font-extralight text-accent/50">89%</span>
                    <h3 className="text-[var(--h3)] font-light tracking-tight mt-1">Cashews & Pepper</h3>
                    <p className="text-muted text-xs mt-1">Near-monopoly in US market.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative h-[45vh] min-h-[320px] overflow-hidden group">
                <VideoBackground src="/videos/v17-coffee.mp4" overlay={0.45} />
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <span className="label text-accent">03 — Coffee</span>
                  <div>
                    <span className="text-3xl font-extralight text-accent/50">#2</span>
                    <h3 className="text-[var(--h3)] font-light tracking-tight mt-1">Vietnamese Coffee</h3>
                    <p className="text-muted text-xs mt-1">World&apos;s 2nd largest exporter.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative h-[45vh] min-h-[320px] overflow-hidden group">
                <VideoBackground src="/videos/v13-port.mp4" overlay={0.45} />
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <span className="label text-accent">04 — Logistics</span>
                  <div>
                    <span className="text-3xl font-extralight text-accent/50">18d</span>
                    <h3 className="text-[var(--h3)] font-light tracking-tight mt-1">Global Shipping</h3>
                    <p className="text-muted text-xs mt-1">Cat Lai port → US West Coast.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────── ACT IV: WHY US ──────────── */}

      <section className="py-[var(--space-3xl)] border-t border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-16 md:gap-20">
            <div className="md:col-span-5">
              <Reveal>
                <p className="label mb-4">Why Aximora</p>
                <h2 className="text-[var(--h1)] font-extralight tracking-[-0.03em] leading-[0.9] mb-8">
                  <WordReveal text="Your eyes" />
                  <br />
                  <WordReveal text="& hands" className="text-muted" delay={0.1} />
                  <br />
                  <WordReveal text="in Vietnam." className="text-muted" delay={0.2} />
                </h2>
                <p className="text-muted text-[var(--body)] leading-relaxed max-w-sm">
                  Not a marketplace. Not a directory. A dedicated team that walks factory floors so you don&apos;t fly 20 hours.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                {[
                  { title: "HCMC-based", desc: "We live where the factories are. Weekly visits to Binh Duong, Dong Nai." },
                  { title: "Trilingual", desc: "English, Vietnamese, Chinese. Many factories are Chinese-owned." },
                  { title: "Verified only", desc: "Every factory physically walked before any recommendation." },
                  { title: "Transparent", desc: "Commission-based. You see factory price and our fee separately." },
                  { title: "Data-driven", desc: "US customs data identifies proven suppliers. Not guesswork." },
                  { title: "48h quotes", desc: "Specs today, matched factory quotes within two business days." },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.06}>
                    <div className="bg-black p-7 md:p-8 group hover:bg-surface transition-colors duration-700 h-full">
                      <h3 className="text-sm font-medium tracking-tight mb-3 group-hover:text-accent transition-colors duration-500">{item.title}</h3>
                      <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── ACT V: JOURNEY ──────────── */}

      {/* Ship — full bleed */}
      <Reveal>
        <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
          <VideoBackground src="/videos/v20-ship.mp4" overlay={0.35} vignette />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div>
              <p className="label mb-4">Process</p>
              <h2 className="text-[var(--h2)] font-extralight tracking-tight">
                Inquiry → Factory → Production → Ship → <span className="text-accent">Your warehouse</span>
              </h2>
              <p className="text-muted mt-3">8–12 weeks, end to end.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* US delivery — full bleed */}
      <Reveal>
        <section className="relative h-[45vh] min-h-[300px] overflow-hidden border-t border-border">
          <VideoBackground src="/videos/v22-us-delivery.mp4" overlay={0.45} />
          <div className="relative z-10 mx-auto px-6 md:px-10 h-full flex items-center">
            <div>
              <p className="label text-accent mb-3">Full circle</p>
              <h3 className="text-[var(--h2)] font-extralight tracking-tight mb-2">
                Delivered to your door.
              </h3>
              <p className="text-muted max-w-md text-sm">Every shipment inspected, documented, tracked. You receive exactly what you ordered.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ──────────── ACT VI: CLOSE ──────────── */}

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <VideoBackground src="/videos/v15-handshake.mp4" overlay={0.55} vignette />
        <div className="relative mx-auto px-6 md:px-10 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="label mb-6">Start a project</p>
            </Reveal>
            <h2 className="text-[var(--display)] font-extralight tracking-[-0.03em] leading-[0.88] mb-8">
              <WordReveal text="Let's build" />
              <br />
              <WordReveal text="your supply chain." className="text-accent" delay={0.2} />
            </h2>
            <Reveal delay={0.5}>
              <p className="text-muted text-lg mb-12 font-light">
                Free consultation. No commitment. Quotes within 48 hours.
              </p>
            </Reveal>
            <Reveal delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-text text-black px-10 py-4 text-[var(--label)] tracking-[0.2em] uppercase font-medium hover:bg-accent transition-all duration-500"
                >
                  Get a free quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="https://wa.me/84XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-faint text-text px-10 py-4 text-[var(--label)] tracking-[0.2em] uppercase font-medium hover:border-accent hover:text-accent backdrop-blur-sm transition-all duration-500"
                >
                  WhatsApp us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
