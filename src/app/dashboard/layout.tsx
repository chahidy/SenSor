import type { Metadata } from "next";
import { Sidebar } from "@/app/lib/components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Sensoren",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
}
