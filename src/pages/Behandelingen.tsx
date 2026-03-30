import { Link } from "react-router-dom";
import { ArrowRight, Activity, Smile, Shield, Wind, Footprints, HandHeart } from "lucide-react";
import Layout from "@/components/Layout";
import behandelingImage from "@/assets/pmt-behandeling.jpg";

const klachten = [
  { icon: Wind, title: "Stress & Burn-out", desc: "Leren ontspannen, grenzen herkennen en spanning loslaten via het lichaam." },
  { icon: Shield, title: "Angst & Onzekerheid", desc: "Meer vertrouwen opbouwen in jezelf en je lichaam door ervaringsgericht oefenen." },
  { icon: Smile, title: "Emotieregulatie", desc: "Leren omgaan met emoties via beweging en lichaamsbeleving." },
  { icon: Activity, title: "Psychosomatische Klachten", desc: "Lichamelijke klachten met een psychische oorsprong aanpakken." },
  { icon: Footprints, title: "Gedragsproblemen", desc: "Bij kinderen: werken aan zelfregulatie, concentratie en sociaal gedrag." },
  { icon: HandHeart, title: "Trauma & Rouw", desc: "Lichaamsgerichte verwerking van ingrijpende ervaringen." },
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
              Wat is Psychomotorische Therapie?
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Psychomotorische therapie (PMT) is een ervaringsgerichte therapievorm
              die gebruik maakt van het lichaam als ingang voor verandering. Door
              te bewegen, te voelen en te ervaren werk je aan psychische,
              emotionele en gedragsmatige klachten.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                Hoe werkt PMT?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bij PMT staat het <strong className="text-foreground">ervaren</strong> centraal,
                  niet alleen het praten. Door bewegingsoefeningen, ontspanningsoefeningen,
                  lichaamsbewustzijnsoefeningen en soms spel ontdek je patronen die
                  in een gesprek niet altijd naar boven komen.
                </p>
                <p>
                  De therapeut observeert hoe je beweegt, reageert en omgaat met
                  uitdagingen. Samen zoeken jullie naar nieuwe manieren om met
                  klachten om te gaan.
                </p>
                <p>
                  PMT is geschikt voor <strong className="text-foreground">alle leeftijden</strong>:
                  van jonge kinderen die vastlopen in hun ontwikkeling tot volwassenen
                  met stress, angst of lichamelijke spanning.
                </p>
              </div>
            </div>
            <div>
              <img
                src={behandelingImage}
                alt="PMT therapie sessie"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Klachten */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Waarvoor kunt u terecht?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              PMT kan helpen bij uiteenlopende klachten. Hieronder vindt u een
              overzicht van veelvoorkomende hulpvragen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {klachten.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
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

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary-foreground mb-4">
            Herkent u zich hierin?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Neem vrijblijvend contact op voor een kennismakingsgesprek. Samen
            kijken we wat PMT voor u of uw kind kan betekenen.
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
