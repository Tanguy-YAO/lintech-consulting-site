import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos | LinTech Consulting",
  description:
    "LinTech Consulting, cabinet de formation en Data, BI et Analytics, dirigé par Tanguy Boris Romuald YAO et son réseau de formateurs professionnels.",
};

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">À propos de LinTech Consulting</h1>

      <div className="mt-8 space-y-5 text-foreground/80">
        <p>
          LinTech Consulting accompagne particuliers et entreprises en Côte
          d&apos;Ivoire et en Afrique de l&apos;Ouest dans la maîtrise de la
          donnée : Excel, Google Sheets, Power BI, Data Analytics et Data
          Engineering &amp; Analytics Engineering.
        </p>
        <p>
          Chaque formation est animée par un <strong>formateur professionnel
          sélectionné pour son expertise</strong> sur le sujet concerné, pour
          garantir un contenu à jour et directement applicable, quelle que
          soit la thématique.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
        <span className="text-xs font-semibold uppercase tracking-wide text-red">
          Fondateur &amp; Gérant
        </span>
        <h2 className="mt-2 text-xl font-bold text-navy">
          Tanguy Boris Romuald YAO
        </h2>
        <div className="mt-4 space-y-4 text-sm text-foreground/80">
          <p>
            Tanguy est arrivé à la donnée par un chemin peu classique. Après
            un parcours initial en linguistique, puis plusieurs années à
            diriger des opérations terrain et service client à l&apos;échelle
            nationale pour une entreprise panafricaine, il s&apos;est formé
            en autodidacte à la Business Intelligence, par passion.
          </p>
          <p>
            Il occupe aujourd&apos;hui un poste de <strong>BI Manager au sein
            d&apos;un grand groupe international de l&apos;énergie</strong> en
            Côte d&apos;Ivoire, où il a également développé une expertise en{" "}
            <strong>Data Engineering et Analytics Engineering</strong> : la
            construction de pipelines de données fiables et de modèles
            analytiques prêts pour la décision, au-delà des tableaux de bord.
          </p>
          <p>
            En tant que gérant de LinTech Consulting, il sélectionne et
            encadre le réseau de formateurs professionnels du cabinet, et
            veille personnellement à la qualité pédagogique de chaque
            formation.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-navy p-6 text-center text-white">
        <p className="font-medium">Envie d&apos;échanger sur vos besoins en formation ?</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-red px-6 py-3 text-sm font-semibold transition-colors hover:bg-red-dark"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  );
}
