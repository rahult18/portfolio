import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "prism-mem — Rahul Talatala",
  description:
    "Every coding session leaves behind artifacts. Prism reads them and turns them into structured, reusable knowledge. Automatically.",
};

export default function PrismLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
