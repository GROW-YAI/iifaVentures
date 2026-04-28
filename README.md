# IFA Ventures 

## Project Overview

IFA Ventures is a sustainability-focused website showcasing a social enterprise that transforms plant waste (plantain/banana peels, sawdust) from markets, farms, and sawmills into eco-friendly paper bags and packaging. The mission reduces plastic reliance, cuts waste, creates jobs for youth/women/PWDs, and promotes climate action/gender equity/inclusivity.

**Main Features:**
- Responsive navbar with Home/About/Contact navigation
- Hero slider with 3 slides highlighting mission
- Home: About preview + case studies (waste collection/sorting)
- About: Detailed process (pulping, refining, bag-making)
- Contact: Footer-focused contact info
- Green theme, Bootstrap 4 + custom CSS, Font Awesome icons
- **Boafo Accessibility Widget** - Integrated for screen reader/voice control, making site accessible to all users

**Tech Stack:**
- React 18 + Vite (fast dev/build)
- React Router v6 (SPA navigation)
- Bootstrap 4 CSS/JS (grids/responsive)
- Custom SCSS/CSS (Poppins font, green theme)
- Boafo Widget (accessibility)

## How to Get Your Boafo API Key

1. Visit [boafo.co](https://boafo.co)
2. Register/login
3. Dashboard → API Keys → Generate new key
4. Copy the key

## How to Integrate the Boafo Widget

Follow official guide: [Boafo Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

Add to `.env`: `VITE_BOAF0_API_KEY=your_key_here`
Import `<BoafoWidgetInitializer />` in App.jsx.

## Setup Instructions

1. Clone repo:
```
git clone <repo>
cd iifaVentures
```

2. Install dependencies:
```
npm install
```

3. Copy env:
```
cp .env.example .env
```
Edit `.env`, add `VITE_BOAF0_API_KEY=your_key`

4. Run:
```
npm run dev
```
Open http://localhost:5173/

**Build**: `npm run build` → `dist/`

**Note**: Boafo key optional (widget graceful fallback).
