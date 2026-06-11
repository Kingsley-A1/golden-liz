import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Golden Liz | Boutique Cosmetics & Jewellery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fdf8f0 0%, #f4e8cc 45%, #eeddd5 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Subtle corner accents */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 120, height: 3, background: "#C9A227" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: 120, background: "#C9A227" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 120, height: 3, background: "#C9A227" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 3, height: 120, background: "#C9A227" }} />

        {/* GL logo mark */}
        <div
          style={{
            width: 90,
            height: 90,
            background: "#231711",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
            boxShadow: "0 8px 32px rgba(35,23,17,0.25)",
          }}
        >
          <span style={{ color: "#C9A227", fontSize: 34, fontWeight: 700, fontFamily: "Georgia, serif" }}>
            GL
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#231711",
            letterSpacing: -3,
            fontFamily: "Georgia, serif",
            marginBottom: 14,
            lineHeight: 1,
          }}
        >
          Golden Liz
        </div>

        {/* Gold divider */}
        <div style={{ width: 80, height: 2, background: "#C9A227", marginBottom: 22, borderRadius: 2 }} />

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#8C6510",
            letterSpacing: 5,
            textTransform: "uppercase",
            fontFamily: "Georgia, serif",
            marginBottom: 28,
          }}
        >
          Boutique Cosmetics &amp; Jewellery
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 18,
            color: "#3a2a1f",
            textAlign: "center",
            maxWidth: 640,
            lineHeight: 1.7,
            fontFamily: "Georgia, serif",
            opacity: 0.75,
          }}
        >
          Curated cosmetics, skincare, fragrance &amp; jewellery — crafted for women who move with intention.
        </div>

        {/* URL badge */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(35,23,17,0.08)",
            borderRadius: 100,
            padding: "8px 20px",
          }}
        >
          <span style={{ fontSize: 15, color: "#8C6510", fontFamily: "Georgia, serif", letterSpacing: 1 }}>
            golden-liz.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
