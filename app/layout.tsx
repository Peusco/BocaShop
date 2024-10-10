import { Suspense } from "react";
import "./globals.css";
import { Header } from "./ui/header";
import { ProductWrapper } from "./context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-auto">
      <body className="h-full ">
        <ProductWrapper>
          <Header />
          <section className="h-full bg-gradient-to-r from-yellow-200 from-20% via-yellow-300 to-yellow-500">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </section>
        </ProductWrapper>
      </body>
    </html>
  );
}
