// Type imports:
import type { Metadata } from "next";

// Style imports:
import "@/styles/globals.css";
import { jetBrains, plexSerif, plexSans } from "@/styles/fonts";

// Component imports:
import { Header } from "@/(components)/components";
import { Background, Content } from "@/(components)/content";

// Meta imports:
import { getPages } from "@/(meta)/meta";

// Config import:
import config from "../../next.config.mjs";

// Website metadata:
export const metadata: Metadata = {
  title: "Brandon | Portfolio",
  description: "The personal portfolio website for Brandon Barham.",
  icons: {
    icon: `${config.basePath}/assets/favicon.ico`
  }
};

// Root layout:
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrains.variable} ${plexSerif.variable} ${plexSans.variable}`}
    >
      <body>
        <a
          className="skipToMain"
          href="#main"
        >
          Skip to Main Content
        </a>
        <Background />
        <div className="layout">
          <Header pageMeta={getPages()} />
          <Content>{children}</Content>
        </div>
      </body>
    </html>
  );
}
