import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";
import TextReveal from "../../components/TextReveal";
import VideoBackground from "../../components/VideoBackground";
import CountUp from "../../components/CountUp";

export const metadata: Metadata = {
  title: "About",
  description: "Aximora Global Trading — Vietnam-based sourcing company in Ho Chi Minh City.",
};

export default function AboutPage() {
  return (
    <div className="grain">
      {/* Hero — HCMC coffee shop */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <VideoBackground src="/videos/v21-hcmc.mp4" overlay={0.45} />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-20 pt-40">
          <AnimatedSection><p className="text-[11px] tracking-[0.3em] uppercase text-white-40 mb-4">About us</p></AnimatedSection>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight mb-6">
            <TextReveal text="Your partner" delay={0.2} /><br />
            <TextReveal text="on the ground." className="text-white-40" delay={0.4} />
          </h1>
          <AnimatedSection delay={0.6}><p className="text-white-40 text-lg max-w-xl leading-relaxed font-light">Based in Ho Chi Minh City. We bridge the gap between global buyers and Vietnamese manufacturers.</p></AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Story + Why Vietnam */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-20">
            <AnimatedSection>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white-40 mb-6">Who we are</p>
              <div className="space-y-6 text-white-60 leading-relaxed text-lg font-light">
                <p>Aximora Global Trading is a sourcing and supply chain company headquartered in Ho Chi Minh City, Vietnam.</p>
                <p>We help international buyers — primarily from the United States — find, verify, and work with Vietnamese manufacturers. From first inquiry to container delivery.</p>
                <p>Our trilingual team (English, Vietnamese, Chinese) has deep knowledge of Vietnam&apos;s factory landscape. We know the industrial zones, logistics routes, and compliance requirements.</p>
                <p>We don&apos;t send you a factory list. We visit every factory, verify capabilities, negotiate on your behalf, and stay on-site during production.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white-40 mb-6">Why Vietnam</p>
              <div className="space-y-8">
                {[
                  { end: 1, suffix: "", prefix: "#", label: "Furniture supplier to the US", desc: "$6.8B annual exports, surpassing China" },
                  { end: 45, suffix: "%", prefix: "", label: "Lower labor costs vs China", desc: "$328/month average vs China's $580" },
                  { end: 89, suffix: "%", prefix: "", label: "US cashew market share", desc: "Near-monopoly in multiple categories" },
                  { end: 16, suffix: "+", prefix: "", label: "Free trade agreements", desc: "CPTPP, EVFTA — preferential tariff access" },
                ].map((item, i) => (
                  <AnimatedSection key={item.label} delay={0.3 + i * 0.1}>
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-20 h-20 bg-dark-2 border border-white-10 flex items-center justify-center">
                        <span className="text-2xl font-extralight text-accent"><CountUp end={item.end} prefix={item.prefix} suffix={item.suffix} /></span>
                      </div>
                      <div><h3 className="font-light text-white mb-1">{item.label}</h3><p className="text-white-40 text-sm">{item.desc}</p></div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team at work — video call */}
      <section className="relative h-[400px] overflow-hidden">
        <VideoBackground src="/videos/v12-videocall.mp4" overlay={0.5} />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-center">
          <AnimatedSection>
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase mb-4">How we work</p>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-4">
              Bridging Vietnam<br /><span className="text-white-60">and your office.</span>
            </h2>
            <p className="text-white-40 max-w-md text-sm leading-relaxed">Video calls with physical samples, factory reports, and real-time updates. Professional remote collaboration — no black box.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coverage — aerial fog */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white-40 mb-4">Coverage</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extralight tracking-tight mb-16"><TextReveal text="Our network." /></h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative min-h-[400px] overflow-hidden">
              <VideoBackground src="/videos/aerial-fog.mp4" overlay={0.6} />
              <div className="relative z-10 p-10 md:p-14 h-full flex items-end min-h-[400px]">
                <div className="grid md:grid-cols-3 gap-10 w-full">
                  {[
                    { region: "Binh Duong", desc: "Vietnam's furniture capital. 500+ factories. 30 min from our office.", focus: "Furniture, wood, metal" },
                    { region: "Dong Nai", desc: "Major hub. Long Thanh and Nhon Trach zones.", focus: "Furniture, footwear, electronics" },
                    { region: "HCMC", desc: "Our home base. Major export port and logistics hub.", focus: "All categories, logistics" },
                  ].map((r) => (
                    <div key={r.region}><h3 className="text-lg font-light mb-2">{r.region}</h3><p className="text-white-40 text-sm leading-relaxed mb-2">{r.desc}</p><p className="text-accent text-[11px] tracking-[0.15em] uppercase">{r.focus}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA — handshake */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoBackground src="/videos/v15-handshake.mp4" overlay={0.6} />
        <div className="relative max-w-[800px] mx-auto px-6 md:px-12 text-center w-full">
          <AnimatedSection>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extralight tracking-tight mb-6"><TextReveal text="Let's work together." /></h2>
            <p className="text-white-40 text-lg mb-10 font-light">Whether sourcing your first container or diversifying away from China.</p>
            <Link href="/contact" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-accent hover:text-white transition-all duration-500">
              Get in touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
