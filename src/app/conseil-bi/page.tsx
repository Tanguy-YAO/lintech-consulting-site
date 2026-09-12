import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conseil & Infrastructure BI | LinTech Consulting",
  description:
    "Mise en place d'infrastructures Business Intelligence de bout en bout : ingestion des données, data lake, stockage, hébergement et tableaux de bord.",
};

const etapes = [
  {
    titre: "1. Ingestion",
    description:
      "Connexion aux sources existantes : API, fichiers CSV/Excel, bases de données déjà en place.",
  },
  {
    titre: "2. Structuration des données",
    description:
      "Mise en place d'un data lake en architecture médaillon (Python) : des données brutes à des données prêtes pour l'analyse, par couches successives.",
  },
  {
    titre: "3. Stockage",
    description:
      "Un socle de stockage ouvert et maîtrisé : par exemple MinIO pour les fichiers et PostgreSQL pour les données structurées, adapté à votre contexte.",
  },
  {
    titre: "4. Hébergement",
    description:
      "Déploiement sur une infrastructure fiable et gérée au quotidien (par exemple Railway), ou sur votre infrastructure existante.",
  },
  {
    titre: "5. Restitution",
    description:
      "Tableaux de bord et rapports avec l'outil le plus adapté (Metabase, Power BI ou autre), selon les outils déjà utilisés par vos équipes.",
  },
  {
    titre: "6. Formation & transfert",
    description:
      "Vos équipes sont formées à utiliser le système et à le faire évoluer, sans dépendre d'un prestataire externe.",
  },
];

export default function ConseilBIPage() {
  return (
    <div>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90">
            Conseil & Infrastructure BI
          </span>
          <h1 className="mt-6 max-w-2xl text-3xl font-bold md:text-4xl">
            Une infrastructure BI complète, du fichier brut au tableau de
            bord.
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Beaucoup d&apos;entreprises accumulent des données dans des
            fichiers CSV, des API ou des tableurs épars, sans système fiable
            pour les collecter, les stocker et les restituer. LinTech
            Consulting conçoit et met en place cette infrastructure pour
            vous, avec une approche déjà éprouvée en environnement
            professionnel.
          </p>
          <Link
            href="/contact?formation=conseil-bi"
            className="mt-6 inline-block rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            Demander un audit
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-navy">Notre méthode</h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground/70">
          Les outils mentionnés ci-dessous illustrent une architecture déjà
          mise en œuvre avec succès. Le choix technique final dépend
          toujours de votre contexte : outils déjà en place, contraintes de
          coût, de sécurité ou d&apos;hébergement.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            Pour quel type d&apos;entreprise ?
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              Des entreprises dont les données sont dispersées entre
              plusieurs outils et fichiers, sans vision consolidée.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              Des équipes qui veulent un socle de données solide, avant
              d&apos;investir dans des tableaux de bord.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              Des organisations qui préfèrent une infrastructure ouverte et
              maîtrisée plutôt qu&apos;une dépendance à un outil propriétaire
              coûteux.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm text-foreground/70">
            Chaque projet est différent : le périmètre, les volumes de
            données et les outils déjà en place varient d&apos;une entreprise
            à l&apos;autre. Cette prestation est donc réalisée sur devis,
            après un premier échange pour cadrer vos besoins.
          </p>
          <Link
            href="/contact?formation=conseil-bi"
            className="mt-6 inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Échanger sur votre projet
          </Link>
        </div>
      </section>
    </div>
  );
}
