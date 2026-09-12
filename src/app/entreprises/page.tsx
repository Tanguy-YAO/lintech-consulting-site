import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formations en entreprise — LinTech Consulting",
  description:
    "Formations sur-mesure en Data, BI et Analytics pour vos équipes : audit de compétences, programme adapté, formation intra-entreprise.",
};

const etapes = [
  {
    titre: "1. Échange de cadrage",
    description:
      "On discute de vos objectifs, du niveau de vos équipes et des outils déjà en place.",
  },
  {
    titre: "2. Programme sur-mesure",
    description:
      "Un programme et un devis adaptés à votre contexte (Power BI, Excel, Data Engineering...).",
  },
  {
    titre: "3. Formation intra-entreprise",
    description:
      "En présentiel dans vos locaux à Abidjan, ou à distance, avec des cas pratiques issus de votre métier.",
  },
  {
    titre: "4. Suivi post-formation",
    description:
      "Un point de suivi pour s'assurer que les compétences sont bien mises en pratique.",
  },
];

export default function EntreprisesPage() {
  return (
    <div>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-3xl font-bold md:text-4xl">
            Formations sur-mesure pour vos équipes
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Vos équipes utilisent déjà Excel, Power BI ou manipulent des
            données au quotidien ? LinTech Consulting conçoit un programme
            adapté à votre secteur et à votre niveau de maturité data.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            Demander un devis entreprise
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">Comment ça se passe</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {etapes.map((e) => (
            <div key={e.titre} className="rounded-2xl border border-black/10 p-6">
              <h3 className="font-semibold text-navy">{e.titre}</h3>
              <p className="mt-2 text-sm text-foreground/70">{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/[.02] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-navy">
            Pourquoi choisir LinTech Consulting
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              Un formateur BI Manager en activité, qui connaît les enjeux
              réels des équipes data en entreprise.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              Une spécialisation rare en Data Engineering &amp; Analytics
              Engineering, au-delà du reporting classique.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              Des formations ancrées dans le contexte de la Côte d&apos;Ivoire
              et de l&apos;Afrique de l&apos;Ouest.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
