import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";
import TextReveal from "../../components/TextReveal";
import VideoBackground from "../../components/VideoBackground";

export const metadata: Metadata = {
  title: "Services",
  description: "Factory sourcing, quality control, production monitoring, and logistics from Ho Chi Minh City.",
};

const services = [
  {
    num: "01", title: "Factory Sourcing & Matching",
    desc: "Finding the right factory is the hardest part. We do it for you.",
    video: "/videos/v09-factory-visit.mp4",
    details: ["Identify factories based on your specs, MOQ, and budget", "On-site visits and capability assessments", "Factory profiles with photos, certifications, capacity", "Negotiate pricing and terms on your behalf", "Competitive quotes within 48 hours"],
  },
  {
    num: "02", title: "Quality Control & Inspection",
    desc: "Your quality team on the ground. Every shipment inspected.",
    video: "/videos/v11-qc-detail.mp4",
    details: ["Pre-production inspection — verify materials and specs", "During production — catch issues early", "Pre-shipment — full AQL sampling", "Container loading supervision", "Detailed photo and video reports"],
  },
  {
    num: "03", title: "Production Monitoring",
    desc: "Stay informed without flying to Vietnam.",
    video: "/videos/v18-warehouse.mp4",
    details: ["Weekly progress reports with photos", "Timeline tracking against deadlines", "Issue escalation and resolution", "Direct communication with factory management", "Sample approval coordination"],
  },
  {
    num: "04", title: "Shipping & Logistics",
    desc: "Factory floor to your warehouse — we coordinate everything.",
    video: "/videos/v10-container.mp4",
    details: ["FOB, CIF, and door-to-door arrangements", "Freight forwarder coordination and rate comparison", "Export documentation and customs clearance", "Container booking and tracking", "Coordination with your US logistics team"],
  },
];

export default function ServicesPage() {
  return (
    <div className="grain">
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <VideoBackground src="/videos/aerial-fog.mp4" overlay={0.55} />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-20 pt-40">
          <AnimatedSection><p className="text-[11px] tracking-[0.3em] uppercase text-white-40 mb-4">Services</p></AnimatedSection>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight mb-6">
            <TextReveal text="What we do" delay={0.2} /><br />
            <TextReveal text="for you." className="text-white-40" delay={0.4} />
          </h1>
          <AnimatedSection delay={0.6}><p className="text-white-40 text-lg max-w-xl leading-relaxed font-light">End-to-end sourcing support from Ho Chi Minh City. You focus on selling — we handle everything in Vietnam.</p></AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 space-y-4">
          {services.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`relative overflow-hidden min-h-[400px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <VideoBackground src={s.video} overlay={0.5} />
                  <div className="relative z-10 p-10 h-full flex items-end">
                    <span className="text-accent text-[11px] tracking-[0.3em] uppercase">{s.num}</span>
                  </div>
                </div>
                <div className={`bg-dark border border-white-10 p-10 md:p-14 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">{s.title}</h2>
                  <p className="text-white-40 text-lg mb-8">{s.desc}</p>
                  <ul className="space-y-3">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-white-40 text-sm">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Ship at sea — visual break */}
      <section className="relative h-[350px] overflow-hidden">
        <VideoBackground src="/videos/v20-ship.mp4" overlay={0.4} />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-center justify-center">
          <AnimatedSection>
            <p className="text-3xl md:text-4xl font-extralight tracking-tight text-center text-white/80">
              From factory floor to your warehouse.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,114,42,0.05)_0%,_transparent_50%)]" />
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center relative">
          <AnimatedSection>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extralight tracking-tight mb-6"><TextReveal text="Need something custom?" /></h2>
            <p className="text-white-40 text-lg mb-10">Every sourcing project is different. Tell us your requirements.</p>
            <Link href="/contact" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-accent hover:text-white transition-all duration-500">
              Start a conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
