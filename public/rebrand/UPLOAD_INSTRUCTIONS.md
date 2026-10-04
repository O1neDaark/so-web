# Что заменить в GitHub

Репозиторий: `O1neDaark/so-web`

Всего 8 файлов.

## 1. Папка `src/rebrand`

ЗАМЕНИТЬ:
- `src/rebrand/Rebrand.jsx`
- `src/rebrand/content.js`

ДОБАВИТЬ НОВЫЙ:
- `src/rebrand/polish.css`

## 2. Папка `src`

ЗАМЕНИТЬ:
- `src/main.jsx`

Он отличается одной новой строкой:

```js
import "./rebrand/polish.css";
```

## 3. Папка `public/rebrand`

ЗАМЕНИТЬ:
- `public/rebrand/enterprise-nda-interface.png`
- `public/rebrand/rag-nda-interface.png`
- `public/rebrand/favicon.png`

ДОБАВИТЬ НОВЫЙ:
- `public/rebrand/brand-mark.png`

# Больше ничего менять не нужно

`src/App.jsx`, `src/styles.css`, `src/rebrand/rebrand.css` не трогать.

После загрузки Vercel должен автоматически пересобрать сайт.

# Что исправляет набор

- Enterprise и RAG на главной показывают реальные NDA-скриншоты вместо concept-art.
- На карточках Enterprise/RAG появляется Big Tech / Telecom + NDA.
- AiZooFamily получает 30 000+ показов и ссылку на Pinterest.
- Добавляется новый оранжевый логотип C. и новый favicon.
- С главной убираются голубые UI-подложки.
- Enterprise / RAG / Diagnostics получают единый нейтральный светлый стиль.
- Исправляются внутренние отступы правого текста в solution-блоках.
- RAG flow становится светлым и не вылезает за сетку.
- LingoSlide case не затрагивается и сохраняет голубой продуктовый стиль.
