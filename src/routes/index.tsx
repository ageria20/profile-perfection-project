import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  GraduationCap,
  HandHeart,
  Instagram,
  Mail,
  MapPin,

  Phone,
  Quote,
  Sparkles,
} from "lucide-react";

import logoAsset from "@/assets/logo-emblema.png.asset.json";
import portraitAsset from "@/assets/luca.jpg.asset.json";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dr. Luca Postorino — Osteopata e Chinesiologo a Reggio Calabria" },
      {
        name: "description",
        content:
          "Osteopatia, chinesiologia e riabilitazione motoria a Reggio Calabria. Trattamenti manuali personalizzati con il Dr. Luca Postorino.",
      },
      {
        property: "og:title",
        content: "Dr. Luca Postorino — Osteopata e Chinesiologo a Reggio Calabria",
      },
      {
        property: "og:description",
        content:
          "Trattamenti osteopatici e percorsi di riabilitazione motoria su misura.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: CONTACT.name,
          description:
            "Osteopata e chinesiologo a Reggio Calabria. Trattamenti manuali e riabilitazione motoria personalizzata.",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Nazionale Gallico, 89",
            addressLocality: "Reggio Calabria",
            addressCountry: "IT",
          },
          sameAs: [CONTACT.instagram],
        }),
      },
    ],
  }),
});

const NAV = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#servizi", label: "Servizi" },
  { href: "#percorso", label: "Come lavoro" },
  { href: "#testimonianze", label: "Testimonianze" },
  { href: "#contatti", label: "Contatti" },
];

const SERVIZI = [
  {
    icon: HandHeart,
    title: "Osteopatia",
    text: "Trattamento manuale per ristabilire l'equilibrio di muscoli, articolazioni e tessuti.",
    points: [
      "Dolore cervicale e lombare",
      "Rigidità e limitazioni articolari",
      "Tensioni da postura di lavoro",
      "Approccio manuale, senza farmaci",
    ],
  },
  {
    icon: Activity,
    title: "Chinesiologia",
    text: "Analisi e rieducazione del movimento per prevenire infortuni e muoversi meglio ogni giorno.",
    points: [
      "Correzione di schemi motori scorretti",
      "Prevenzione degli infortuni sportivi",
      "Recupero della forza e del controllo",
      "Programmi di esercizio su misura",
    ],
  },
  {
    icon: Sparkles,
    title: "Percorso integrato",
    text: "Osteopatia e movimento combinati in un unico percorso su misura.",
    points: [
      "Valutazione posturale completa",
      "Piano di trattamento personalizzato",
      "Massaggio decontratturante e svedese",
      "Rieducazione posturale nel tempo",
    ],
  },
];

const PERCORSO = [
  {
    step: "01",
    title: "Valutazione",
    text: "Ascolto la tua storia clinica e valuto postura, movimento e punti di tensione.",
  },
  {
    step: "02",
    title: "Trattamento",
    text: "Lavoro manuale mirato, calibrato sul tuo corpo e sulla tua tolleranza al dolore.",
  },
  {
    step: "03",
    title: "Autonomia",
    text: "Ti lascio esercizi e indicazioni pratiche per mantenere i risultati nel tempo.",
  },
];

const FORMAZIONE = [
  "Laurea in Scienze Motorie — Università di Messina, 2021",
  "Master in trattamento delle lesioni e in riabilitazione sportiva, 2021",
  "Diploma in Osteopatia, 2024",
  "Laurea magistrale in Scienze e Tecniche delle Attività Motorie Preventive e Adattate (in corso)",
  "Certificazioni in massaggio svedese e decontratturante",
];

const ESPERIENZA = [
  {
    anni: "2020 — 2021",
    testo: "Palestra: programmi di allenamento personalizzati per utenti di ogni livello.",
  },
  {
    anni: "2021 — 2022",
    testo:
      "Centro di Fisiokinesiterapia Crupi: disturbi posturali, recupero motorio negli anziani, pazienti neurologici con emiparesi e Parkinson.",
  },
  {
    anni: "dal 2022",
    testo: "Attività professionale nel mio studio a Reggio Calabria.",
  },
];

