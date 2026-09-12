import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — LinTech Consulting",
  description:
    "LinTech Consulting, formations en Data, BI et Analytics animées par un BI Manager spécialisé en Data Engineering & Analytics Engineering.",
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
          Les formations sont animées par un <strong>formateur autodidacte</strong>,
          entré dans la data par passion plutôt que par un parcours
          académique classique — et c&apos;est cette même approche pratique,
          orientée résultats, qui structure chaque formation LinTech
          Consulting.
        </p>
        <p>
          Il dirige aujourd&apos;hui la <strong>BI/Data de deux filiales du
          groupe EDF en Côte d&apos;Ivoire</strong>, TEVIA Énergie et Greeno,
          avec une spécialisation en Data Engineering et Analytics
          Engineering — la construction de pipelines de données fiables et de
          modèles analytiques prêts pour la décision, au-delà des simples
          tableaux de bord.
        </p>
        <p>
          De nombreux professionnels le sollicitent déjà de manière
          informelle pour de l&apos;accompagnement en Excel, Power BI et
          Data. Ce site formalise cette expertise en un catalogue de
          formations structuré, pour les particuliers comme pour les
          entreprises.
        </p>
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
