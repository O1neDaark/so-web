import React from "react";
import logoMark from "./assets/co-logo-mark.png";

const introCopy = {
  ru: {
    loading: "Собираем пространство",
    loadingAlt: "Building the experience",
    eyebrow: "SO / CREATIVE SYSTEMS",
    title: "Какую сторону выбираете?",
    text: "Настройте атмосферу портфолио под себя. Выбор можно изменить в любой момент в верхнем меню.",
    dark: "Тёмную",
    darkText: "Контраст, глубина и световые акценты",
    light: "Светлую",
    lightText: "Воздух, ясность и спокойная типографика",
    hint: "Выберите тему, чтобы открыть портфолио",
  },
  en: {
    loading: "Building the experience",
    loadingAlt: "Собираем пространство",
    eyebrow: "SO / CREATIVE SYSTEMS",
    title: "Which side do you choose?",
    text: "Set the portfolio atmosphere that feels right. You can switch it at any time from the header.",
    dark: "Dark",
    darkText: "Contrast, depth and luminous accents",
    light: "Light",
    lightText: "Space, clarity and calm typography",
    hint: "Choose a theme to open the portfolio",
  },
};

export default function ThemeIntro({ phase, lang, onSelect }) {
  if (phase === "done") return null;

  const t = introCopy[lang] ?? introCopy.ru;
  const isLoading = phase === "loading";

  return (
    <div className="theme-intro" data-phase={phase}>
      <div className="theme-intro-noise" aria-hidden="true" />
      {isLoading ? (
        <div className="preloader" role="status" aria-live="polite">
          <div className="preloader-mark">
            <img src={logoMark} alt="" aria-hidden="true" />
          </div>
          <p>{t.eyebrow}</p>
          <strong>{t.loading}</strong>
          <span className="preloader-translation">{t.loadingAlt}</span>
          <div className="preloader-track" aria-hidden="true">
            <span />
          </div>
        </div>
      ) : (
        <section className="theme-choice" role="dialog" aria-modal="true" aria-labelledby="theme-choice-title">
          <p className="theme-choice-eyebrow">{t.eyebrow}</p>
          <h1 id="theme-choice-title">{t.title}</h1>
          <p className="theme-choice-copy">{t.text}</p>
          <div className="theme-choice-grid">
            <button className="theme-choice-card theme-choice-dark" type="button" onClick={() => onSelect("dark")}>
              <span className="theme-choice-preview" aria-hidden="true">
                <i className="pi pi-moon" />
                <span className="theme-preview-window"><b /><b /><b /></span>
              </span>
              <span className="theme-choice-label">
                <strong>{t.dark}</strong>
                <small>{t.darkText}</small>
              </span>
              <i className="pi pi-arrow-up-right theme-choice-arrow" aria-hidden="true" />
            </button>
            <button className="theme-choice-card theme-choice-light" type="button" onClick={() => onSelect("light")}>
              <span className="theme-choice-preview" aria-hidden="true">
                <i className="pi pi-sun" />
                <span className="theme-preview-window"><b /><b /><b /></span>
              </span>
              <span className="theme-choice-label">
                <strong>{t.light}</strong>
                <small>{t.lightText}</small>
              </span>
              <i className="pi pi-arrow-up-right theme-choice-arrow" aria-hidden="true" />
            </button>
          </div>
          <small className="theme-choice-hint">{t.hint}</small>
        </section>
      )}
    </div>
  );
}
