import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multifly | Feras Seminário 2025",
  description: "Events Flying Above",
};

export default function FerasSeminario2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}

