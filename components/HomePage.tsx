import type { Dict } from "@/content/site";
import { contact, media, shown, waLink } from "@/content/site";
import A11yStatement from "./A11yStatement";
import Header from "./Header";
import Reveal from "./Reveal";
import StructuredData from "./StructuredData";
import Track from "./Track";

const WhatsAppIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z" />
  </svg>
);

function Pic({ base, alt, position, sizes = "(max-width: 900px) 100vw, 33vw" }: { base: string; alt: string; position?: string; sizes?: string }) {
  const big = 1400;
  return (
    <img
      src={`${base}-800.webp`}
      srcSet={`${base}-800.webp 800w, ${base}-${big}.webp ${big}w`}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      style={position ? { objectPosition: position } : undefined}
    />
  );
}

export default function HomePage({ t }: { t: Dict }) {
  const NewTab = () => <span className="sr-only"> {t.newTab}</span>;
  const quoteBy = shown(t.quote.by);
  const atelierP1 = shown(t.atelier.p1);
  return (
    <>
      <StructuredData t={t} />
      <a className="skip-link" href="#main">{t.skip}</a>
      <Header t={{ newTab: t.newTab, homeLabel: t.homeLabel, orderMessage: t.orderMessage, locale: t.locale, announcement: t.announcement, nav: t.nav, switchLabel: t.switchLabel, switchHref: t.switchHref, switchAria: t.switchAria, order: t.order, menu: t.menu, close: t.close, whatsapp: t.hero.whatsapp }} />
      <Reveal />
      <Track lang={t.locale} />
      <main id="main" tabIndex={-1}>
        <section className="hero" aria-label={t.hero.videoLabel}>
          <picture className="hero__media" aria-hidden="true">
            <source media="(max-width: 700px) and (orientation: portrait)" srcSet={`${media.heroImage}-portrait.webp`} />
            <img
              src={`${media.heroImage}-1600.webp`}
              srcSet={`${media.heroImage}-1000.webp 1000w, ${media.heroImage}-1600.webp 1600w, ${media.heroImage}-2400.webp 2400w`}
              sizes="100vw"
              alt=""
              fetchPriority="high"
            />
          </picture>
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__content hero-in">
            <h1 lang="en" dir="ltr">
              <span>{t.hero.line1}</span> <em>{t.hero.line2}</em>
            </h1>
            <div className="hero__ctas" data-loc="hero">
              <a href="#collection" className="btn btn--cream">{t.hero.explore}</a>
              <a href={waLink(t.orderMessage)} className="btn btn--line" target="_blank" rel="noopener">
                <WhatsAppIcon />
                {t.hero.whatsapp}
                <NewTab />
              </a>
            </div>
          </div>
        </section>

        <section className="quote" data-reveal>
          <p className="serif">{t.quote.text}</p>
          {quoteBy && <p className="eyebrow">{quoteBy}</p>}
        </section>

        <section id="collection" className="wrap section section--collection">
          <div className="section-head" data-reveal>
            <div>
              <h2 className="serif caps" lang="en" dir="ltr">{t.collection.title}</h2>
            </div>
          </div>
          <div className="grid-3" data-loc="collection">
            {t.collection.bouquets.map((b) => (
              <article key={b.id} className="card" data-reveal data-item={b.id}>
                <div className="card__img">
                  <Pic base={b.image} alt={b.alt} position={b.position} />
                </div>
                <h3 className="serif card__name" lang="en" dir="ltr">{b.name}</h3>
                <p className="muted">{b.note}</p>
                <a className="link-line" href={waLink(t.collection.waMessage(b.name))} target="_blank" rel="noopener">
                  {t.collection.cta}
                  <NewTab />
                </a>
              </article>
            ))}
          </div>
          <div className="handmade" data-reveal>
            <p>{t.collection.handmade}</p>
            <p>{t.collection.about}</p>
          </div>
        </section>

        <section className="wrap steps-wrap" aria-labelledby="how-to-order">
          <h2 id="how-to-order" className="sr-only" lang="en" dir="ltr">{t.howToOrder}</h2>
          <div className="steps" data-reveal>
            {t.steps.map((s) => (
              <div key={s.n} className="step">
                <p className="num">{s.n}</p>
                <h3 className="caps" lang="en" dir="ltr">{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="services" data-loc="service">
          <div className="inner">
            <div data-reveal>
              <p className="eyebrow caps" lang="en" dir="ltr">{t.services.eyebrow}</p>
              <h2 className="serif caps" lang="en" dir="ltr">{t.services.title}</h2>
            </div>
            <div data-reveal>
              {t.services.items.map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  className="service"
                  href={waLink(s.wa)}
                  target="_blank"
                  rel="noopener"
                  data-item={s.id}
                >
                  <span className="n" aria-hidden="true">{s.n}</span>
                  <span className="t caps" lang="en" dir="ltr">{s.title}</span>
                  <span className="d muted">{s.text}</span>
                  <span className="more">{t.services.more}<NewTab /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap section">
          <div className="split" data-reveal>
            <Pic base={media.bagsPair} alt={t.atelier.alt} position="center 60%" sizes="(max-width: 900px) 100vw, 50vw" />
            <div>
              <p className="eyebrow caps" lang="en" dir="ltr">{t.atelier.eyebrow}</p>
              <h2 className="serif caps" lang="en" dir="ltr">
                {t.atelier.title1} <em>{t.atelier.title2}</em>
              </h2>
              {atelierP1 && <p className="muted">{atelierP1}</p>}
              <p className="muted" style={{ marginBottom: 36 }}>{t.atelier.p2}</p>
              <a className="link-line" href={`https://www.instagram.com/${contact.instagram}/`} target="_blank" rel="noopener" data-loc="atelier">
                {t.atelier.cta}
                <NewTab />
              </a>
            </div>
          </div>
        </section>

        <section className="band" id="club" data-reveal data-loc="tier">
          <h2 className="serif band__name caps" lang="fr" dir="ltr">{t.subscription.name}</h2>
          <p className="band__tagline">{t.subscription.tagline}</p>
          <div className="tiers">
            {t.subscription.tiers.map((tier) => (
              <a key={tier.id} className="tier" href={waLink(t.subscription.waMessage(tier.name, tier.price))} target="_blank" rel="noopener" data-item={tier.id}>
                <span className="tier__name caps" lang="fr" dir="ltr">{tier.name}</span>
                <span className="tier__price"><bdi>{tier.price}</bdi> {t.subscription.perMonth}</span>
                <span className="tier__cta">{t.subscription.choose}<NewTab /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="wrap section">
          <div className="gallery-head">
            <h2 className="serif caps" lang="en" dir="ltr">{t.gallery.title}</h2>
            <a href={`https://www.instagram.com/${contact.instagram}/`} target="_blank" rel="noopener" data-loc="gallery">
              @{contact.instagram}
              <NewTab />
            </a>
          </div>
          <div className="gallery" data-reveal>
            <Pic base={media.vaseBlush} alt={t.gallery.alts[0]} position="center 55%" sizes="(max-width: 700px) 50vw, 25vw" />
            <Pic base={media.bridalRoses} alt={t.gallery.alts[1]} position="center 55%" sizes="(max-width: 700px) 50vw, 25vw" />
            <Pic base={media.anthuriumBridal} alt={t.gallery.alts[2]} position="center 60%" sizes="(max-width: 700px) 50vw, 25vw" />
            <Pic base={media.vaseKitchen} alt={t.gallery.alts[3]} position="center 60%" sizes="(max-width: 700px) 50vw, 25vw" />
          </div>
        </section>

        <section className="wrap section faq" id="questions" aria-labelledby="faq-title" data-loc="faq">
          <h2 id="faq-title" className="serif caps" lang="en" dir="ltr">{t.faq.title}</h2>
          <div className="faq__list">
            {t.faq.items.map((f) => (
              <details key={f.id} id={`faq-${f.id}`} className="faq__item" data-item={f.id}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="cols">
          <div className="brand">
            <img src={media.logoCream} alt="NOÉM Flower Atelier" width={1164} height={590} loading="lazy" />
            <p className="serif footer-tagline" lang="en" dir="ltr">{t.footer.tagline}</p>
          </div>
          <div className="col" data-loc="footer">
            <p className="eyebrow caps" lang="en" dir="ltr" style={{ marginBottom: 8 }}>{t.footer.visit}</p>
            <span>{t.footer.delivery}</span>
            {contact.phones.map((p) => (
              <a key={p.href} href={p.href} className="ltr tel">{t.locale === "en" ? p.intl : p.label}</a>
            ))}
            <a href={`https://www.instagram.com/${contact.instagram}/`} className="ltr" target="_blank" rel="noopener">
              @{contact.instagram}
              <NewTab />
            </a>
          </div>
          <div className="col">
            <p className="eyebrow caps" lang="en" dir="ltr" style={{ marginBottom: 8 }}>{t.footer.atelierCol}</p>
            {t.nav.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </div>
        </div>
        <div className="legal">
          <span>{t.footer.rights}</span>
          <span aria-hidden="true">·</span>
          <span className="ltr">{contact.web}</span>
          <span aria-hidden="true">·</span>
          <A11yStatement t={{ footer: t.footer, statement: t.statement }} />
        </div>
      </footer>
    </>
  );
}
