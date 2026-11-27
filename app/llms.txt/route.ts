import { areas, contact, en, he, siteUrl } from "@/content/site";
import type { Dict } from "@/content/site";
import { clean } from "@/lib/seo";

// /llms.txt — a plain summary for AI assistants, generated from the same copy as the page.
// (No major engine has confirmed using llms.txt; it is cheap, accurate and harmless.)
export const dynamic = "force-static";

const section = (t: Dict, url: string) => {
  const isHe = t.locale === "he";
  const list = (xs: string[]) => xs.map((x) => `- ${clean(x)}`).join("\n");
  const ono = areas.filter((a) => a.ono).map((a) => (isHe ? a.he : a.en)).join(", ");
  const other = areas.filter((a) => !a.ono).map((a) => (isHe ? a.he : a.en)).join(", ");
  return [
    `## ${isHe ? "עברית" : "English"} — ${url}`,
    "",
    clean(t.collection.about),
    "",
    `### ${isHe ? "אזור משלוחים" : "Delivery area"}`,
    `${isHe ? "בקעת אונו" : "Ono Valley"}: ${ono}. ${isHe ? "וגם" : "Also"}: ${other}.`,
    "",
    `### ${isHe ? "זרים" : "Bouquets"}`,
    list(t.collection.bouquets.map((b) => `${b.name}: ${b.note}`)),
    clean(t.collection.handmade),
    "",
    `### ${t.subscription.name}`,
    list(t.subscription.tiers.map((x) => `${x.name.replace("’", "'")}: ${x.price} ${t.subscription.perMonth}`)),
    "",
    `### ${isHe ? "שירותים" : "Services"}`,
    list(t.services.items.map((s) => `${s.title}: ${s.text}`)),
    "",
    `### ${isHe ? "שאלות נפוצות" : "FAQ"}`,
    t.faq.items.map((f) => `**${clean(f.q)}**\n${clean(f.a)}`).join("\n\n"),
  ].join("\n");
};

export function GET() {
  const body = [
    "# NOÉM Flower Atelier",
    "",
    `> Luxury hand-tied bouquets, a weekly flower subscription (Lé Club Floral) and flowers for weddings, events and businesses — Ono Valley and Hod HaSharon, Israel. Orders by WhatsApp (https://wa.me/${contact.whatsapp}) or phone +972-54-227-0540. Instagram: https://www.instagram.com/${contact.instagram}/`,
    "",
    "- Hebrew site: " + `${siteUrl}/`,
    "- English site: " + `${siteUrl}/en/`,
    "",
    section(he, `${siteUrl}/`),
    "",
    section(en, `${siteUrl}/en/`),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
