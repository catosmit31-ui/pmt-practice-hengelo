## Probleem

De site staat live op `www.stapvooruitpmt.nl` (via de `CNAME` in de repo — GitHub Pages of vergelijkbare hosting). Alle afbeeldingen en logo's verwijzen momenteel naar Lovable's CDN (`/__l5e/assets-v1/...`). Die URL's werken alleen op Lovable-hosting, niet op je eigen domein — vandaar de vraagtekens/kapotte afbeeldingen op de live site.

In `public/` staat momenteel alleen `fotos-PMTstapvooruit-2026-5.jpg`. De overige afbeeldingen en logo's moeten ook lokaal in `public/` komen te staan zodat ze meegebouwd en gepubliceerd worden.

## Plan

1. **Download de 7 bestanden van de Lovable CDN** en plaats ze in `public/images/` met duidelijke namen:
   - `cato-portret.jpg` (portretfoto)
   - `materialen.jpg` (materialen-achtergrond)
   - `runningtherapie.jpg` (running)
   - `logo-donker.png` (navbar-logo)
   - `logo-licht.png` (footer-logo)
   - `vaktherapie-nederland.png` (federatie-logo)

2. **Code aanpassen** zodat afbeeldingen via een gewone string-pad worden geladen in plaats van via `.asset.json`-imports:
   - `src/components/Navbar.tsx` → `src="/images/logo-donker.png"`
   - `src/components/Footer.tsx` → `src="/images/logo-licht.png"` en `src="/images/vaktherapie-nederland.png"`
   - `src/pages/Index.tsx` → `src="/images/cato-portret.jpg"`
   - `src/pages/OverMij.tsx` → `src="/images/cato-portret.jpg"`
   - `src/pages/Behandelingen.tsx` → `src="/images/materialen.jpg"` en `src="/images/runningtherapie.jpg"`

3. **Bestaande foto hergebruiken?** In `public/` staat al `fotos-PMTstapvooruit-2026-5.jpg`. Wil je dat ik die ergens specifiek gebruik (bijv. als hero/over-mij), of laten staan en gewoon de portretfoto blijven gebruiken? Standaard: laat staan, niets veranderen aan deze.

4. **Opruimen:** de `.asset.json`-pointers in `src/assets/` worden niet meer gebruikt en kunnen verwijderd worden zodat alleen lokale paden overblijven.

5. **Build verifiëren** (`bun run build`) om te bevestigen dat alle imports nog kloppen.

## Resultaat

Na deze wijziging staan alle afbeeldingen in `public/images/` (in de repo, zichtbaar in GitHub) en worden ze geserveerd vanaf je eigen domein — dus ze werken zowel in de Lovable preview als op `stapvooruitpmt.nl`.
