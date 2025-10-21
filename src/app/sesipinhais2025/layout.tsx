import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multifly | Sesi Pinhais 2025",
  description: "Events Flying Above",
};

export default function SesiPinhais2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}

