"use client";

import { useEffect, useRef } from "react";
import type { Dict } from "@/content/site";

// Accessibility statement (Israeli regulation 35) as a native modal on the same page.
// Deep link: /#accessibility and /en/#accessibility open it.
export default function A11yStatement({ t }: { t: Pick<Dict, "footer" | "statement"> }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  const open = () => {
    const d = dialog.current;
    if (!d || d.open) return;
    d.showModal();
    if (location.hash !== "#accessibility") history.replaceState(null, "", "#accessibility");
  };

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const fromHash = () => location.hash === "#accessibility" && open();
    const onClose = () => {
      if (location.hash === "#accessibility") history.replaceState(null, "", location.pathname + location.search);
      trigger.current?.focus();
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    d.addEventListener("close", onClose);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      d.removeEventListener("close", onClose);
    };
  }, []);

  return (
    <>
      <button ref={trigger} type="button" className="legal-link" data-loc="footer" data-event="a11y_open" onClick={open} aria-haspopup="dialog">
        {t.footer.statementLink}
      </button>
      <dialog ref={dialog} id="accessibility" className="statement" aria-labelledby="statement-title">
        <div className="statement__head">
          <h2 id="statement-title" className="caps" lang="en" dir="ltr">{t.statement.title}</h2>
          <button type="button" className="statement__close" onClick={() => dialog.current?.close()}>
            {t.statement.close}
          </button>
        </div>
        {t.statement.sections.map((s) => (
          <section key={s.h}>
            <h3>{s.h}</h3>
            {s.p && <p>{s.p}</p>}
            {s.list && (
              <ul>
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <p className="statement__updated">{t.statement.updated}</p>
      </dialog>
    </>
  );
}
