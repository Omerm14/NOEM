// Fails the build if a "[placeholder]" (or a bracketed Hebrew/English note) reaches anything crawlers read.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = "out";
const files = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { if (f !== "_next") walk(p); }
    else if (/\.(html|txt|xml)$/.test(f) && !f.startsWith("__next")) files.push(p);
  }
};
walk(root);

// Visible text only: strip scripts except JSON-LD, then tags.
// A bracketed note that is not a Markdown link ("[name](url)" in llms.txt is fine).
const pattern = /\[[^\]\n]*[A-Za-z֐-׿][^\]\n]*\](?!\()/g;
const bad = [];
for (const f of files) {
  let s = readFileSync(f, "utf8");
  if (f.endsWith(".html")) {
    // JSON-LD: check every string value (arrays themselves use brackets legitimately).
    const strings = [];
    const collect = (v) => (typeof v === "string" ? strings.push(v) : v && typeof v === "object" && Object.values(v).forEach(collect));
    for (const m of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) collect(JSON.parse(m[1]));
    s = s.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ") + "\n" + strings.join("\n");
  } else if (f.endsWith("index.txt")) continue; // RSC payloads (noindex) carry the raw copy object
  const hits = s.match(pattern);
  if (hits) bad.push(`${f}: ${[...new Set(hits)].slice(0, 5).join(" | ")}`);
}
if (bad.length) {
  console.error("✗ Placeholder text found in the build output:\n" + bad.join("\n"));
  process.exit(1);
}
console.log(`✓ No placeholders in ${files.length} output files`);
