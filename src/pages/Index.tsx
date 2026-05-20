import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brain, Users } from "lucide-react";
import Layout from "@/components/Layout";
import behandelingImage from "@/assets/pmt-behandeling.jpg";
import logoLight from "@/assets/logo-light.jpg";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-background">
        <div className="container mx-auto px-6 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
                Stap Vooruit PMT · Hengelo
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Een{" "}
                <span className="text-primary">stap vooruit</span> via{" "}
                <span className="text-accent">beweging</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Stap Vooruit PMT is de praktijk voor psychomotorische therapie van Cato Pellewever
                in Hengelo. Door beweging en ervaringsgerichte oefeningen leer je lichaamssignalen,
                emoties en gedragspatronen beter herkennen — voor kinderen, jongeren en (jong)volwassenen.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Neem contact op <ArrowRight size={16} />
                </Link>
                <Link
                  to="/behandelingen"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
                >
                  Meer over PMT
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up">
              <img
                src={logoLight}
                alt="Stap Vooruit PMT logo"
                className="w-full max-w-md lg:max-w-xl h-auto object-contain rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Wat kan PMT voor u betekenen?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Psychomotorische therapie richt zich op de wisselwerking tussen
              lichaam en geest. Door middel van beweging en lichaamsbeleving
              werken we aan uw klachten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Lichaam & Geest",
                desc: "PMT benut de verbinding tussen lichaam en geest. Via beweging en lichaamservaring werkt u aan emotionele en psychische klachten.",
              },
              {
                icon: Heart,
                title: "Persoonlijke Aanpak",
                desc: "Elke behandeling wordt afgestemd op uw unieke situatie, klachten en doelen. U staat centraal in het therapieproces.",
              },
              {
                icon: Users,
                title: "Voor Jong & Oud",
                desc: "PMT is geschikt voor zowel kinderen als volwassenen, bij uiteenlopende klachten zoals stress, angst, gedragsproblemen of trauma.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-5">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
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

      {/* CTA with image */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={behandelingImage}
                alt="Psychomotorische therapie oefening"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
                Ervaar de kracht van bewegen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bij psychomotorische therapie staat het ervaren centraal. Door te
                bewegen, te voelen en te experimenteren ontdekt u patronen en
                mogelijkheden die in een gesprek alleen niet naar voren komen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                De praktijk is gevestigd bij TeamFysio aan de Beitelstraat 1 in
                Hengelo — een professionele omgeving waar u zich op uw gemak kunt
                voelen.
              </p>
              <Link
                to="/over-mij"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                Lees meer over Cato <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
