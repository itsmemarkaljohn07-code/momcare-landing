import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { privacy } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — MomCare",
  description: "How MomCare collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
