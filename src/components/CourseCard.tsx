import Link from "next/link";
import type { Formation } from "@/lib/formations";

export default function CourseCard({ formation }: { formation: Formation }) {
  return (
    <Link
      href={`/formations/${formation.slug}`}
      className="group flex flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-red">
        {formation.niveau}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-navy group-hover:text-navy-dark">
        {formation.titre}
      </h3>
      <p className="mt-2 flex-1 text-sm text-foreground/70">{formation.accroche}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-foreground/60">
        <span>{formation.duree}</span>
        <span className="font-medium text-navy group-hover:underline">
          Voir le programme →
        </span>
      </div>
    </Link>
  );
}
