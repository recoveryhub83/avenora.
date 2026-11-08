import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVENORA — Make good possible",
  description: "A global space for people, ideas and communities to move forward together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
