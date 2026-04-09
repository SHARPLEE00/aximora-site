import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="text-[15px] font-medium tracking-[0.25em] uppercase text-text">Aximora</span>
            <p className="text-muted text-[var(--body)] mt-4 leading-relaxed max-w-xs">
              Global sourcing partner based in Ho Chi Minh City, Vietnam.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <p className="label mb-5">Navigate</p>
            <div className="space-y-3">
              {["Services", "Industries", "About", "Blog", "Contact"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="block text-muted text-sm hover:text-text transition-colors duration-300">{item}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="label mb-5">Services</p>
            <div className="space-y-3 text-muted text-sm">
              <p>Factory Sourcing</p>
              <p>Quality Control</p>
              <p>Production Monitoring</p>
              <p>Logistics</p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="label mb-5">Contact</p>
            <div className="space-y-3 text-sm">
              <a href="mailto:sharp@aximora.co" className="block text-muted hover:text-accent transition-colors duration-300">sharp@aximora.co</a>
              <a href="https://wa.me/84XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-accent transition-colors duration-300">WhatsApp</a>
              <p className="text-muted">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
        </div>

        <div className="divider mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="label">&copy; {new Date().getFullYear()} Aximora Global Trading</span>
          <span className="label">Vietnam &rarr; World</span>
        </div>
      </div>
    </footer>
  );
}
