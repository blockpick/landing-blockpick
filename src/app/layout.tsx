import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adnori - Where Advertising Meets Play",
  description: "Adnori transforms advertising into playful experiences. Our innovative software platform combines gamification with marketing to create engaging, interactive campaigns that users love.",
  icons: {
    icon: "data:image/svg+xml,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22&gt;&lt;text y=%22.9em%22 font-size=%2290%22&gt;🎮&lt;/text&gt;&lt;/svg&gt;",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <head>
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/font.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/loader.css" />
        <link rel="stylesheet" href="/css/cursor.css" />
        <link rel="stylesheet" href="/css/lenis.css" />
        <link rel="stylesheet" href="/css/query.css" />
        <link rel="stylesheet" href="/css/adnori-custom.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
