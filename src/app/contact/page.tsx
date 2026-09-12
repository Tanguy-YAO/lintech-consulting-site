import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Inscription — LinTech Consulting",
  description:
    "Contactez LinTech Consulting pour vous inscrire à une formation ou demander un devis pour votre entreprise.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">
        Contact &amp; inscription
      </h1>
      <p className="mt-4 text-foreground/70">
        Une question sur une formation, un devis pour votre entreprise, ou
        envie de vous inscrire ? Remplissez le formulaire ci-dessous, nous
        revenons vers vous rapidement.
      </p>

      <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>

      <div className="mt-8 rounded-2xl bg-black/[.03] p-6 text-sm text-foreground/70">
        <p className="font-medium text-foreground">Paiement</p>
        <p className="mt-1">
          Le règlement des formations se fait par Mobile Money (Orange Money,
          MTN Money, Wave) ou par carte bancaire. Les modalités de paiement
          exactes vous seront communiquées avec votre devis.
        </p>
      </div>
    </div>
  );
}
