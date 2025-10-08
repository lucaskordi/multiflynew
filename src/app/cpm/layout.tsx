import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multifly | CPM",
  description: "Events Flying Above",
};

export default function CPMLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
