import Image from "next/image";
import Link from "next/link";
import { poles } from "@/lib/formations";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <Image
            src="/logo.jpg"
            alt="LinTech Consulting"
            width={160}
            height={56}
            className="h-10 w-auto rounded bg-white p-1"
          />
          <p className="mt-4 text-sm text-white/70">
            Formations en Data, BI et Analytics, pensées pour la Côte d&apos;Ivoire
            et l&apos;Afrique de l&apos;Ouest.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Formations
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {poles.map((p) => (
              <li key={p.id}>
                <Link href={`/formations#${p.id}`} className="text-white/80 hover:text-white">
                  {p.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            LinTech Consulting
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/entreprises" className="text-white/80 hover:text-white">
                Entreprises
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="text-white/80 hover:text-white">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white/80 hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Abidjan, Côte d&apos;Ivoire</li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Formulaire de contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} LinTech Consulting. Tous droits réservés.
      </div>
    </footer>
  );
}
