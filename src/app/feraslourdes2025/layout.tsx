import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multifly | Feras Lourdes 2025",
  description: "Events Flying Above",
};

export default function FerasLourdes2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}

