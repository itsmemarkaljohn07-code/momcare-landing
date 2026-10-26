// Copied verbatim from the MomCare app: src/app/pages/privacy/privacy.page.html
// Inline <strong>…</strong> markers are rendered as bold text by <LegalPage>.
import type { LegalDoc } from "@/content/legal-types";

export const privacy: LegalDoc = {
  "title": "Privacy Policy",
  "intro": "At <strong>MomCare</strong>, your privacy is our highest priority — especially given the sensitive nature of pregnancy and maternal health information. This Privacy Policy explains how we collect, use, store, and protect your personal data.",
  "sections": [
    {
      "num": "01",
      "heading": "Information We Collect",
      "blocks": [
        {
          "type": "p",
          "text": "We collect information you provide directly and information generated through your use of the App:"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Account Information",
              "text": "Name (first, middle and last), birthday, home address (province, city or municipality, barangay, and purok or street), username, email address, mobile number, and password you provide on registration."
            },
            {
              "title": "Health Information",
              "text": "Due date, pregnancy week, LMP date, first-time pregnancy status, and clinic details."
            },
            {
              "title": "Your Entries",
              "text": "Appointments, checklist progress, health readings, and Snapshot photos you add in the App."
            },
            {
              "title": "Device Information",
              "text": "A notification token for this phone, so the App can send you reminders and messages from your care team."
            }
          ]
        }
      ]
    },
    {
      "num": "02",
      "heading": "How We Use Your Information",
      "blocks": [
        {
          "type": "p",
          "text": "We use the information we collect to:"
        },
        {
          "type": "list",
          "items": [
            "Provide and personalise the MomCare experience for your stage of pregnancy",
            "Display accurate week-by-week pregnancy insights and baby development updates",
            "Send you appointment and checklist reminders, and notifications from your care team",
            "Keep your account secure, including sign-in and email verification codes",
            "Communicate important updates, changes to our policies, or service announcements",
            "Comply with applicable legal obligations"
          ]
        },
        {
          "type": "highlight",
          "text": "We will <strong>never</strong> sell your personal health information to third parties for advertising or marketing purposes."
        }
      ]
    },
    {
      "num": "03",
      "heading": "Sensitive Health Data",
      "blocks": [
        {
          "type": "p",
          "text": "MomCare handles sensitive health information with the utmost care. All health-related data you provide — including due dates, pregnancy details, and clinic information — is:"
        },
        {
          "type": "list",
          "items": [
            "Sent over encrypted (HTTPS) connections",
            "Stored in Google Firebase, which encrypts stored data",
            "Never shared with advertisers, data brokers, or marketing platforms",
            "Retained only for as long as necessary to provide the service or as required by law",
            "Visible to you, and to your clinic's admins and the doctors assigned to you"
          ]
        }
      ]
    },
    {
      "num": "04",
      "heading": "Data Sharing",
      "blocks": [
        {
          "type": "p",
          "text": "We do not sell your personal data. We may share your information only in the following limited circumstances:"
        },
        {
          "type": "list",
          "items": [
            "<strong>Service Providers:</strong> Google Firebase (accounts, data, and notifications), Cloudinary (photo storage), and EmailJS (sending verification codes), under their own terms",
            "<strong>Legal Requirements:</strong> When required to comply with a legal obligation, court order, or government request",
            "<strong>Safety:</strong> To protect the rights, property, or safety of MomCare, our users, or the public",
            "<strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, with notice provided to you"
          ]
        }
      ]
    },
    {
      "num": "05",
      "heading": "Cookies and Tracking",
      "blocks": [
        {
          "type": "p",
          "text": "The App does not use analytics, advertising cookies, or cross-site tracking."
        }
      ]
    },
    {
      "num": "06",
      "heading": "Data Retention",
      "blocks": [
        {
          "type": "p",
          "text": "We retain your personal data for as long as your account is active or as needed to provide you with services. If you ask us to delete your account:"
        },
        {
          "type": "list",
          "items": [
            "Your personal profile and health data will be deleted after we confirm the request with your registered email address",
            "Some data may be retained longer if required by applicable law",
            "You may request a copy of your data from App Settings, which opens an email to us"
          ]
        }
      ]
    },
    {
      "num": "07",
      "heading": "Your Rights",
      "blocks": [
        {
          "type": "p",
          "text": "Depending on your jurisdiction, you may have the following rights regarding your personal data:"
        },
        {
          "type": "list",
          "items": [
            "<strong>Access:</strong> Request a copy of the personal data we hold about you",
            "<strong>Correction:</strong> Request correction of inaccurate or incomplete data",
            "<strong>Deletion:</strong> Request deletion of your personal data (\"right to be forgotten\")",
            "<strong>Portability:</strong> Request your data in a structured, machine-readable format",
            "<strong>Restriction:</strong> Request that we limit how we process your data",
            "<strong>Objection:</strong> Object to our processing of your data in certain circumstances",
            "<strong>Withdrawal of Consent:</strong> Withdraw consent at any time for consent-based processing"
          ]
        },
        {
          "type": "p",
          "text": "To exercise any of these rights, please contact us at <strong>momscare.noreply@gmail.com</strong>. We will respond as soon as we can."
        }
      ]
    },
    {
      "num": "08",
      "heading": "Children's Privacy",
      "blocks": [
        {
          "type": "p",
          "text": "MomCare is intended for adults aged 18 and older. We do not knowingly collect personal information from anyone under the age of 18. If we become aware that we have collected data from a minor without parental consent, we will take steps to delete that information promptly. If you believe a minor has provided us with personal data, please contact us immediately."
        }
      ]
    },
    {
      "num": "09",
      "heading": "Security",
      "blocks": [
        {
          "type": "p",
          "text": "We implement industry-standard security measures to protect your data, including:"
        },
        {
          "type": "list",
          "items": [
            "Encrypted (HTTPS) connections for data in transit",
            "Encryption at rest for data stored by Google Firebase",
            "Database rules that limit each account to the data its role allows"
          ]
        },
        {
          "type": "p",
          "text": "While we take every precaution, no method of transmission over the internet is 100% secure. We encourage you to use a strong, unique password."
        }
      ]
    },
    {
      "num": "10",
      "heading": "Changes to This Policy",
      "blocks": [
        {
          "type": "p",
          "text": "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make significant changes, we will notify you through the App or by email. The date at the top of this page reflects the most recent update. We encourage you to review this Policy periodically."
        }
      ]
    },
    {
      "num": "11",
      "heading": "Uploaded Photos and Care Team Sharing",
      "blocks": [
        {
          "type": "p",
          "text": "When you use the Snapshot feature to upload photos, that image — together with any health data recorded at the time of upload — is stored on Cloudinary, our photo storage provider, and associated with your account. This information is visible to:"
        },
        {
          "type": "list",
          "items": [
            "You, at any time, through your own account",
            "Your clinic's admins and the doctors assigned to you, solely for the purpose of monitoring your pregnancy and communicating with you about your Snapshot uploads"
          ]
        },
        {
          "type": "p",
          "text": "Uploaded photos and related comments are never shared with any other party, used for advertising, or posted publicly. Deleting a photo removes it from your gallery and the App's records; the image file stays on Cloudinary. To have the file removed, email us at momscare.noreply@gmail.com."
        }
      ]
    },
    {
      "num": "12",
      "heading": "Contact & Data Controller",
      "blocks": [
        {
          "type": "p",
          "text": "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:"
        },
        {
          "type": "contact",
          "items": [
            "momscare.noreply@gmail.com"
          ]
        }
      ]
    }
  ],
  "footer": [
    "© 2026 MomCare. All rights reserved.",
    "This Privacy Policy was last updated on October 26, 2026."
  ]
};
