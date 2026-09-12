import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | LinTech Consulting",
  description:
    "Articles et ressources gratuites sur Power BI, Excel, Data Analytics et Data Engineering.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">Blog &amp; ressources</h1>
      <p className="mx-auto mt-4 max-w-xl text-foreground/70">
        Bientôt disponible : des articles et ressources gratuites sur Power
        BI, Excel, Data Analytics et Data Engineering, pour progresser entre
        deux formations.
      </p>
      <div className="mt-10 rounded-2xl border border-dashed border-black/20 bg-black/[.02] p-10 text-sm text-foreground/50">
        Premiers articles à venir.
      </div>
    </div>
  );
}
