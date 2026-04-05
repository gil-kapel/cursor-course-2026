import type { Metadata } from "next";
import { Heebo, Nunito, Manrope } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "קורס Cursor | ממנהלי מוצר למפתחי AI",
  description:
    "קורס מעשי בעברית למנהלי מוצר ומתחילים שרוצים לעבור מצ׳אט גנרי לעבודה מובנית ב-Cursor — מהקמת סביבת עבודה ועד פרויקטים מקצה לקצה.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${nunito.variable} ${manrope.variable} antialiased`}
        style={{ fontFamily: 'var(--font-heebo), var(--font-nunito), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
