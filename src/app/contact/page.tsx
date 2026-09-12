import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/contact";

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

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          WhatsApp — {WHATSAPP_DISPLAY}
        </a>
        <a
          href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-black/5"
        >
          Appeler — {PHONE_DISPLAY}
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-black/5"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

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
