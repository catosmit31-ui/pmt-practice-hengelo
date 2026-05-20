import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";

const OverMij = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Over Mij
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Cato Pellewever
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mijn naam is Cato Pellewever. Ik ben opgegroeid in Delden en woon sinds een aantal jaar samen met mijn man in Hengelo.
              </p>
              <p>
                In 2021 ben ik afgestudeerd als psychomotorisch therapeut aan de opleiding Psychomotorische Therapie op Windesheim in Zwolle. Sinds mijn afstuderen werk ik met veel plezier in de zorg. Ik ben gestart binnen de jeugdzorg en vrijwel tegelijkertijd aan de slag gegaan als psychomotorisch therapeut bij Aveleijn, een warme organisatie voor mensen met een verstandelijke beperking waar ik nog altijd met veel passie werk.
              </p>
              <p>
                In mijn werk vind ik het belangrijk dat iemand zich gehoord, gezien en veilig voelt. Ik probeer echt aan te sluiten bij de ander en kijk samen naar wat iemand nodig heeft. Daarbij werk ik op een nuchtere, betrokken en laagdrempelige manier.
              </p>
              <p>
                In psychomotorische therapie staan lichaam en gevoel centraal. Soms is het moeilijk om woorden te geven aan wat je voelt, terwijl je lichaam vaak al veel laat zien. Door samen te ervaren en in beweging te komen, ontstaat meer inzicht in jezelf en wat je nodig hebt.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity mt-8"
            >
              Neem contact op <ArrowRight size={16} />
            </Link>
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
                    Kentalis
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">Psychomotorisch therapeut · september '25 – maart '26</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Een half jaar gewerkt als psychomotorisch therapeut bij Kentalis,
                    een organisatie gespecialiseerd in zorg en onderwijs voor mensen
                    met een gehoor- of communicatiebeperking.
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
