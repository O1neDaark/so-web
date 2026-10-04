import React, { useEffect, useRef, useState } from 'react';
import { content, telegram, channel, store, messageLink } from './content';
import { lingoCaseContent, productSite } from './lingoCaseContent';
import igms from '../assets/igms-cover.png';
import diagnostics from '../assets/diagnostics-cover.png';

const covers = {
  enterprise: '/rebrand/enterprise-nda-interface.png',
  rag: '/rebrand/rag-nda-interface.png',
  igms,
  diagnostics,
};

export function Icon({ name = 'arrow-up-right' }) {
  return <i className={`pi pi-${name}`} aria-hidden="true" />;
}

function LinkButton({ children, href, secondary = false, external = false, className = '' }) {
  return (
    <a
      className={`rb-button ${secondary ? 'rb-button-secondary' : ''} ${className}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
      <Icon name={external ? 'arrow-up-right' : 'arrow-right'} />
    </a>
  );
}

function Label({ children }) {
  return <p className="rb-label">{children}</p>;
}

export function Brand({ t }) {
  return (
    <a className="rb-brand" href="/#top" aria-label={t.name}>
      <img className="rb-brand-mark" src="/rebrand/brand-mark.png" alt="" width="40" height="40" />
      <span className="rb-brand-copy" aria-hidden="true">
        {t.brand.map((line) => <span key={line}>{line}</span>)}
      </span>
    </a>
  );
}

export function RebrandHeader({ lang, setLang, path }) {
  const t = content[lang];
  const [open, setOpen] = useState(false);
  const button = useRef(null);

  useEffect(() => setOpen(false), [path, lang]);
  useEffect(() => {
    if (!open) return undefined;
    const escape = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);

  const ids = ['cases', 'process', 'about', 'cv', 'services'];

  return (
    <>
      <a className="rb-skip" href="#main-content" onClick={() => document.getElementById('main-content')?.focus()}>{t.skip}</a>
      <header className="rb-header">
        <Brand t={t} />
        <nav aria-label={lang === 'ru' ? 'Основная навигация' : 'Main navigation'} className={`rb-nav ${open ? 'is-open' : ''}`} id="rb-navigation">
          {t.nav.map((text, i) => <a href={`/#${ids[i]}`} key={text} onClick={() => setOpen(false)}>{text}</a>)}
        </nav>
        <div className="rb-header-actions">
          <div className="rb-language" aria-label={lang === 'ru' ? 'Язык сайта' : 'Site language'}>
            {['ru', 'en'].map((l) => <button key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l} lang={l}>{l.toUpperCase()}</button>)}
          </div>
          <a className="rb-header-cta" href="/#contact">{t.idea}<Icon /></a>
          <button className="rb-menu" ref={button} type="button" aria-label={open ? t.close : t.menu} aria-expanded={open} aria-controls="rb-navigation" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'times' : 'bars'} />
          </button>
        </div>
      </header>
    </>
  );
}

function Hero({ t }) {
  return (
    <section className="rb-hero" aria-labelledby="hero-title">
      <div className="rb-hero-copy">
        <Label>PRODUCT BUILDER · CREATIVE LEAD</Label>
        <h1 id="hero-title">{t.hero[0]}<br /><span>{t.hero[1]}</span></h1>
        <p className="rb-hero-lead">{t.lead}</p>
        <p className="rb-hero-intro">{t.intro}</p>
        <div className="rb-actions"><LinkButton href="/#cases">{t.see}</LinkButton><a className="rb-text-link" href="/#contact">{t.discuss}<Icon /></a></div>
        <div className="rb-hero-foot"><span className="rb-live-dot" /> {t.name}<span className="rb-hero-foot-separator">/</span><span>Design. Build. Repeat.</span></div>
      </div>
      <div className="rb-portrait-wrap">
        <span className="rb-portrait-label">IDEAS INTO REALITY — VOL. 01</span>
        <img className="rb-portrait" src="/rebrand/sergey-portrait.webp" alt={t.portrait} fetchPriority="high" width="960" height="1280" />
        <p className="rb-handwritten rb-hero-note">{t.note}</p>
        <div className="rb-portrait-caption"><Icon name="lightbulb" /><span>{t.caption}</span></div>
      </div>
    </section>
  );
}

