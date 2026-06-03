import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logoLight from "@/assets/logo-light.jpg";
const vaktherapieLogoUrl = "/__l5e/assets-v1/77ce1617-d30d-445e-8a41-5af9f483ff59/vaktherapie-nederland.jpg";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "hsl(var(--brand-dark))", color: "hsl(var(--brand-cream))" }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src={logoLight}
              alt="Stap Vooruit PMT logo"
              className="h-20 w-auto object-contain mb-3 -ml-2"
            />
            <p className="text-sm leading-relaxed opacity-80">
              Praktijk voor psychomotorische therapie in Hengelo.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-3">Pagina's</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/over-mij" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Over Mij</Link>
              <Link to="/behandelingen" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Behandelingen</Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0" />
                <span>Beitelstraat 1, 7556 ND Hengelo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+31683304260" className="hover:opacity-100 transition-opacity">+31 6 83 30 42 60</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@stapvooruitpmt.nl" className="hover:opacity-100 transition-opacity">info@stapvooruitpmt.nl</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram size={16} className="shrink-0" />
                <a href="https://instagram.com/stapvooruitPMT" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">@stapvooruitPMT</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <div className="flex flex-col items-center gap-3 mb-6">
            <p className="text-xs uppercase tracking-widest opacity-70">
              Aangesloten bij
            </p>
            <a
              href="https://vaktherapie.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-md px-4 py-3 inline-block hover:opacity-90 transition-opacity"
              aria-label="Vaktherapie Nederland — Federatie van Vaktherapeutische Beroepen"
            >
              <img
                src={vaktherapieLogoUrl}
                alt="Vaktherapie Nederland — Federatie van Vaktherapeutische Beroepen"
                className="h-14 w-auto object-contain"
                loading="lazy"
              />
            </a>
          </div>
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} Stap Vooruit PMT — Cato Pellewever, Psychomotorische Therapie. Praktijk bij{" "}
            <a href="https://teamfysio.nl/locaties/teamfysio-locatie-hengelo" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">
              TeamFysio Hengelo
            </a>
          </p>
          <p className="text-xs opacity-60 mt-2">KVK 99872277</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
