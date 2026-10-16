export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "highlight"; text: string }
  | { type: "contact"; items: string[] }
  | { type: "cards"; items: { title: string; text: string }[] };

export interface LegalDoc {
  title: string;
  intro: string;
  sections: { num: string; heading: string; blocks: LegalBlock[] }[];
  footer: string[];
}
