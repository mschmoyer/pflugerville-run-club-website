import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pflugerville Running Club";

const oswaldBuffer = fs.readFileSync(
  path.join(process.cwd(), "app/_assets/Oswald-Bold.ttf")
);
const interBuffer = fs.readFileSync(
  path.join(process.cwd(), "app/_assets/Inter-Regular.ttf")
);
const logo = fs.readFileSync(
  path.join(process.cwd(), "public/club-logo-256.png")
);
const logoSrc = "data:image/png;base64," + logo.toString("base64");

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: "#0A0A0A",
          position: "relative",
        }}
      >
        {/* Radial orange glow */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
            background:
              "radial-gradient(circle at 20% 50%, rgba(255,85,0,0.25) 0%, transparent 60%)",
          }}
        />

        {/* Content row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "80px",
            gap: "60px",
            width: "1200px",
            height: "630px",
          }}
        >
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={200}
            height={200}
            style={{ borderRadius: "16px" }}
            alt="Club logo"
          />

          {/* Right: text column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* Brand name line 1 */}
            <div
              style={{
                display: "flex",
                fontFamily: "Oswald",
                fontSize: 72,
                fontWeight: 700,
                color: "#F5F5F5",
                lineHeight: 1,
              }}
            >
              PFLUGERVILLE
            </div>

            {/* Brand name line 2 */}
            <div
              style={{
                display: "flex",
                fontFamily: "Oswald",
                fontSize: 72,
                fontWeight: 700,
                color: "#F5F5F5",
                lineHeight: 1,
              }}
            >
              RUNNING CLUB
            </div>

            {/* Accent divider */}
            <div
              style={{
                display: "flex",
                width: "60px",
                height: "4px",
                background: "#FF5500",
                margin: "8px 0",
              }}
            />

            {/* Subtitle */}
            <div
              style={{
                display: "flex",
                fontFamily: "Inter",
                fontSize: 28,
                color: "#BBBBBB",
              }}
            >
              Saturdays · 8AM · Lake Pflugerville
            </div>

            {/* Tag */}
            <div
              style={{
                display: "flex",
                fontFamily: "Inter",
                fontSize: 22,
                color: "#FF5500",
              }}
            >
              Free · All Paces Welcome
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Oswald",
          data: oswaldBuffer,
          weight: 700,
          style: "normal",
        },
        {
          name: "Inter",
          data: interBuffer,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
