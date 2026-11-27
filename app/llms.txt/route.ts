import { areas, contact, en, he, siteUrl } from "@/content/site";
import type { Dict } from "@/content/site";
import { clean } from "@/lib/seo";

// /llms.txt in the llmstxt.org format: H1, a summary quote, then link lists (- [name](url): notes).
// Generated from the same copy as the page, so it can never drift.
export const dynamic = "force-static";

const phone = contact.phones[0];

const section = (t: Dict) => {
  const isHe = t.locale === "he";
  const base = isHe ? `${siteUrl}/` : `${siteUrl}/en/`;
  const link = (name: string, anchor: string, note: string) => `- [${clean(name)}](${base}${anchor}): ${clean(note)}`;
  const ono = areas.filter((a) => a.ono).map((a) => (isHe ? a.he : a.en)).join(", ");
  const other = areas.filter((a) => !a.ono).map((a) => (isHe ? a.he : a.en)).join(", ");
  return [
    `## ${isHe ? "עברית" : "English"}`,
    "",
    clean(t.collection.about),
    "",
    `### ${isHe ? "הקולקציה" : "Collection"}`,
    ...t.collection.bouquets.map((b) => link(b.name, "#collection", b.note)),
    "",
    clean(t.collection.handmade),
    "",
    `### ${t.subscription.name}`,
    ...t.subscription.tiers.map((x) => link(x.name.replace("’", "'"), "#club", `${x.price} ${t.subscription.perMonth}`)),
    "",
    `### ${isHe ? "שירותים" : "Services"}`,
    ...t.services.items.map((s) => link(s.title, `#${s.id}`, s.text)),
    "",
    `### ${isHe ? "אזור משלוחים" : "Delivery area"}`,
    `${isHe ? "בקעת אונו" : "Ono Valley"}: ${ono}. ${isHe ? "וגם" : "Also"} ${other}.`,
    "",
    `### ${isHe ? "שאלות נפוצות" : "FAQ"}`,
    ...t.faq.items.map((f) => link(f.q, `#faq-${f.id}`, f.a)),
  ].join("\n");
};

export function GET() {
  const body = [
    "# NOÉM Flower Atelier",
    "",
    `> ${clean(en.collection.about)}`,
    "",
    "Hand-tied luxury bouquets with no fixed price (each is priced to the customer's budget), the Lé Club Floral weekly subscription in three tiers, and flowers for weddings, events and businesses. There is no shop. Orders are delivered to the door, and workshops are held at a venue arranged in advance.",
    "",
    "## Site",
    `- [NOÉM in Hebrew](${siteUrl}/): the main site`,
    `- [NOÉM in English](${siteUrl}/en/): the same content in English`,
    `- [Accessibility statement](${siteUrl}/en/#accessibility): IS 5568 / WCAG 2.1 AA, adjustments and contact`,
    "",
    "## Order and contact",
    `- [WhatsApp](https://wa.me/${contact.whatsapp}): orders and questions, in Hebrew or English`,
    `- [Phone ${phone.intl}](${phone.href}): calls and WhatsApp`,
    `- [Instagram @${contact.instagram}](https://www.instagram.com/${contact.instagram}/): recent work from the atelier`,
    "",
    section(en),
    "",
    section(he),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
