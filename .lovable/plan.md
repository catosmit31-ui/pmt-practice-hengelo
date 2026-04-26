## Logo integratie — "Stap Vooruit pmt"

Twee logoversies toevoegen aan de site en ze op de juiste achtergronden gebruiken zodat het contrast altijd klopt. Daarnaast wil ik de bestaande site-naam ("Cato Smit PMT") in de navigatie en footer vervangen door het beeldlogo, en de huidige (sand/sage) kleurpalette licht bijstellen zodat het naadloos aansluit bij de donkergroene tint uit het logo.

### Wat er gebeurt

1. **Logo's importeren als assets**
   - `user-uploads://Logo_Stapvooruit_Licht.jpg` → `src/assets/logo-light.jpg` (licht logo op donkergroene achtergrond — voor donkere secties/footer)
   - `user-uploads://Logo_Stapvooruit_Donker.jpg` → `src/assets/logo-dark.jpg` (donker logo op witte achtergrond — voor de navbar en lichte secties)

2. **Navbar** (`src/components/Navbar.tsx`)
   - Tekst "Cato Smit PMT" vervangen door het **donkere logo** (de navbar-achtergrond is licht/cream).
   - Hoogte ~40–48px, behoudt de link naar `/`.
   - Praktijknaam "Stap Vooruit pmt" wordt zo ook visueel de merknaam van de praktijk.

3. **Footer** (`src/components/Footer.tsx`)
   - Tekstkop "Cato Smit PMT" vervangen door het **lichte logo** in een donkergroen footer-blok (de footer-achtergrond wordt aangepast naar de donkergroene merkkleur — zie punt 5).
   - Onderschrift "© Cato Smit — Psychomotorische Therapie. Praktijk bij TeamFysio Hengelo" blijft.

4. **Homepage hero** (`src/pages/Index.tsx`)
   - Subtiele extra: het lichte logo klein tonen boven de eyebrow-tekst, óf als watermark in de hoek. Houden we ingetogen — primair blijft de hero-foto + headline.

5. **Kleurpalette afstemmen op logo** (`src/index.css`)
   - Nieuwe primaire merkkleur: het donkergroen uit het logo (~`hsl(170 20% 22%)`), met de bestaande sage als secundair accent.
   - Footer + eventuele donkere secties krijgen deze nieuwe brand-dark als achtergrond, met de logo-cream als tekst.
   - Body/cards blijven licht en rustig (huidige sand/cream tinten).

6. **Browser-tab branding**
   - `index.html`: favicon en og:image vervangen door het donkere logo (op witte achtergrond werkt het op alle tabs).
   - Site-titel update naar "Stap Vooruit pmt — Cato Smit | Psychomotorische Therapie Hengelo".

### Technische details

- JPG-bestanden worden via `code--copy` naar `src/assets/` geplaatst en met ES6 imports gebruikt (`import logoLight from "@/assets/logo-light.jpg"`).
- De JPG's hebben een achtergrondkleur ingebakken (donkergroen / wit) — dat is prima omdat ze op exact bijpassende secties geplaatst worden. Mocht je later een transparante PNG/SVG hebben, dan kunnen we die makkelijk inruilen.
- Geen nieuwe dependencies nodig.

### Open vraag

De praktijk heet dus **"Stap Vooruit pmt"**? Op dit moment staat overal nog "Cato Smit PMT". Wil je dat ik **alle teksten** (navbar, footer-titel, meta-tags, hero, over-mij) aanpas naar "Stap Vooruit pmt" als praktijknaam (met Cato Smit als therapeut-naam op Over Mij), of moet "Cato Smit PMT" als merknaam blijven staan en het logo puur als beeldmerk fungeren? Ik ga er in de implementatie van uit dat **"Stap Vooruit pmt" de praktijknaam is** — laat het weten als dat anders moet.