const TESTIMONIANZE = [
  {
    nome: "Andrea",
    dettaglio: "30 anni • Osteopatia",
    testo:
      "Dopo mesi di dolore alla schiena ho finalmente trovato sollievo. L'approccio è professionale e mi ha permesso di tornare alle mie attività quotidiane senza dolore.",
  },
  {
    nome: "Samuel",
    dettaglio: "28 anni • Chinesiologia",
    testo:
      "Come atleta avevo problemi ricorrenti. Il programma personalizzato ha migliorato le mie performance e prevenuto gli infortuni. Consigliatissimo.",
  },
  {
    nome: "Giovanna",
    dettaglio: "32 anni • Percorso integrato",
    testo:
      "Non ho solo risolto i miei problemi posturali: ho imparato a conoscere il mio corpo e a prendermene cura ogni giorno.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container-page flex items-center justify-between gap-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Dr. Luca Postorino, osteopata e chinesiologo"
              className="h-16 w-auto object-contain mix-blend-multiply md:h-20"
              width={80}
              height={80}
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-lg font-semibold text-deep md:text-xl">
                Dr. Luca Postorino
              </span>
              <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Osteopata · Chinesiologo
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 md:px-5"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Scrivimi una mail</span>
            <span className="sm:hidden">Email</span>
          </a>

        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden bg-sand">
          <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow">Reggio Calabria</p>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] text-deep sm:text-5xl lg:text-6xl">
                Luca Postorino
              </h1>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Osteopata · Chinesiologo
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Sono Luca Postorino, osteopata e chinesiologo. Lavoro con le mani e con il
                movimento per ridurre il dolore, migliorare la postura e restituirti fiducia nel
                tuo corpo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Prenota una valutazione
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#servizi"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-semibold text-deep transition-colors hover:bg-secondary"
                >
                  Scopri i trattamenti
                </a>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Diploma
                  </dt>
                  <dd className="font-display text-2xl text-deep">Osteopatia, 2024</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Laurea
                  </dt>
                  <dd className="font-display text-2xl text-deep">Scienze Motorie</dd>
                </div>
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/25" aria-hidden="true" />
              <img
                src={portraitAsset.url}
                alt="Dr. Luca Postorino, osteopata e chinesiologo, nel suo studio a Reggio Calabria"
                className="relative w-full rounded-[2rem] object-cover shadow-lift"
                width={1067}
                height={1477}
              />
            </div>
          </div>
        </section>

        {/* CHI SONO */}
        <section id="chi-sono" className="scroll-mt-28 py-20 md:py-28">
          <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Chi sono</p>
              <h2 className="mt-4 font-display text-3xl text-deep sm:text-4xl">
                Un percorso costruito sul movimento delle persone
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Ho 30 anni e lavoro con chi ha dolore, rigidità o vuole tornare a
                muoversi bene. Sono partito dalle Scienze Motorie, sono passato dalla
                riabilitazione in centro fisioterapico e sono arrivato all'osteopatia: oggi metto
                insieme le due cose in un unico percorso.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Ho seguito giovani con disturbi posturali, anziani in recupero motorio, pazienti
                neurologici con emiparesi o Parkinson e sportivi con infortuni ricorrenti. Da
                questo nasce il mio metodo: valutare la persona intera, non solo il punto che fa
                male.
              </p>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <Instagram className="h-4 w-4" />
                Seguimi su Instagram {CONTACT.instagramHandle}
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-xl text-deep">Formazione</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {FORMAZIONE.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <Activity className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-xl text-deep">Esperienza</h3>
                <ul className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {ESPERIENZA.map((e) => (
                    <li key={e.anni}>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-primary">
                        {e.anni}
                      </span>
                      {e.testo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIZI */}
        <section id="servizi" className="scroll-mt-28 bg-sand py-20 md:py-28">
          <div className="container-page">
            <p className="eyebrow">Servizi</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-deep sm:text-4xl">
              Tre modi di lavorare sul tuo corpo
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {SERVIZI.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-deep">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm text-muted-foreground">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PERCORSO */}
        <section id="percorso" className="scroll-mt-28 py-20 md:py-28">
          <div className="container-page">
            <p className="eyebrow">Come lavoro</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-deep sm:text-4xl">
              Cosa succede dalla prima seduta
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {PERCORSO.map((p) => (
                <div key={p.step} className="rounded-3xl bg-secondary/60 p-8">
                  <span className="font-display text-4xl text-primary/40">{p.step}</span>
                  <h3 className="mt-4 font-display text-xl text-deep">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIANZE */}
        <section id="testimonianze" className="scroll-mt-28 bg-sand py-20 md:py-28">
          <div className="container-page">
            <p className="eyebrow">Testimonianze</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-deep sm:text-4xl">
              Le parole di chi si è affidato a me
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIANZE.map((t) => (
                <figure
                  key={t.nome}
                  className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft"
                >
                  <Quote className="h-6 w-6 text-accent" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t.testo}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <span className="block font-display text-lg text-deep">{t.nome}</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t.dettaglio}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="scroll-mt-28 py-20 md:py-28">
          <div className="container-page grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Contatti</p>
              <h2 className="mt-4 font-display text-3xl text-deep sm:text-4xl">
                Contattami
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                Scrivimi una mail descrivendo cosa senti e da quanto tempo: ti rispondo io e
                fissiamo insieme la prima valutazione in studio.
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Scrivimi una mail
              </a>

            </div>

            <ul className="grid gap-4">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
                >
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                      Telefono
                    </span>
                    <span className="font-medium text-deep">{CONTACT.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                      Email
                    </span>
                    <span className="font-medium break-all text-deep">{CONTACT.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
                >
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                      Studio
                    </span>
                    <span className="font-medium text-deep">{CONTACT.address}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
                >
                  <Instagram className="mt-0.5 h-5 w-5 text-primary" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                      Instagram
                    </span>
                    <span className="font-medium text-deep">{CONTACT.instagramHandle}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-sand py-10">
        <div className="container-page flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt=""
              aria-hidden="true"
              className="h-12 w-auto object-contain mix-blend-multiply"
              width={48}
              height={48}
            />
            <span className="text-sm text-muted-foreground">
              {CONTACT.name} · {CONTACT.role}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {CONTACT.name} — Reggio Calabria
          </p>
        </div>
      </footer>
    </div>
  );
}
