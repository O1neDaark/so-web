import React, { useEffect, useMemo, useRef, useState } from "react";
import { archiveNavigation, getArchivePage } from "./archiveData";

function Icon({ name }) {
  return <i className={`pi ${name}`} aria-hidden="true" />;
}

function parseCounterValue(value) {
  const raw = String(value);
  const match = raw.match(/-?\d+(?:[.,]\d+)?/);
  if (!match) return null;

  const numericPart = match[0];
  const decimals = numericPart.includes(".") || numericPart.includes(",")
    ? numericPart.split(/[.,]/)[1].length
    : 0;

  return {
    target: Number(numericPart.replace(",", ".")),
    decimals,
    prefix: raw.slice(0, match.index),
    suffix: raw.slice(match.index + numericPart.length),
  };
}

function formatCounterValue(parsed, amount) {
  const number = parsed.decimals > 0 ? amount.toFixed(parsed.decimals) : Math.round(amount).toString();
  return `${parsed.prefix}${number}${parsed.suffix}`;
}

function AnimatedNumber({ value, delay = 0 }) {
  const parsed = useMemo(() => parseCounterValue(value), [value]);
  const valueLength = String(value).length;
  const sizeClass = valueLength > 5 ? "is-long" : valueLength > 3 ? "is-medium" : "";
  const [displayValue, setDisplayValue] = useState(() => (parsed ? formatCounterValue(parsed, 0) : value));
  const ref = useRef(null);

  useEffect(() => {
    setDisplayValue(parsed ? formatCounterValue(parsed, 0) : value);
    if (!parsed) return undefined;

    const node = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!node || reduceMotion || !("IntersectionObserver" in window)) return undefined;

    let frame = 0;
    let timeout = 0;

    const start = () => {
      const startedAt = performance.now();
      const duration = 980;

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(formatCounterValue(parsed, parsed.target * eased));
        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        } else {
          setDisplayValue(value);
        }
      };

      frame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        timeout = window.setTimeout(start, delay);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [delay, parsed, value]);

  return (
    <span className={`count-number ${sizeClass}`.trim()} ref={ref}>
      {displayValue}
    </span>
  );
}

