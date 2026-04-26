import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const openingstijden = [
  { dag: "Maandag", open: "08:00", sluit: "17:00" },
  { dag: "Dinsdag", open: "08:00", sluit: "17:00" },
  { dag: "Woensdag", open: "Gesloten", sluit: "" },
  { dag: "Donderdag", open: "Gesloten", sluit: "" },
  { dag: "Vrijdag", open: "Gesloten", sluit: "" },
  { dag: "Zaterdag", open: "Gesloten", sluit: "" },
  { dag: "Zondag", open: "Gesloten", sluit: "" },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Neem contact op
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Heeft u vragen of wilt u een afspraak maken? Neem gerust contact
              op. Ik help u graag verder.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Locatie & Bereikbaarheid
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  De praktijk is gevestigd bij{" "}
                  <a
                    href="https://teamfysio.nl/locaties/teamfysio-locatie-hengelo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    TeamFysio Hengelo <ExternalLink size={14} />
                  </a>
                  , een moderne fysiopraktijk met uitstekende faciliteiten.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Adres</p>
                      <p className="text-muted-foreground text-sm">Beitelstraat 1</p>
                      <p className="text-muted-foreground text-sm">7556 ND Hengelo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Telefoon</p>
                      <a href="tel:+31683304260" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        +31 6 83 30 42 60
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">E-mail</p>
                      <a href="mailto:info@stapvooruitpmt.nl" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        info@stapvooruitpmt.nl
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Openingstijden */}
            <div>
              <div className="bg-card rounded-xl border border-border p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="text-primary" size={20} />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Openingstijden
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Behandelingen vinden plaats op maandag en dinsdag.
                  In overleg zijn afspraken tot 19:00 uur mogelijk.
                </p>
                <div className="space-y-2">
                  {openingstijden.map((item) => (
                    <div
                      key={item.dag}
                      className="flex justify-between py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-foreground font-medium">{item.dag}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.open === "Gesloten" ? "Gesloten" : `${item.open} – ${item.sluit}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="mt-16 max-w-5xl mx-auto rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="TeamFysio Hengelo locatie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.5!2d6.7925!3d52.2647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b813e5a8cfd16b%3A0x0!2sBeitelstraat+1%2C+7556+ND+Hengelo!5e0!3m2!1snl!2snl!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
