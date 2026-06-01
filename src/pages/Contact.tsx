import { useState } from "react";
import { CalendarDays, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ naam: "", email: "", telefoon: "", bericht: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.naam.trim() || !form.email.trim() || !form.bericht.trim()) {
      toast({ title: "Vul a.u.b. je naam, e-mail en bericht in.", variant: "destructive" });
      return;
    }
    const body = `Naam: ${form.naam}%0D%0AE-mail: ${form.email}%0D%0ATelefoon: ${form.telefoon}%0D%0A%0D%0A${form.bericht}`;
    window.location.href = `mailto:info@stapvooruitpmt.nl?subject=${encodeURIComponent("Aanmelding via website — " + form.naam)}&body=${body}`;
    toast({ title: "Bedankt! Je e-mailprogramma wordt geopend om het bericht te versturen." });
  };

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
              Heb je vragen of wil je een afspraak maken? Neem gerust contact
              op. Ik help je graag verder.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Praktijkdagen & bereikbaarheid */}
            <div className="bg-card rounded-xl border border-border p-8">
                <div className="flex items-center gap-2 mb-6">
                  <CalendarDays className="text-primary" size={20} />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Praktijkdagen & bereikbaarheid
                  </h3>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Mijn praktijkdagen zijn op <span className="text-foreground font-medium">maandag en dinsdag</span>.
                    Op deze dagen ben ik het beste bereikbaar voor zowel
                    behandelingen als vragen.
                  </p>
                  <p>
                    Heb je via het formulier, telefoon of e-mail contact
                    opgenomen? Dan neem ik zo spoedig mogelijk — uiterlijk
                    binnen enkele werkdagen — contact met je op om je vraag
                    te bespreken of een afspraak in te plannen.
                  </p>
                </div>
            </div>
          </div>

          {/* Aanmeldformulier */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                Aanmelden of een bericht achterlaten
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Laat je gegevens en een korte boodschap achter. Ik neem zo spoedig mogelijk contact met je op.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="naam" className="block text-sm font-medium text-foreground mb-1">Naam *</label>
                    <Input id="naam" required value={form.naam} onChange={(e) => setForm({ ...form, naam: e.target.value })} maxLength={100} />
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="block text-sm font-medium text-foreground mb-1">Telefoonnummer</label>
                    <Input id="telefoon" type="tel" value={form.telefoon} onChange={(e) => setForm({ ...form, telefoon: e.target.value })} maxLength={30} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">E-mailadres *</label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
                </div>
                <div>
                  <label htmlFor="bericht" className="block text-sm font-medium text-foreground mb-1">Bericht *</label>
                  <Textarea id="bericht" required rows={5} value={form.bericht} onChange={(e) => setForm({ ...form, bericht: e.target.value })} maxLength={2000} />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Bericht versturen <Send size={16} />
                </button>
              </form>
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
