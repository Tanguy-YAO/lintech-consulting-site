import Link from "next/link";
import { formations, poles } from "@/lib/formations";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  const featured = formations.filter((f) =>
    ["data-engineering-analytics-engineering", "power-bi-fondamentaux", "data-analytics-sql-python"].includes(
      f.slug
    )
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90">
            Formations Data · BI · Analytics
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            Transformez vos données en décisions, avec un expert BI &amp; Data
            Engineering.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            LinTech Consulting forme particuliers et entreprises en Power BI,
            Excel, Google Sheets, Data Analytics et Data Engineering &amp;
            Analytics Engineering — en Côte d&apos;Ivoire et en Afrique de
            l&apos;Ouest.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/formations"
              className="rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
            >
              Voir les formations
            </Link>
            <Link
              href="/entreprises"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Formations en entreprise
            </Link>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-navy">
              Un expert, pas un généraliste
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Formateur BI Manager en activité, avec une spécialisation rare en
              Data Engineering &amp; Analytics Engineering — au-delà des
              tableaux de bord.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy">
              Pensé pour l&apos;Afrique de l&apos;Ouest
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Des formations en présentiel à Abidjan ou à distance, adaptées
              aux réalités et outils utilisés par les entreprises locales.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy">
              Particuliers &amp; entreprises
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Un parcours pour monter en compétences individuellement, et des
              formations sur-mesure pour les équipes.
            </p>
          </div>
        </div>
      </section>

      {/* Pôles de formation */}
      <section className="bg-black/[.02] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-navy">Nos pôles de formation</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {poles.map((p) => (
              <Link
                key={p.id}
                href={`/formations#${p.id}`}
                className="rounded-2xl border border-black/10 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="font-semibold text-navy">{p.nom}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-navy">Formations populaires</h2>
          <Link href="/formations" className="text-sm font-semibold text-red hover:underline">
            Tout le catalogue →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((f) => (
            <CourseCard key={f.slug} formation={f} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-red px-8 py-12 text-center text-white md:px-16">
          <h2 className="text-2xl font-bold md:text-3xl">
            Une question, un projet de formation ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Discutons de vos objectifs et du format le plus adapté — individuel
            ou pour toute votre équipe.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-red transition-colors hover:bg-white/90"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
