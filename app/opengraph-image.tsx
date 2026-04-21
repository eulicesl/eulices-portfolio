import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eulices Lopez — Founding Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 80px 60px",
          background:
            "radial-gradient(ellipse at top right, #1a1208 0%, #0a0907 55%)",
          color: "#f2ede3",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.14em",
            color: "#d97757",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Founding Engineer · Forward Deployed
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              fontWeight: 500,
              maxWidth: 1040,
            }}
          >
            <span>I find the problem,</span>
            <span style={{ color: "#d97757", fontStyle: "italic", fontWeight: 600 }}>
              ship the product,
            </span>
            <span>and own it in production.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#958d7e",
              maxWidth: 940,
              lineHeight: 1.35,
            }}
          >
            AI scribe at Graham Dermatology — featured case study on Omi.
            6 products shipped · 2,200+ users.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#958d7e",
            borderTop: "1px solid #26211a",
            paddingTop: 28,
          }}
        >
          <div style={{ color: "#f2ede3", fontWeight: 600, letterSpacing: "-0.01em" }}>
            Eulices Lopez
          </div>
          <div style={{ fontFamily: "ui-monospace, SFMono-Regular, monospace", fontSize: 18 }}>
            eulices-portfolio.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