function Proof({ t }) {
  return (
    <section className="rb-proof" aria-label={t.name}>
      <span className="rb-proof-caption">{t.name}<br /><span>Product Builder</span></span>
      {t.proof.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
      <a href="/case/lingoslide" className="rb-proof-product"><img src="/rebrand/lingoslide-icon.webp" width="42" height="42" alt="" /><span>LingoSlide<small>Android · RuStore <Icon name="arrow-up-right" /></small></span></a>
    </section>
  );
}

function Status({ item, t }) {
  return <span className={`rb-status rb-status-${item.status.toLowerCase()}`} title={t.statusLabels[item.status]}><span />{item.status}</span>;
}

function NowBuilding({ t }) {
  const [active, setActive] = useState(0);
  return (
    <section className="rb-section rb-now" id="now">
      <div className="rb-section-heading"><div><Label>{t.nowLabel}</Label><h2>{t.nowTitle}</h2></div><p>{t.nowText}</p></div>
      <div className="rb-now-grid">
        <a href="/case/lingoslide" className="rb-product-feature">
          <div className="rb-product-copy">
            <span className="rb-small-tag">{t.own} <span>01</span></span>
            <h3>LingoSlide<span className="rb-circle-link"><Icon /></span></h3>
            <p>{t.lingoDesc}</p>
            <div className="rb-product-tags"><span>Android</span><span>5000 {t === content.ru ? 'слов' : 'words'}</span><span>A1–C1</span></div>
          </div>
          <div className="rb-feature-device"><img src="/rebrand/lingoslide-device-home.webp" alt={t.imageAlt} loading="lazy" width="1122" height="1402" /></div>
          <span className="rb-feature-footer"><span className="rb-live-dot" /> SHIPPED / RUSTORE</span>
        </a>
        <div className="rb-project-notebook">
          <div className="rb-notebook-heading"><span>{t === content.ru ? 'Открытая мастерская' : 'An open workshop'}</span><span>2026</span></div>
          {t.nowRows.map((item, i) => (
            <div className={`rb-project-row ${active === i ? 'is-active' : ''}`} key={item.name}>
              <button type="button" aria-expanded={active === i} aria-controls={`project-detail-${i}`} onClick={() => setActive(active === i ? null : i)}>
                <span className="rb-row-icon">{i === 0 ? <img src="/rebrand/lingoslide-icon.webp" width="40" height="40" alt="" /> : <Icon name={item.icon} />}</span>
                <span className="rb-row-name"><strong>{item.name}</strong><small>{item.desc}</small></span>
                <Status item={item} t={t} />
                <Icon name={active === i ? 'minus' : 'plus'} />
              </button>
              <div id={`project-detail-${i}`} className="rb-row-detail" hidden={active !== i}>
                <p>{item.detail}</p>
                {item.href && (
                  <a className="rb-text-link" href={item.href} {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                    {item.external ? (t === content.ru ? 'Открыть Pinterest' : 'Open Pinterest') : t.read}
                    <Icon name={item.external ? 'arrow-up-right' : 'arrow-right'} />
                  </a>
                )}
              </div>
            </div>
          ))}
          <a className="rb-next-idea" href="/#contact"><Icon name="plus" /><span>{t === content.ru ? 'Следующая идея может быть нашей.' : 'The next idea could be ours.'}</span><Icon /></a>
          <p className="rb-handwritten rb-notebook-note">{t === content.ru ? 'Делаю. Проверяю. Пробую снова.' : 'Build. Test. Try again.'}</p>
        </div>
      </div>
    </section>
  );
}

function Process({ t }) {
  return <section className="rb-section rb-process" id="process"><div className="rb-section-heading"><div><Label>{t.processLabel}</Label><h2 className="rb-multiline">{t.processTitle}</h2></div><span className="rb-handwritten">{t === content.ru ? 'И повторяю снова!' : 'And do it all again!'}</span></div><div className="rb-process-grid">{t.steps.map(([title, text, icon], i) => <article key={title}><div className="rb-step-top"><Icon name={icon} /><span>0{i + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}

const coverNumbers = { enterprise: '01', rag: '02', igms: '03', diagnostics: '04' };

function CaseCover({ project }) {
  return (
    <div className="rb-work-image">
      <div className="rb-cover-heading"><span>{coverNumbers[project.id]}</span><strong>{project.name}</strong><span>↗</span></div>
      <div className="rb-cover-media">
        <img src={covers[project.id]} alt={project.name} loading="lazy" width="1200" height="800" />
        {project.ndaLabel && <span className="rb-nda-badge">BIG TECH / TELECOM · {project.ndaLabel}</span>}
      </div>
    </div>
  );
}

function SelectedWork({ t }) {
  return <section className="rb-section rb-work" id="cases"><div className="rb-section-heading"><div><Label>{t.workLabel}</Label><h2>{t.workTitle}</h2></div><a href="/archive/studio" className="rb-text-link">{t.archive}<Icon /></a></div><p className="rb-work-intro">{t.workText}</p><div className="rb-work-grid">{t.projects.map((p) => <a className={`rb-work-card rb-work-${p.id}`} key={p.id} href={`/case/${p.id}`}><CaseCover project={p} /><div className="rb-work-meta"><span>{p.tag}</span><span>{p.name}</span></div><h3>{p.title}</h3><p>{p.desc}</p></a>)}</div></section>;
}

function ProductStory({ t }) {
  return <section className="rb-section rb-story"><div className="rb-story-copy"><Label>{t.storyLabel}</Label><h2 className="rb-multiline">{t.storyTitle}</h2><p>{t.storyText}</p><div className="rb-story-facts">{t.storyFacts.map(([v, l]) => <div key={v}><strong>{v}</strong><span>{l}</span></div>)}</div><div className="rb-actions"><LinkButton href="/case/lingoslide">{t.storyCta}</LinkButton><a className="rb-text-link" href={store} target="_blank" rel="noreferrer">RuStore<Icon /></a></div></div><div className="rb-story-visual"><img src="/rebrand/lingoslide-device-path.webp" alt={t.imageAlt} loading="lazy" width="1122" height="1402" /></div></section>;
}

function About({ t }) {
  return <section className="rb-section rb-about" id="about"><div className="rb-about-photo"><img src="/rebrand/sergey-camera.jpg" alt={t.cameraAlt} loading="lazy" width="960" height="1280" /><span className="rb-handwritten">{t.aboutNote}</span></div><div className="rb-about-copy"><Label>{t.aboutLabel}</Label><h2>{t.aboutTitle}</h2><p className="rb-about-lead">{t.aboutLead}</p><p>{t.aboutText}</p><div className="rb-career"><span>X5 Tech</span><Icon name="arrow-right" /><span>{t === content.ru ? 'Ростелеком ИТ' : 'Rostelecom IT'}</span><Icon name="arrow-right" /><span>{t === content.ru ? 'Свои продукты' : 'Own products'}</span></div><a href="/resume" className="rb-text-link">{t.resume}<Icon /></a></div></section>;
}

function CVSection({ t }) {
  return <section className="rb-section rb-cv" id="cv"><div className="rb-section-heading"><div><Label>{t.cvLabel}</Label><h2>{t.cvTitle}</h2></div><p>{t.cvText}</p></div><div className="rb-cv-grid"><a href="/resume/Sergey_Ostaev_CV_RU.pdf" download="Sergey_Ostaev_CV_RU.pdf" className="rb-cv-card"><span className="rb-cv-lang">RU <Icon name="download" /></span><strong>{t.cvRu}</strong><span>PDF · 2 {t.cvPages}</span></a><a href="/resume/Sergey_Ostaev_CV_EN.pdf" download="Sergey_Ostaev_CV_EN.pdf" className="rb-cv-card"><span className="rb-cv-lang">EN <Icon name="download" /></span><strong>{t.cvEn}</strong><span>PDF · 2 {t.cvPages}</span></a></div><a href="/resume" className="rb-text-link rb-cv-more">{t.cvMore}<Icon name="arrow-right" /></a></section>;
}

function WaysToWork({ t }) {
  return <section className="rb-section rb-ways" id="services"><div className="rb-section-heading"><div><Label>{t.waysLabel}</Label><h2 className="rb-multiline">{t.waysTitle}</h2></div><p>{t.waysText}</p></div><div className="rb-ways-grid">{t.ways.map(([title, desc, result, icon], i) => <a className="rb-way" href={messageLink(`${t === content.ru ? 'Привет, Сергей! Хочу обсудить' : 'Hi Sergey! I’d like to discuss'}: ${title}.`)} target="_blank" rel="noreferrer" key={title}><div><Icon name={icon} /><span>0{i + 1}</span></div><h3>{title}</h3><p>{desc}</p><span className="rb-way-result">{result}<Icon /></span></a>)}</div></section>;
}

function IdeaLab({ t }) {
  return <section className="rb-lab"><div><Label>{t.labLabel}</Label><h2>{t.labTitle}</h2><p>{t.labText}</p></div><LinkButton href={channel} external secondary>{t.labCta}</LinkButton></section>;
}

export function RebrandContact({ t }) {
  return <section className="rb-contact" id="contact"><div className="rb-contact-top"><span className="rb-live-dot" /><Label>{t === content.ru ? 'ХОРОШИЕ ПРОЕКТЫ НАЧИНАЮТСЯ С РАЗГОВОРА' : 'GOOD PROJECTS START WITH A CONVERSATION'}</Label></div><div className="rb-contact-main"><div><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><a className="rb-contact-arrow" href={messageLink(t === content.ru ? 'Привет, Серёга! Есть идея: ' : 'Hi Sergey! I have an idea: ')} target="_blank" rel="noreferrer" aria-label={t.contactCta}><Icon name="arrow-up-right" /></a></div><div className="rb-contact-bottom"><span>{t.contactHint}</span><a href={telegram} target="_blank" rel="noreferrer">Telegram <Icon /></a><a href="mailto:sergiys1997@gmail.com">{t.email}<Icon name="arrow-up-right" /></a></div></section>;
}

export function RebrandFooter({ lang }) {
  const t = content[lang];
  return <footer className="rb-footer"><Brand t={t} /><div><span>© {new Date().getFullYear()} {t.name}</span><small>{t.footer}</small></div><span>{t.location}</span><a href={channel} target="_blank" rel="noreferrer">Telegram<Icon /></a><a href="/#top" aria-label={t.top}><Icon name="arrow-up" /></a></footer>;
}

export default function RebrandHome({ lang }) {
  const t = content[lang];
  return <main id="main-content" tabIndex={-1} className="rb-home"><div id="top" /><Hero t={t} /><Proof t={t} /><NowBuilding t={t} /><Process t={t} /><SelectedWork t={t} /><ProductStory t={t} /><About t={t} /><CVSection t={t} /><WaysToWork t={t} /><IdeaLab t={t} /><RebrandContact t={t} /></main>;
}

export function LingoSlideCase({ lang }) {
  const t = content[lang];
  const c = lingoCaseContent[lang];
  return <main className="rb-case rb-lingo-case" id="main-content" tabIndex={-1}>
    <div id="top" /><a className="rb-text-link rb-back" href="/#now"><Icon name="arrow-left" />{t.back}</a>
    <section className="rb-lingo-hero">
      <div className="rb-lingo-hero-copy"><Label>{c.label}</Label><h1>{c.title}</h1><p>{c.lead}</p><div className="rb-actions"><LinkButton href={productSite} external>{c.site}</LinkButton><a className="rb-text-link" href={store} target="_blank" rel="noreferrer">{c.store}<Icon /></a></div><span className="rb-lingo-release"><span className="rb-live-dot" />{c.status}</span></div>
      <div className="rb-lingo-hero-art"><img className="rb-lingo-cover" src="/rebrand/lingoslide-device-home.webp" alt={t.imageAlt} width="1122" height="1402" fetchPriority="high" /></div>
    </section>
    <section className="rb-lingo-facts" aria-label={c.status}>{c.facts.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <section className="rb-lingo-ownership"><div><Label>{c.ownershipLabel}</Label><h2>{c.ownershipTitle}</h2><p>{c.ownershipText}</p><div className="rb-lingo-roles">{c.roles.map(([name, role, text], i) => <article className={i === 1 ? 'is-codex' : ''} key={name}><span>0{i + 1}</span><small>{name}</small><h3>{role}</h3><p>{text}</p></article>)}</div></div><div className="rb-lingo-scope">{c.scope.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="rb-case-chapter"><Label>{c.problemLabel}</Label><div><h2>{c.problemTitle}</h2><p>{c.problemText}</p></div></section>
    <section className="rb-case-chapter"><Label>{c.modelLabel}</Label><div><h2>{c.modelTitle}</h2><p>{c.modelText}</p><ol className="rb-lingo-path">{c.modelSteps.map((step, i) => <li key={step}><span>{i + 1}</span>{step}</li>)}</ol></div></section>
    <figure className="rb-case-gallery rb-lingo-gallery"><div>{[['language', 'language'], ['placement', 'placement'], ['path', 'path'], ['grammar', 'grammar']].map(([imageKey, titleKey], i) => <article className="rb-lingo-shot" key={imageKey}><div><img src={`/rebrand/lingoslide-device-${imageKey}.webp`} alt={c.screenNames[titleKey]} loading="lazy" width="1122" height="1402" /></div><p><span>0{i + 1}</span>{c.screenNames[titleKey]}</p></article>)}</div><figcaption>{c.galleryCaption}</figcaption></figure>
    <section className="rb-lingo-feature"><div><Label>{c.designLabel}</Label><h2>{c.designTitle}</h2><p>{c.designText}</p></div><figure><img src="/rebrand/lingoslide-before-after.png" alt={c.designCaption} loading="lazy" width="1600" height="900" /><figcaption>{c.designCaption}</figcaption></figure></section>
    <section className="rb-lingo-feature is-reversed"><div><Label>{c.processLabel}</Label><h2>{c.processTitle}</h2><p>{c.processText}</p></div><figure><img src="/rebrand/lingoslide-process.png" alt={c.processCaption} loading="lazy" width="1600" height="900" /><figcaption>{c.processCaption}</figcaption></figure></section>
    <section className="rb-lingo-scale"><div className="rb-lingo-scale-copy"><Label>{c.scaleLabel}</Label><h2>{c.scaleTitle}</h2><p>{c.scaleText}</p></div><div className="rb-lingo-scale-facts">{c.scaleFacts.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div><img src="/rebrand/lingoslide-mascot-review.webp" alt="" loading="lazy" width="720" height="720" /></section>
    <section className="rb-case-chapter rb-lingo-proof"><Label>{c.proofLabel}</Label><div><h2>{c.proofTitle}</h2><p>{c.proofText}</p></div></section>
    <section className="rb-lingo-result"><img src="/rebrand/lingoslide-trophy.webp" alt="" loading="lazy" width="720" height="720" /><div><Label>{c.resultLabel}</Label><h2>{c.resultTitle}</h2><p>{c.resultText}</p><div className="rb-actions"><LinkButton href={productSite} external>{c.site}</LinkButton><a className="rb-text-link" href={store} target="_blank" rel="noreferrer">RuStore<Icon /></a></div></div></section>
    <RebrandContact t={t} />
  </main>;
}
