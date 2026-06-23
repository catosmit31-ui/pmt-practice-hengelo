import { Link } from "react-router-dom";
import { ArrowRight, Activity, Smile, Shield, Wind, Footprints, Wallet, HeartPulse, Info, MessageCircleWarning, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
const materialenUrl = "/images/materialen.jpg";
const runningFotoUrl = "/images/runningtherapie.jpg";

const hulpvragen = [
  { icon: Wind, title: "Stress & Burn-out", desc: "Leren ontspannen, grenzen herkennen en spanning loslaten via het lichaam." },
  { icon: Shield, title: "Angst & Onzekerheid", desc: "Meer vertrouwen opbouwen in jezelf en je lichaam door ervaringsgericht oefenen." },
  { icon: Smile, title: "Emotieregulatie", desc: "Leren omgaan met emoties via beweging en lichaamsbeleving." },
  { icon: Footprints, title: "Gedragsproblemen", desc: "Bij kinderen: werken aan zelfregulatie, concentratie en sociaal gedrag." },
];

const Behandelingen = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Behandelingen
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Behandelingen van Stap Vooruit PMT
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stap Vooruit PMT biedt twee behandelvormen aan die beide inzetten op
              lichaam, beweging en ervaring als ingang voor verandering.
            </p>
          </div>
        </div>
      </section>

      {/* Behandeling keuzes */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PMT Card */}
            <div className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5">
                <HeartPulse className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                Psychomotorische Therapie
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Een ervaringsgerichte therapie die het lichaam als ingang gebruikt.
                Door te bewegen, te voelen en te ervaren werk je aan psychische,
                emotionele en gedragsmatige klachten.
              </p>
              <a
                href="#pmt"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                Meer over PMT <ArrowRight size={16} />
              </a>
            </div>

            {/* Runningtherapie Card */}
            <div className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5">
                <Activity className="text-primary" size={24} />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                Runningtherapie
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bewegen in de buitenlucht als middel voor psychische verwerking en
                herstel. Samen werken aan doelen door middel van wandelen of hardlopen.
              </p>
              <a
                href="#runningtherapie"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                Meer over runningtherapie <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Algemene informatie */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mx-auto mb-5">
              <Info className="text-primary" size={24} />
            </div>
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Algemene informatie
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Op deze pagina vind je meer informatie over de behandelingen die
              Stap Vooruit PMT aanbiedt. Ook vind je hieronder informatie over
              veelvoorkomende hulpvragen, vergoedingen en de klachtenregeling.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#hulpvragen"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Activity size={16} /> Hulpvragen
            </a>
            <a
              href="#vergoedingen"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Wallet size={16} /> Vergoedingen
            </a>
            <a
              href="#tarieven"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Wallet size={16} /> Tarieven
            </a>
          </div>
        </div>
      </section>

      {/* Psychomotorische Therapie detail */}
      <section id="pmt" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
              Psychomotorische Therapie
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Psychomotorische therapie (PMT) is een ervaringsgerichte therapievorm
                die gebruik maakt van het lichaam als ingang voor verandering. Door
                te bewegen, te voelen en te ervaren werk je aan psychische,
                emotionele en gedragsmatige klachten.
              </p>
              <p>
                Bij PMT staat <strong className="text-foreground">ervaren</strong> centraal,
                niet alleen het praten. Door lichaamsgericht te werken leer je meer
                in contact te komen met je lijf en ontdek je patronen die wellicht
                in een gesprek niet altijd naar boven komen.
              </p>
              <p>
                In de sessies wordt er geobserveerd hoe je beweegt, reageert en
                omgaat met uitdagingen. We kunnen aan de hand hiervan samen zoeken
                naar nieuwe manieren om met klachten om te gaan.
              </p>
              <p>
                PMT sluit goed aan bij <strong className="text-foreground">kinderen</strong>,
                omdat kinderen vooral leren door te ervaren en te doen. Praten over
                gevoelens of gedrag is voor hen vaak nog lastig, terwijl zij via
                beweging en spel makkelijker kunnen ontdekken, voelen en oefenen.
              </p>
              <p>
                Ook voor <strong className="text-foreground">volwassenen</strong> kan
                PMT passend zijn. Volwassenen zijn vaak gewend om vooral vanuit
                het hoofd te functioneren en gevoelens te analyseren, terwijl het
                contact met het lichaam op de achtergrond raakt. PMT helpt om
                opnieuw stil te staan bij lichamelijke signalen, emoties en gedrag,
                zodat denken, voelen en doen meer met elkaar in verbinding komen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Runningtherapie detail */}
      <section id="runningtherapie" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src={runningFotoUrl}
              alt="Runningtherapie in de buitenlucht"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
            <div>
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
              Runningtherapie
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Runningtherapie is een vorm van bewegingstherapie waarbij wandelen of
                hardlopen wordt ingezet als therapievorm. Samen werken we aan je
                persoonlijke doelen terwijl je in beweging bent in de buitenlucht.
              </p>
              <p>
                Bewegen in de buitenlucht heeft een positief effect op je stemming,
                stressniveau en algehele gezondheid. Door tegelijkertijd in gesprek
                te gaan over wat je bezighoudt, ontstaat er ruimte voor verwerking
                en inzicht.
              </p>
              <p>
                Runningtherapie is geschikt voor volwassenen en jongeren die willen
                werken aan klachten zoals stress, burn-out, angst of somberheid en
                daarnaast behoefte hebben aan meer beweging in het dagelijks leven.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hulpvragen */}
      <section
        id="hulpvragen"
        className="relative py-20 bg-card bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(${materialenUrl})` }}
      >
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Hulpvragen — waarvoor kun je terecht?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              PMT en runningtherapie kunnen helpen bij uiteenlopende klachten.
              Hieronder vind je een overzicht van veelvoorkomende hulpvragen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hulpvragen.map((item, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vergoedingen */}
      <section id="vergoedingen" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center">
                <Wallet className="text-primary" size={20} />
              </div>
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                Vergoedingen
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Psychomotorische therapie wordt in veel gevallen (gedeeltelijk)
                vergoed vanuit de aanvullende verzekering. De hoogte van de
                vergoeding is afhankelijk van je zorgverzekeraar en het type
                aanvullende verzekering dat je hebt afgesloten.
              </p>
              <p>
                Ik ben aangesloten bij de{" "}
                <strong className="text-foreground">FVB</strong>{" "}
                (Federatie Vaktherapeutische Beroepen) en de{" "}
                <strong className="text-foreground">NVPMT</strong>{" "}
                (Nederlandse Vereniging voor Psychomotorische Therapie). Hierdoor
                is behandeling in veel gevallen verzekerd via je aanvullende
                zorgverzekering.
              </p>
              <p>
                Je kunt zelf bij je zorgverzekeraar nagaan of je in aanmerking
                komt voor vergoeding.
              </p>
              <p>
                Een handig overzicht van zorgverzekeraars die vaktherapie
                vergoeden vind je op{" "}
                <a
                  href="https://www.zorgwijzer.nl/vergoeding/vaktherapie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Zorgwijzer <ExternalLink size={14} />
                </a>.
              </p>
              <div id="tarieven" className="mt-6 p-5 bg-card rounded-xl border border-border scroll-mt-24">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Tarieven
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between gap-4">
                    <span>Intake & opstellen behandelovereenkomst</span>
                    <span className="font-medium text-foreground whitespace-nowrap">€ 100,00</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Individuele therapie (per sessie)</span>
                    <span className="font-medium text-foreground whitespace-nowrap">€ 90,00</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Opmaken eindverslag</span>
                    <span className="font-medium text-foreground whitespace-nowrap">€ 50,00</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 p-5 bg-card rounded-xl border border-border">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  AGB-codes
                </h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>AGB-code zorgverlener</span>
                    <span className="font-medium text-foreground">90121918</span>
                  </li>
                  <li className="flex justify-between">
                    <span>AGB-code praktijk</span>
                    <span className="font-medium text-foreground">90096874</span>
                  </li>
                </ul>
              </div>
              {/* Klachtenregeling — compact, onderaan vergoedingen */}
              <div id="klachten" className="mt-4 p-5 bg-card rounded-xl border border-border scroll-mt-24">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircleWarning className="text-primary" size={18} />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Klachtenregeling
                  </h3>
                </div>
                <p className="text-sm">
                  Ben je ontevreden over de behandeling? Bespreek het gerust eerst
                  met mij. Komen we er samen niet uit, dan kun je terecht bij{" "}
                  <strong className="text-foreground">NIBIG</strong>, waar Stap
                  Vooruit PMT bij is aangesloten in het kader van de{" "}
                  <strong className="text-foreground">Wkkgz</strong>. Meer info op{" "}
                  <a
                    href="https://www.nibig.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    nibig.nl <ExternalLink size={12} />
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary-foreground mb-4">
            Herken je je hierin?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Neem vrijblijvend contact op voor een kennismakingsgesprek. Samen
            kijken we wat PMT of runningtherapie voor jou kan betekenen.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Contact opnemen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Behandelingen;
