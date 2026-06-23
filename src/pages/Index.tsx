import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
const catoPortretUrl = "/images/cato-portret.jpg";

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
                <span className="text-primary">Psychomotorische</span>{" "}
                <span className="text-accent">therapie</span>
              </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Stap Vooruit PMT is de praktijk voor psychomotorische therapie van Cato Pellewever
                in Hengelo. Door beweging en ervaringsgerichte oefeningen leer je lichaamssignalen,
                emoties en gedragspatronen beter herkennen.
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
                src={catoPortretUrl}
                alt="Cato Pellewever — psychomotorisch therapeut Hengelo"
                className="w-full max-w-md lg:max-w-xl h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
            Ervaar de kracht van bewegen
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bij psychomotorische therapie staat het ervaren centraal. Door te
            bewegen, te voelen en te experimenteren ontdek je patronen en
            mogelijkheden die in een gesprek alleen niet naar voren komen.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            De praktijk is gevestigd bij TeamFysio aan de Beitelstraat 1 in
            Hengelo — een professionele omgeving waar je je op je gemak kunt
            voelen.
          </p>
          <Link
            to="/over-mij"
            className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
          >
            Lees meer over Cato <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
