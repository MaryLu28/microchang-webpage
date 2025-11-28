import "./globals.css";

import type { Metadata } from "next";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "MICRO CHANG",
  description:
    "Imprimí tus maquetas 3D con calidad profesional, precisión de detalle y asesoramiento personalizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col items-center justify-center">
            <Header />
            <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-10 px-5 md:py-32 md:px-16 sm:items-start">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
