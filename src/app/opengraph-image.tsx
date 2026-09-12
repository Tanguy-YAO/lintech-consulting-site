import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoPath = path.join(process.cwd(), "public", "logo-og.png");
  const logoBase64 = fs.readFileSync(logoPath).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#094B99",
        }}
      >
        <img
          src={logoSrc}
          width={480}
          height={286}
          style={{
            objectFit: "contain",
            borderRadius: 16,
            background: "white",
            padding: "20px 36px",
          }}
        />
        <div
          style={{
            marginTop: 44,
            fontSize: 42,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
          }}
        >
          Formations Data, BI & Analytics
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 26,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Côte d&apos;Ivoire · Afrique de l&apos;Ouest
        </div>
      </div>
    ),
    { ...size }
  );
}
