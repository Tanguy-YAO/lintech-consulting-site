"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { formations } from "@/lib/formations";
import { CONTACT_EMAIL } from "@/lib/contact";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("formation") ?? "";

  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nom = data.get("nom");
    const email = data.get("email");
    const telephone = data.get("telephone");
    const formation = data.get("formation");
    const message = data.get("message");

    const subject = `Demande de formation : ${formation || "Renseignement général"}`;
    const body = [
      `Nom : ${nom}`,
      `Email : ${email}`,
      `Téléphone : ${telephone}`,
      `Formation concernée : ${formation}`,
      "",
      "Message :",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="text-sm font-medium text-foreground">
            Nom complet
          </label>
          <input
            id="nom"
            name="nom"
            required
            className="mt-1.5 w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-navy"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-navy"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telephone" className="text-sm font-medium text-foreground">
            Téléphone / WhatsApp
          </label>
          <input
            id="telephone"
            name="telephone"
            className="mt-1.5 w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-navy"
          />
        </div>
        <div>
          <label htmlFor="formation" className="text-sm font-medium text-foreground">
            Formation concernée
          </label>
          <select
            id="formation"
            name="formation"
            defaultValue={preselected}
            className="mt-1.5 w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-navy"
          >
            <option value="">Renseignement général</option>
            {formations.map((f) => (
              <option key={f.slug} value={f.slug}>
                {f.titre}
              </option>
            ))}
            <option value="formation-entreprise">Formation sur-mesure entreprise</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-navy"
          placeholder="Parlez-nous de votre besoin, du nombre de participants, du format souhaité..."
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
      >
        Envoyer la demande
      </button>

      {status === "sent" && (
        <p className="text-sm text-navy">
          Votre client de messagerie va s&apos;ouvrir pour finaliser l&apos;envoi.
          Vous pouvez aussi nous écrire directement à{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
