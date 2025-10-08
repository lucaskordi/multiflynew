import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multifly | Santa Maria",
  description: "Events Flying Above",
};

export default function SantamariaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
