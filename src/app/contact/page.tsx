import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "../../components/AnimatedSection";
import TextReveal from "../../components/TextReveal";
import VideoBackground from "../../components/VideoBackground";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a free sourcing quote. We respond within 48 hours with factory recommendations and pricing.",
};

export default function ContactPage() {
  return (
    <div className="grain">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <VideoBackground src="/videos/05.mp4" overlay={0.6} />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-20 pt-40">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white-40 mb-4">Contact</p>
          </AnimatedSection>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-tight mb-6">
            <TextReveal text="Start a project." delay={0.2} />
          </h1>
          <AnimatedSection delay={0.5}>
            <p className="text-white-40 text-lg max-w-xl leading-relaxed font-light">
              Tell us what you&apos;re looking for. We respond within 48 hours
              with factory recommendations and pricing.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Form */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <AnimatedSection>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-white-40 mb-3">Your Name *</label>
                      <input type="text" required className="w-full bg-transparent border-b border-white-20 focus:border-accent pb-3 text-white outline-none transition-colors placeholder:text-white-20" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-white-40 mb-3">Company *</label>
                      <input type="text" required className="w-full bg-transparent border-b border-white-20 focus:border-accent pb-3 text-white outline-none transition-colors placeholder:text-white-20" placeholder="ABC Imports Inc." />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-white-40 mb-3">Email *</label>
                      <input type="email" required className="w-full bg-transparent border-b border-white-20 focus:border-accent pb-3 text-white outline-none transition-colors placeholder:text-white-20" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-white-40 mb-3">Phone / WhatsApp</label>
                      <input type="tel" className="w-full bg-transparent border-b border-white-20 focus:border-accent pb-3 text-white outline-none transition-colors placeholder:text-white-20" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-white-40 mb-3">What product are you looking for? *</label>
                    <input type="text" required className="w-full bg-transparent border-b border-white-20 focus:border-accent pb-3 text-white outline-none transition-colors placeholder:text-white-20" placeholder="e.g., Wooden dining tables, Cashew nuts W320" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-white-40 mb-3">Estimated Quantity</label>
                      <input type="text" className="w-full bg-transparent border-b border-white-20 focus:border-accent pb-3 text-white outline-none transition-colors placeholder:text-white-20" placeholder="e.g., 1 container, 500 units" />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-white-40 mb-3">Target Price</label>
                      <input type="text" className="w-full bg-transparent border-b border-white-20 focus:border-accent pb-3 text-white outline-none transition-colors placeholder:text-white-20" placeholder="e.g., $15-20/unit FOB" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-white-40 mb-3">Additional Details</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-white-20 focus:border-accent pb-3 text-white outline-none transition-colors resize-none placeholder:text-white-20" placeholder="Certifications, delivery timeline, special requirements..." />
                  </div>

                  <button type="submit" className="bg-white text-black px-10 py-4 text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-accent hover:text-white transition-all duration-500">
                    Send Inquiry
                  </button>
                </form>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection delay={0.2}>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-[11px] tracking-[0.2em] uppercase text-white-40 mb-4">Direct</h3>
                    <div className="space-y-3">
                      <a href="mailto:sharp@aximora.co" className="block text-white-60 hover:text-accent transition-colors">sharp@aximora.co</a>
                      <a href="https://wa.me/84XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="block text-white-60 hover:text-accent transition-colors">WhatsApp</a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[11px] tracking-[0.2em] uppercase text-white-40 mb-4">Office</h3>
                    <p className="text-white-60 text-sm leading-relaxed">
                      Ho Chi Minh City, Vietnam<br />
                      Factory visits by appointment
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[11px] tracking-[0.2em] uppercase text-white-40 mb-4">Response</h3>
                    <p className="text-white-60 text-sm leading-relaxed">
                      All inquiries within 48 hours.<br />
                      Urgent? WhatsApp for same-day.
                    </p>
                  </div>

                  <div className="bg-dark border border-white-10 p-6">
                    <h3 className="text-[11px] tracking-[0.2em] uppercase text-white-40 mb-4">What happens next</h3>
                    <div className="space-y-3 text-white-40 text-sm">
                      <p className="flex gap-3"><span className="text-accent">01</span> We review your requirements</p>
                      <p className="flex gap-3"><span className="text-accent">02</span> Match with suitable factories</p>
                      <p className="flex gap-3"><span className="text-accent">03</span> Send factory profiles + quotes</p>
                      <p className="flex gap-3"><span className="text-accent">04</span> Arrange samples if needed</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
