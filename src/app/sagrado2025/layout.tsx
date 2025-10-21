import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multifly | Sagrado 2025",
  description: "Events Flying Above",
};

export default function Sagrado2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}

