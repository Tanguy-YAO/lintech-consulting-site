import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formations, formatFCFA, getFormationBySlug } from "@/lib/formations";

export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
  if (!formation) return {};
  return {
    title: `${formation.titre} | LinTech Consulting`,
    description: formation.accroche,
  };
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
  if (!formation) notFound();

  return (
    <div>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
            {formation.niveau}
          </span>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">{formation.titre}</h1>
          <p className="mt-4 max-w-2xl text-white/85">{formation.accroche}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
            <span className="rounded-full bg-white/10 px-4 py-1.5">
              ⏱ {formation.duree}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1.5">
              📍 {formation.format}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-4xl gap-12 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-navy">Objectifs de la formation</h2>
          <ul className="mt-4 space-y-2">
            {formation.objectifs.map((o) => (
              <li key={o} className="flex gap-2 text-sm text-foreground/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                {o}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-bold text-navy">Programme</h2>
          <div className="mt-4 space-y-6">
            {formation.programme.map((module) => (
              <div key={module.titre}>
                <h3 className="font-semibold text-foreground">{module.titre}</h3>
                <ul className="mt-2 space-y-1.5">
                  {module.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-foreground/70">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-bold text-navy">Public cible</h2>
          <ul className="mt-4 space-y-2">
            {formation.publicCible.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-foreground/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                {p}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-bold text-navy">Prérequis</h2>
          <p className="mt-4 text-sm text-foreground/80">{formation.prerequis}</p>

          {formation.pole === "data-engineering" && (
            <div className="mt-10 rounded-2xl bg-black/[.03] p-6 text-sm text-foreground/70">
              <p className="font-medium text-foreground">
                Vous voulez aller plus loin, jusqu&apos;à une infrastructure
                en production ?
              </p>
              <p className="mt-1">
                Cette formation pose les fondamentaux. Pour la mise en place
                complète d&apos;une infrastructure BI dans votre entreprise
                (ingestion, data lake, stockage, hébergement, restitution),
                découvrez notre{" "}
                <Link href="/conseil-bi" className="font-medium text-navy underline">
                  service de Conseil &amp; Infrastructure BI
                </Link>
                .
              </p>
            </div>
          )}
        </div>

        <aside className="h-fit rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:sticky md:top-24">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            Tarif individuel
          </p>
          <p className="mt-1 text-lg font-semibold text-navy">
            {formatFCFA(formation.tarifIndividuel)}
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-foreground/50">
            Tarif groupe / entreprise
          </p>
          <p className="mt-1 text-lg font-semibold text-navy">
            {formatFCFA(formation.tarifGroupe)}
          </p>
          <p className="mt-1 text-xs text-foreground/60">
            Forfait pour un groupe (jusqu&apos;à ~10 personnes). Devis
            personnalisé au-delà.
          </p>

          <Link
            href={`/contact?formation=${formation.slug}`}
            className="mt-6 block rounded-full bg-red px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            S&apos;inscrire / demander un devis
          </Link>
          <Link
            href="/formations"
            className="mt-3 block text-center text-sm font-medium text-navy hover:underline"
          >
            ← Retour au catalogue
          </Link>
        </aside>
      </div>
    </div>
  );
}
