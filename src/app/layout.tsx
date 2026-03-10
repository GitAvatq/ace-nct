import type { Metadata } from "next";
import { Jost, Arimo } from "next/font/google";
import { HeroUIProvider } from "@heroui/system";
import "./styles/globals.css";
import NextIntlProvider from "./providers/NextIntlProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "cyrillic"],
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin", "cyrillic"]
})


export const metadata: Metadata = {
  title: "AceNCT — Подготовка к НЦТ",
  description: "Практические тесты НЦТ, отслеживание прогресса и улучшение результатов вместе с AceNCT.",
  icons: {
    icon: "/acenct-logo.svg"
  },
  keywords: [
    "НЦТ подготовка",
    "тесты НЦТ",
    "НЦТ Кыргызстан",
    "подготовка к НЦТ онлайн"
  ],
  authors: [{ name: "Ariet" }],
  creator: "AceNCT",

  openGraph: {
    title: "AceNCT — Подготовка к НЦТ с умом",
    description:
      "Проходите тесты НЦТ, отслеживайте прогресс и повышайте свои результаты.",
    url: "https://acenct.com",
    siteName: "AceNCT",
    images: [
      {
        url: "/og-acenct-image.png",
        width: 1200,
        height: 630,
        alt: "Превью платформы AceNCT",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AceNCT — Подготовка к экзамену НЦТ",
    description:
      "Практикуйтесь на тестах НЦТ и повышайте свои баллы вместе с AceNCT.",
    images: ["/og-acenct-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${arimo.variable}  antialiased `}
      >
        <HeroUIProvider>
          <NextIntlProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </NextIntlProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
