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
