import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { terms } from "@/content/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions — MomCare",
  description: "The terms and conditions for using the MomCare app.",
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