export default function ArchivePage({ slug, lang }) {
  const [activeImage, setActiveImage] = useState(null);
  const page = getArchivePage(slug);
  const content = page[lang];
  const currentIndex = Math.max(0, archiveNavigation.findIndex((item) => item.slug === slug));
  const nextItem = archiveNavigation[(currentIndex + 1) % archiveNavigation.length];
  const labels = useMemo(() => lang === "ru" ? {
    back: "Назад к портфолио",
    navigation: "Направления архива",
    contribution: "Роль и подход",
    scope: "Состав направления",
    visual: "Визуальный архив",
    open: "Открыть изображение",
    close: "Закрыть",
    next: "Следующее направление",
    discuss: "Обсудить похожую задачу",
    independent: "Материалы сохранены внутри сайта и не зависят от Tilda.",
    realCases: "Реальные кейсы",
    openCase: "Смотреть работу",
  } : {
    back: "Back to portfolio",
    navigation: "Archive disciplines",
    contribution: "Role and approach",
    scope: "Discipline scope",
    visual: "Visual archive",
    open: "Open image",
    close: "Close",
    next: "Next discipline",
    discuss: "Discuss a similar project",
    independent: "These materials are stored inside the website and no longer depend on Tilda.",
    realCases: "Real client cases",
    openCase: "View work",
  }, [lang]);

  useEffect(() => {
    if (!activeImage) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [activeImage]);

  return (
    <main className="archive-page" id="top">
      <section className="archive-page-hero" data-reveal>
        <a className="archive-back" href="/#archive">
          <Icon name="pi-arrow-left" />
          {labels.back}
        </a>
        <div className="archive-page-kicker">
          <span><Icon name={page.icon} />{content.eyebrow}</span>
          <span>{content.meta}</span>
        </div>
        <h1>{content.title}</h1>
        <p className="archive-page-lead">{content.lead}</p>
        <div className="archive-page-metrics" aria-label={content.meta} data-counter-group>
          {content.metrics.map(([value, label], index) => (
            <div key={`${value}-${label}`} data-counter-item style={{ "--counter-delay": `${index * 90}ms` }}>
              <strong><AnimatedNumber value={value} delay={index * 150} /></strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <nav className="archive-tabs" aria-label={labels.navigation} data-reveal>
        {archiveNavigation.map((item) => (
          <a
            className={item.slug === slug ? "is-active" : ""}
            href={`/archive/${item.slug}`}
            aria-current={item.slug === slug ? "page" : undefined}
            key={item.slug}
          >
            <Icon name={item.icon} />
            {item[lang]}
          </a>
        ))}
      </nav>

      <section className="archive-page-story" data-reveal>
        <div>
          <p className="section-label">{labels.contribution}</p>
          <h2>{content.storyTitle}</h2>
        </div>
        <div className="archive-page-story-copy">
          {content.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="archive-capabilities" data-reveal>
        {content.capabilities.map(([title, text], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="archive-works" data-reveal>
        <div>
          <p className="section-label">{labels.scope}</p>
          <h2>{content.worksTitle}</h2>
        </div>
        <ol>
          {content.works.map((work, index) => (
            <li key={work}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{work}</strong>
            </li>
          ))}
        </ol>
      </section>

      {content.realCases?.length > 0 && (
        <section className="archive-real-cases" data-reveal>
          <div className="archive-gallery-heading">
            <div>
              <p className="section-label">{labels.realCases}</p>
              <h2>{content.realCasesTitle}</h2>
            </div>
            <p>{content.realCasesText}</p>
          </div>
          <div className="archive-real-grid">
            {content.realCases.map((item) => (
              <a className="archive-real-card" href={item.href} target="_blank" rel="noreferrer" key={item.href}>
                <span className="archive-real-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </span>
                <span className="archive-real-body">
                  <span className="archive-real-meta">
                    <Icon name={item.icon} />
                    {item.type}
                  </span>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </span>
                <span className="archive-real-cta">{labels.openCase}<Icon name="pi-arrow-up-right" /></span>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="archive-gallery-section" data-reveal>
        <div className="archive-gallery-heading">
          <div>
            <p className="section-label">{labels.visual}</p>
            <h2>{content.galleryTitle}</h2>
          </div>
          <p>{labels.independent}</p>
        </div>
        <div className="archive-gallery">
          {page.gallery.map((item, index) => (
            <figure className={item.wide ? "is-wide" : ""} key={item.src}>
              <button type="button" onClick={() => setActiveImage(item)} aria-label={`${labels.open}: ${item[lang]}`}>
                <img src={item.src} alt={item[lang]} loading={index > 1 ? "lazy" : "eager"} />
                <span><Icon name="pi-expand" />{labels.open}</span>
              </button>
              <figcaption>{item[lang]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="archive-page-end" data-reveal>
        <a className="archive-next" href={`/archive/${nextItem.slug}`}>
          <span>{labels.next}</span>
          <strong><Icon name={nextItem.icon} />{nextItem[lang]}</strong>
          <Icon name="pi-arrow-right" />
        </a>
        <div className="archive-end-actions">
          <a className="archive-back" href="/#archive"><Icon name="pi-arrow-left" />{labels.back}</a>
          <a className="button button-light" href="https://t.me/Sergey_Designer" target="_blank" rel="noreferrer">
            <Icon name="pi-send" />
            {labels.discuss}
          </a>
        </div>
      </section>

      {activeImage && (
        <div className="archive-lightbox" role="dialog" aria-modal="true" aria-label={activeImage[lang]}>
          <button className="archive-lightbox-backdrop" type="button" onClick={() => setActiveImage(null)} aria-label={labels.close} />
          <div className="archive-lightbox-panel">
            <button className="archive-lightbox-close" type="button" onClick={() => setActiveImage(null)}>
              <Icon name="pi-times" />{labels.close}
            </button>
            <img src={activeImage.src} alt={activeImage[lang]} />
            <p>{activeImage[lang]}</p>
          </div>
        </div>
      )}
    </main>
  );
}
