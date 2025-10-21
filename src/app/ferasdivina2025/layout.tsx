import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multifly | Feras Divina 2025",
  description: "Events Flying Above",
};

export default function FerasDivina2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}

