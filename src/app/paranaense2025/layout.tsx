import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multifly | Paranaense",
  description: "Events Flying Above",
};

export default function ParanaenseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}

