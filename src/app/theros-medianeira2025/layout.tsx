import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multifly | Theros Medianeira 2025",
  description: "Events Flying Above",
};

export default function TherosMedianeira2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}

