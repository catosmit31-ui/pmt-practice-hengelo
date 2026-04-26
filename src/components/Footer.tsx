import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoLight from "@/assets/logo-light.jpg";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "hsl(var(--brand-dark))", color: "hsl(var(--brand-cream))" }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src={logoLight}
              alt="Stap Vooruit pmt logo"
              className="h-20 w-auto object-contain mb-3 -ml-2"
            />
            <p className="text-sm leading-relaxed opacity-80">
              Psychomotorische therapie voor kinderen en volwassenen in Hengelo.
              Samen werken aan lichaam én geest.
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
                <a href="tel:0882918408" className="hover:opacity-100 transition-opacity">088 291 84 08</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@teamfysio.nl" className="hover:opacity-100 transition-opacity">info@teamfysio.nl</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} Stap Vooruit pmt — Cato Smit, Psychomotorische Therapie. Praktijk bij{" "}
            <a href="https://teamfysio.nl/locaties/teamfysio-locatie-hengelo" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">
              TeamFysio Hengelo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
