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
                Als psychomotorisch therapeut geloof ik in de kracht van de
                verbinding tussen lichaam en geest. Met passie en betrokkenheid
                help ik zowel kinderen als volwassenen om weer in balans te komen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Na jaren ervaring bij diverse zorginstellingen start ik nu mijn eigen
                PMT-praktijk bij TeamFysio in Hengelo. Hier kan ik de persoonlijke,
                lichaamsgerichte zorg bieden waar ik voor sta.
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
                    Opleiding Psychomotorische Therapie
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    HBO-opleiding Psychomotorische Therapie, geaccrediteerd
                    en erkend als paramedische behandelvorm. Als PMT'er is Cato
                    bevoegd om zelfstandig cliënten te behandelen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Koninklijke Kentalis
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">September 2025 – heden · Enschede</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Psychomotorisch therapeut bij Koninklijke Kentalis, een
                    organisatie gespecialiseerd in zorg voor mensen met
                    beperkingen in horen, zien en communiceren.
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
                  <p className="text-sm text-muted-foreground mb-1">Ervaring in de gehandicaptenzorg</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Werkervaring als psychomotorisch therapeut bij Aveleijn,
                    een zorgorganisatie die ondersteuning biedt aan mensen met
                    een verstandelijke beperking.
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
