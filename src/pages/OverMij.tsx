import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import aboutImage from "@/assets/about-cato.jpg";

const OverMij = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
                Over Mij
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
                Cato Smit
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Mijn naam is Cato Smit, psychomotorisch therapeut (PMT). Sinds juni
                heb ik mijn eigen praktijk, waarin ik kinderen en (jong)volwassenen
                help die vastlopen in het dagelijks leven. Denk aan stress, moeite met
                grenzen aangeven, onzekerheid over gevoelens of het ontwikkelen van
                meer zelfvertrouwen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Binnen PMT staat ervarend leren centraal. Door te bewegen krijg je meer
                inzicht in jezelf. Niet alles hoeft in woorden — juist door te doen en
                te voelen ontstaat ruimte voor verandering.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Een goede klik is voor mij essentieel. Ik werk nuchter en praktisch,
                met aandacht voor beweging, serieuze momenten én ruimte voor humor.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Neem contact op <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src={aboutImage}
                alt="Cato Smit, psychomotorisch therapeut"
                className="rounded-xl shadow-lg w-full max-w-md object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opleiding & Ervaring */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-10 text-center">
              Opleiding & Ervaring
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Windesheim, Zwolle
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">Afgestudeerd in 2021</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    HBO-opleiding Psychomotorische Therapie en Bewegingsagogie —
                    een geaccrediteerde, paramedische behandelvorm.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Aveleijn
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">Psychomotorisch therapeut · heden</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Naast mijn eigen praktijk werk ik nog steeds met veel plezier
                    bij Aveleijn, een zorgorganisatie voor mensen met een
                    verstandelijke beperking. Hier ontwikkel ik mij verder als therapeut.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Ervaring in de jeugdzorg
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Na mijn afstuderen deed ik ervaring op in de jeugdzorg, waar ik
                    werkte met kinderen en jongeren die vastliepen in hun
                    ontwikkeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditatie */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Geaccrediteerd & Erkend
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Psychomotorische therapie is een erkende paramedische behandelvorm.
            Cato is opgeleid als HBO psychomotorisch therapeut en werkt volgens
            de beroepsrichtlijnen. PMT kan vergoed worden vanuit de
            aanvullende zorgverzekering — informeer bij uw verzekeraar naar de
            mogelijkheden.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default OverMij;
