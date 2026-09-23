# 🔮 Online Tarot Reading Application

A modern, responsive, and bilingual (Ukrainian & English) single-page application for professional Tarot readings.

**Updated:** full detailed card interpretations (keywords, symbolism, spheres, nuances) from an expanded dataset. Single source of truth in `cards.js`.

---

### 🇺🇦 Коротко про проект

Це сучасний веб-додаток для онлайн-гадання на картах Таро. Містить 28 професійних розкладів, повну колоду з 78 карт з **розширеними** описами та інтеграцію з ШІ для глибокого тлумачення результатів. Проект розроблений під брендом **Gearberry**.

## ✨ Key Features

- **28 Professional Layouts**: Ranging from simple 1-card draws to complex 21-card spreads (Celtic Cross, Tree of Life, etc.).
- **Full 78-Card Deck**: Major + Minor Arcana with rich bilingual interpretations (upright / reversed).
- **Bilingual Support**: Full localization for Ukrainian and English.
- **Privacy Oriented**: No data collection or backend required. All readings are processed locally in the user's browser.
- **PWA**: Installable, offline-capable via Service Worker.

## 🤖 AI Tarot Specialist: Gemini Bot

Integrated with a custom-trained **Gemini Bot** (Leia) for deep, contextualized interpretations.

## 🛠️ Tech Stack

- HTML5 + Vue.js 3 (CDN)
- Tailwind CSS
- Font Awesome + Cormorant Garamond

## 📁 Structure

| File | Purpose |
|------|---------|
| `cards.js` | **Single source of truth** — all 78 cards with detailed meanings |
| `data.js` | Spreads (28 layouts) + UI translations |
| `app.js` | Vue application logic |
| `index.html` | Entry point |
| `sw.js` | Service Worker (PWA / offline) |
| `style.css` | Custom styles |

## 🚀 How to Run

1. Clone / download the files.
2. Open `index.html` in a modern browser (or serve via any static server).

No build step required.

## 📄 License

Open-source. Card images from the public-domain Rider-Waite tradition (hosted via CDN).

---

*Created with passion for Tarot and Coding. Descriptions expanded 2026.*
