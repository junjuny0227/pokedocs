import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "pokedocs",
  description: "pokedocs",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
