import type { Dict } from "@/content/site";
import { contact, media, waLink } from "@/content/site";
import Header from "./Header";
import Reveal from "./Reveal";

const WhatsAppIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z" />
  </svg>
);

function Pic({ base, alt, position, sizes = "(max-width: 900px) 100vw, 33vw" }: { base: string; alt: string; position?: string; sizes?: string }) {
  const big = base.endsWith("anthurium") ? 1045 : 1400;
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
  return (
    <>
      <Header t={{ locale: t.locale, announcement: t.announcement, nav: t.nav, switchLabel: t.switchLabel, switchHref: t.switchHref, switchAria: t.switchAria, order: t.order, menu: t.menu, close: t.close, whatsapp: t.hero.whatsapp }} />
      <Reveal />
      <main>
        <section className="hero" aria-label={t.hero.videoLabel}>
          <video autoPlay muted loop playsInline preload="metadata" poster={media.heroPoster} aria-hidden="true">
            <source src={media.heroVertical} type="video/mp4" media="(max-width: 700px)" />
            <source src={media.hero} type="video/mp4" />
          </video>
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__content hero-in">
            <h1 lang="en" dir="ltr">
              <span>{t.hero.line1}</span> <em>{t.hero.line2}</em>
            </h1>
            <div className="hero__ctas">
              <a href="#collection" className="btn btn--cream">{t.hero.explore}</a>
              <a href={waLink()} className="btn btn--line">
                <WhatsAppIcon />
                {t.hero.whatsapp}
              </a>
            </div>
          </div>
        </section>

        <section className="quote" data-reveal>
          <p className="serif">{t.quote.text}</p>
          <p className="eyebrow">{t.quote.by}</p>
        </section>

        <section id="collection" className="wrap section section--collection">
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow">{t.collection.eyebrow}</p>
              <h2 className="serif">{t.collection.title}</h2>
            </div>
            <p className="muted">{t.collection.intro}</p>
          </div>
          <div className="grid-3">
            {t.collection.bouquets.map((b) => (
              <article key={b.id} className="card" data-reveal>
                <div className="card__img">
                  <Pic base={b.image} alt={b.alt} position={b.position} />
                </div>
                <div className="card__row">
                  <h3 className="serif">{b.name}</h3>
                  <span>{b.price}</span>
                </div>
                <p className="muted">{b.note}</p>
                <a className="link-line" href={waLink(t.collection.waMessage(b.name))}>{t.collection.cta}</a>
              </article>
            ))}
          </div>
        </section>

        <div className="wrap steps-wrap">
          <div className="steps" data-reveal>
            {t.steps.map((s) => (
              <div key={s.n} className="step">
                <p className="num">{s.n}</p>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="services">
          <div className="inner">
            <div data-reveal>
              <p className="eyebrow">{t.services.eyebrow}</p>
              <h2 className="serif">{t.services.title}</h2>
            </div>
            <div data-reveal>
              {t.services.items.map((s) => (
                <a key={s.id} id={s.id} className="service" href={waLink(`NOÉM — ${s.title}`)}>
                  <span className="n">{s.n}</span>
                  <span className="t">{s.title}</span>
                  <span className="d muted">{s.text}</span>
                  <span className="more">{t.services.more}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap section">
          <div className="split" data-reveal>
            <Pic base={media.dahlia} alt={t.atelier.alt} sizes="(max-width: 900px) 100vw, 50vw" />
            <div>
              <p className="eyebrow">{t.atelier.eyebrow}</p>
              <h2 className="serif">
                {t.atelier.title1} <em>{t.atelier.title2}</em>
              </h2>
              <p className="muted">{t.atelier.p1}</p>
              <p className="muted" style={{ marginBottom: 36 }}>{t.atelier.p2}</p>
              <a className="link-line" href={`https://instagram.com/${contact.instagram}`}>{t.atelier.cta}</a>
            </div>
          </div>
        </section>

        <section className="band" data-reveal>
          <p className="eyebrow">{t.subscription.eyebrow}</p>
          <h2 className="serif">{t.subscription.title}</h2>
          <a className="btn btn--outline-cream" href={waLink(t.subscription.waMessage)}>{t.subscription.cta}</a>
        </section>

        <section className="wrap section">
          <div className="gallery-head">
            <h2 className="serif">{t.gallery.title}</h2>
            <a href={`https://instagram.com/${contact.instagram}`}>@{contact.instagram}</a>
          </div>
          <div className="gallery" data-reveal>
            <Pic base={media.anthurium} alt="" sizes="25vw" />
            <Pic base={media.dahlia} alt="" position="right bottom" sizes="25vw" />
            <Pic base={media.window} alt="" position="center 30%" sizes="25vw" />
            <Pic base={media.bag} alt="" position="center 80%" sizes="25vw" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="cols">
          <div className="brand">
            <img src={media.logoCream} alt="NOÉM Flower Atelier" width={500} height={256} />
            <p className="serif">{t.footer.tagline}</p>
          </div>
          <div className="col">
            <p className="eyebrow" style={{ marginBottom: 8 }}>{t.footer.visit}</p>
            <span>{t.footer.address}</span>
            {contact.phones.map((p) => (
              <a key={p.href} href={p.href} className="ltr">{p.label}</a>
            ))}
            <a href={`https://instagram.com/${contact.instagram}`} className="ltr">@{contact.instagram}</a>
          </div>
          <div className="col">
            <p className="eyebrow" style={{ marginBottom: 8 }}>{t.footer.atelierCol}</p>
            {t.nav.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </div>
        </div>
        <p className="legal">{t.footer.rights} · <span className="ltr">{contact.web}</span></p>
      </footer>
    </>
  );
}
