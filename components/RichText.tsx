import { Fragment } from "react";

// Turns the business phone inside running copy into a tappable link that never breaks across lines.
const PHONE = /(\+972 54-227-0540|054-227-0540)/;

export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(PHONE).map((part, i) =>
        PHONE.test(part) ? (
          <a key={i} href="tel:+972542270540" className="ltr phone-inline">{part}</a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
