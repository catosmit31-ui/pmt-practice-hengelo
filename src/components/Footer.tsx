import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
              Cato Smit PMT
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Psychomotorische therapie voor kinderen en volwassenen in Hengelo.
              Samen werken aan lichaam én geest.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-3">Pagina's</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/over-mij" className="text-sm text-muted-foreground hover:text-primary transition-colors">Over Mij</Link>
              <Link to="/behandelingen" className="text-sm text-muted-foreground hover:text-primary transition-colors">Behandelingen</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-3">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Beitelstraat 1, 7556 ND Hengelo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:0882918408" className="hover:text-primary transition-colors">088 291 84 08</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:info@teamfysio.nl" className="hover:text-primary transition-colors">info@teamfysio.nl</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cato Smit — Psychomotorische Therapie. Praktijk bij{" "}
            <a href="https://teamfysio.nl/locaties/teamfysio-locatie-hengelo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              TeamFysio Hengelo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
