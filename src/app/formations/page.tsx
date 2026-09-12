import type { Metadata } from "next";
import { getFormationsByPole, poles } from "@/lib/formations";
import CourseCard from "@/components/CourseCard";

export const metadata: Metadata = {
  title: "Catalogue de formations | LinTech Consulting",
  description:
    "Power BI, Excel, Google Sheets, Data Analytics, Data Engineering & Analytics Engineering : découvrez toutes nos formations.",
};

export default function FormationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-navy md:text-4xl">
          Catalogue de formations
        </h1>
        <p className="mt-4 text-foreground/70">
          Des formations pratiques en Data, BI et Analytics, animées par un
          réseau de formateurs professionnels. Formats individuels ou pour
          votre équipe.
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {poles.map((pole) => {
          const items = getFormationsByPole(pole.id);
          if (items.length === 0) return null;
          return (
            <section key={pole.id} id={pole.id} className="scroll-mt-24">
              <h2 className="text-xl font-bold text-navy">{pole.nom}</h2>
              <p className="mt-1 text-sm text-foreground/70">{pole.description}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((f) => (
                  <CourseCard key={f.slug} formation={f} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
